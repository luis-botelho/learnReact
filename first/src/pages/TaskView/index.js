import React, { useEffect, useState } from "react";
import Api from "../../Api";
import { Link } from 'react-router-dom';
import './TaskView.css'
const TaskView = (props) => {
  const id = props.match.params.id;
  const [task, setTask] = useState({});
  useEffect(() => {
    getTaskById();
  },[]);

  const getTaskById = async () => {
    const reponse = await Api.fetchGetById(id);
    const data = await reponse.json();
    setTask(data[0]);
  };
  return (
    <article className="viewBody">
      <div className="viewCard">
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <p>Prioridade: {task.priority}</p>
        <p>Status: {task.status}</p>
        <p>Prazo: {task.deadline}</p>
        <p>Data da criação: {task.createdAt}</p>
        <p>Ultima atualização: {task.updatedAt}</p>
      <Link to={`/update/${task._id}`}><button type="button">Editar</button></Link>
      <Link to={`/delete/${task._id}`}><button type="button">Deletar</button></Link>
      </div>
    </article>
  );
};
export default TaskView;
