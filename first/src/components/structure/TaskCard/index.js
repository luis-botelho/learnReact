import React from "react";


const TaskCard = (props) => {
  const task = props.task;

  return (
    <div className="task-card">
      <h1>{task.title}</h1>
      <span>{task.description}</span>

    </div>
  );
}

export default TaskCard