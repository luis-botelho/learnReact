import React from "react";
import './TaskCard.css'

const TaskCard = (props) => {
  const task = props.task;

  return (
    <div>
      <span>{task.title}</span>
      <span>{task.description}</span>
      <span>{task.priority}</span>
      <span>{task.status}</span>
      <span>{task.createdAt}</span>
      <span>{task.deadline}</span>
      <span>{task.updatedAt}</span>
    </div>
  );
}

export default TaskCard

