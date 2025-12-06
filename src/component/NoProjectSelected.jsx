import React from "react";
import logo from "../assets/logo.png";
import Button from "./Button";
const NoProjectSelected = ({ onAddProject }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={logo}
        alt="no project logo"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get start with a new one
      </p>

      <Button onClick={onAddProject}>Create new project</Button>
    </div>
  );
};

export default NoProjectSelected;
