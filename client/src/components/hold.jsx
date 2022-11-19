import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import GameButtons from "../components/GameButtons";

const PlayerStatusView = (props) => {
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);
  const { game } = useParams();
  const [game1, setGame1] = useState("undefined");
  const [game2, setGame2] = useState("undefined");
  const [game3, setGame3] = useState("undefined");
  const [id, setId] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players/")
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [players]);

  const onClickHandler = (value, _id) => {
    setId(_id);
    if (game == 1) {
      setGame1(value);
    } else if (game == 2) {
      setGame2(value);
    } else if (game == 3) {
      setGame3(value);
    } else {
      console.log("not a valid game id");
    }
    axios
      .put(`http://localhost:8000/api/players/${_id}`, { game1, game2, game3 })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <Link to={"/"}>
          <button>ManagePlayers</button>
        </Link>
        <div>
          <Link to={"/status/game/1/"}>
            <button>Game 1</button>
          </Link>{" "}
          |{" "}
          <Link to={"/status/game/2/"}>
            <button>Game 2</button>
          </Link>{" "}
          |{" "}
          <Link to={"/status/game/3/"}>
            <button>Game 3</button>
          </Link>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Actions Game {game}</th>
            <th>Game {game} Status</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, i) => {
            return (
              <tr key={i}>
                <td>{player.name}</td>
                <td>{player.position}</td>
                <td>
                  <button
                    onClick={() => onClickHandler("Playing", `${player._id}`)}
                  >
                    Playing
                  </button>
                  <button
                    onClick={() =>
                      onClickHandler("Not Playing", `${player._id}`)
                    }
                  >
                    Not Playing
                  </button>
                  <button
                    onClick={() => onClickHandler("Undecided", `${player._id}`)}
                  >
                    Undecided
                  </button>
                </td>
                <td>{player.game1}</td>
                <td>{player._id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerStatusView;
