import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/api/players/create/`, { name, position })
      .then((response) => {
        console.log(response.data);
        navigate(`/`);
      })
      .catch((err) => {
        const errorResponseDataErrors = err.response.data.errors;
        console.log(errorResponseDataErrors);
        const errMsgArr = [];
        for (const eachKey in errorResponseDataErrors) {
          errMsgArr.push(errorResponseDataErrors[eachKey].message);
        }
        setErrors(errMsgArr);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Name: </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label> Position: </label>
          <input
            type="text"
            name="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <button type="submit"> Add Player</button>
      </form>
      {errors.map((eachErr, i) => (
        <p key={i}> {eachErr}</p>
      ))}
    </div>
  );
};

export default Form;
