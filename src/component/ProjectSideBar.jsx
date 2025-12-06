import React from "react";
import Button from "./Button";

const ProjectSideBar = ({ onAddProject, projects, onSelect }) => {
  return (
    <div className="w-1/3 px-8 text-stone-50 py-16  bg-stone-900 md:w-72 rounded-r-xl">
      <div>
        <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
          YOUR PROJECTS
        </h1>
        <Button onClick={onAddProject} className="">
          + Add Projects
        </Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <button
                className="w-full px-2 py-1 rounded-sm text-left  my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800"
                onClick={() => onSelect(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectSideBar;
