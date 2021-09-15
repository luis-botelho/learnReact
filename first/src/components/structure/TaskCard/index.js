import React from "react";
import './TaskCard.css'
import { Link } from 'react-router-dom';
import { format } from 'date-fns'

const TaskCard = (props) => {
  const task = props.task;
  const color = props.task.priority === 'Alta' ? 'high' : props.task.priority === 'Baixa' ? 'low' : 'mid';
  const deadline = format(new Date(task.deadline),'hh:mm dd/MM/yyyy')
  
  return (
    <Link to={`/task/${task._id}`} className="taskLink">
      <div className="taskCard">
        <h3 className="taskTitle">{task.title}</h3>
        <p className="taskDeadLine">Prazo: {deadline}</p>
        <div className="taskPriorityDiv"><span className={color}><span className="priority">Prioridade:</span> {task.priority}</span></div>
        <p className="taskDeadLine">{task.DeadLine}</p>
      </div>
    </Link>
  );
}

export default TaskCard

