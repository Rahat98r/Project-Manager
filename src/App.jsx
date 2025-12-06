import React, { useState } from "react";

import ProjectSideBar from "./component/ProjectSideBar";
import NewProject from "./component/NewProject.jsx";
import NoProjectSelected from "./component/NoProjectSelected.jsx";
import SelectedProject from "./component/SelectedProject.jsx";

const App = () => {
  const [projectSelectionState, setProjectSelectionState] = useState({
    selectProjectID: undefined,
    projects: [],
    tasks: [],
  });
  const handleAddTask = (taskdata) => {
    setProjectSelectionState((prevState) => {
      const taskID = Math.floor(Math.random() * 2000);
      const newTask = {
        text: taskdata,
        projectId: prevState.selectProjectID,
        id: taskID,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
    console.log(taskdata);
  };
  const handleDeleteTask = (id) => {
    setProjectSelectionState((prev) => {
      return {
        ...prev,

        tasks: prev.tasks.filter((task) => {
          return task.id !== id;
        }),
      };
    });
  };

  const startAddProject = () => {
    setProjectSelectionState((prevState) => {
      return {
        ...prevState,
        selectProjectID: null,
      };
    });
  };
  const handleSelectProject = (id) => {
    setProjectSelectionState((prevState) => {
      return {
        ...prevState,
        selectProjectID: id,
      };
    });
    console.log(projectSelectionState.selectProjectID);
  };
  const handleAddProject = (projectdata) => {
    const newProject = {
      ...projectdata,
      id: Math.floor(Math.random() * 2000),
    };
    setProjectSelectionState((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectProjectID: undefined,
      };
    });
  };
  const handleDelete = () => {
    setProjectSelectionState((prev) => {
      return {
        ...prev,
        selectProjectID: undefined,
        projects: projectSelectionState.projects.filter((project) => {
          return project.id !== prev.selectProjectID;
        }),
      };
    });
  };
  const handleCancel = () => {
    setProjectSelectionState((prevState) => {
      return {
        ...prevState,
        selectProjectID: undefined,
      };
    });
  };
  console.log(
    "Current Projects:",
    JSON.stringify(projectSelectionState.projects, null, 2)
  );
  let selectedPropject = projectSelectionState.projects.find(
    (project) => project.id === projectSelectionState.selectProjectID
  );
  const selectedProjectTasks = projectSelectionState.tasks.filter(
    (task) => task.projectId === projectSelectionState.selectProjectID
  );
  let content = (
    <SelectedProject
      project={selectedPropject}
      onDelete={handleDelete}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={selectedProjectTasks}
    />
  );
  if (projectSelectionState.selectProjectID === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />;
  } else if (projectSelectionState.selectProjectID === undefined) {
    content = <NoProjectSelected onAddProject={startAddProject} />;
  }

  return (
    <div className="h-screen py-8 flex gap-8">
      <ProjectSideBar
        onAddProject={startAddProject}
        projects={projectSelectionState.projects}
        onSelect={handleSelectProject}
      />

      {content}
    </div>
  );
};

export default App;
