import React from "react";
import './TaskCard.css'
import { Link } from 'react-router-dom';

const TaskCard = (props) => {
  const task = props.task;

  return (
    <Link to={`/task/${task._id}`} className="taskLink">
      <div className="taskCard">
        <p className="taskTitle">{task.title}</p>
        <p className="taskDescription">{task.description}</p>
        <div className="taskPriorityDiv"><span>{task.priority}</span></div>
        <p className="taskDeadLine">{task.DeadLine}</p>
      </div>
    </Link>
  );
}

export default TaskCard

