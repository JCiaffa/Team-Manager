import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import PlayerTable from "../components/PlayerTable";

const IndexView = (props) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players/")
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filterList = (deleteId) => {
    const updatedList = players.filter((player) => deleteId !== player._id);
    setPlayers(updatedList);
  };

  return (
    <div>
      <Link to={`/status/game/1/`}>Manage Player Status</Link>
      {players ? (
        <PlayerTable players={players} onDelete={filterList} />
      ) : (
        <h1>No Players</h1>
      )}
      <Link to={`/players/create/`}>Add a Player</Link>
    </div>
  );
};

export default IndexView;
