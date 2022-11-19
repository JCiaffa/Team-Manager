import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GameButtons = (props) => {
  const { id, game } = props;
  const [game1, setGame1] = useState("undefined");
  const [game2, setGame2] = useState("undefined");
  const [game3, setGame3] = useState("undefined");

  const onClickHandler = (value) => {
    if (game == "game1") {
      console.log("correct");
    } else {
      console.log({ game });
    }
  };

  return (
    <div>
      <button onClick={onClickHandler("Playing")}>Playing</button>
      <button onClick={onClickHandler("Not Playing")}>Not Playing</button>
      <button onClick={onClickHandler("Undecided")}>Undecided</button>
    </div>
  );
};

export default GameButtons;
