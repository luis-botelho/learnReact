import React, { useEffect, useState } from "react";
import Api from "../../Api";
import { Link } from 'react-router-dom';
import './TaskView.css'
import { format,compareAsc } from 'date-fns'

const TaskView = (props) => {
  const id = props.match.params.id;
  
  const [task, setTask] = useState({});
  
  useEffect(() => {
    getTaskById();
  },[]);

  let deadline = new Date(task.deadline)
  let createdAt = new Date(task.createdAt)
  let updatedAt = new Date(task.updatedAt)
  
  const getTaskById = async () => {
    const reponse = await Api.fetchGetById(id);
    const data = await reponse.json();
    setTask(data[0]);
  };
  // const formatter = (date) =>{
  //   ``
  // }
  return (
    <article className="viewBody">
      <div className="viewCard">
        <h1>{task.title}</h1>
        <p>Descrição: {task.description}</p>
        <p>Prioridade: {task.priority}</p>
        <p>Status: {task.status}</p>
        <p>Prazo: {deadline.getDate(),deadline.getTime()}</p>
        <p>Data da criação: {createdAt.getDate()}</p>
        <p>Ultima atualização: {updatedAt.getDate()}</p>
      <Link to={`/update/${task._id}`}><button type="button">Editar</button></Link>
      <Link to={`/delete/${task._id}`}><button type="button">Deletar</button></Link>
      <Link to="/"><button type="button">Voltar</button></Link>
      </div>
    </article>
  );
};
export default TaskView;
