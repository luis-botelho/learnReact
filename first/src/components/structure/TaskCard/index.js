import React from "react";
import './TaskCard.css'

const TaskCard = (props) => {
  const task = props.task;

  return (
    <tr className="task-card">
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td>{task.priority}</td>
      <td>{task.status}</td>
      <td>{task.createdAt}</td>
      <td>{task.deadline}</td>
      <td>{task.updatedAt}</td>
    </tr>
  );
}

export default TaskCard

