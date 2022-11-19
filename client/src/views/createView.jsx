import React, { useState } from "react";
import CreateForm from "../components/CreateForm";
import { Link } from "react-router-dom";

const CreateView = () => {
  return (
    <div>
      <CreateForm />
      <Link to={`/`}>Home</Link>
    </div>
  );
};

export default CreateView;
