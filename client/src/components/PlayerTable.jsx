import React from "react";
import axios from "axios";

const PlayerTable = (props) => {
  const handleDelete = (deleteId) => {
    axios
      .delete(`http://localhost:8000/api/list/${deleteId}`)
      .then((response) => {
        props.onDelete(deleteId);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <table>
      <thead>
        <tr>
          <th> Name</th>
          <th> Position</th>
          <th> Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.players.map((player, i) => {
          return (
            <tr key={i}>
              <td> {player.name}</td>
              <td> {player.position}</td>
              <td>
                <button onClick={() => handleDelete(player._id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PlayerTable;
