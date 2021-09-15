import React, { useEffect, useState } from "react";
import Api from "../../Api";
import { Link } from "react-router-dom";
import "./TaskView.css";
import { format } from "date-fns";

const TaskView = (props) => {
  const id = props.match.params.id;

  const [task, setTask] = useState({});
  const [deadline, setDeadline] = useState('');
  const [created, setCreated] = useState('')
  const [updated,setUpdated] = useState('')
  useEffect(() => {
    getTaskById();
  }, []);

  // let deadline = ''
  // let createdAt = ''
  // let updatedAt = ''

  const getTaskById = async () => {
    const reponse = await Api.fetchGetById(id);
    const data = await reponse.json();
    setTask(data[0]);
    let deadline = format(new Date(data[0].deadline), "dd/MM/yyyy");
    let createdAt = format(new Date(data[0].createdAt), "hh:mm dd/MM/yyyy");
    let updatedAt = format(new Date(data[0].updatedAt), "hh:mm dd/MM/yyyy");
    setDeadline(deadline);
    setCreated(createdAt)
    setUpdated(updatedAt)
  };
  
  
  
  
  return (
    <article className="viewBody">
      
      <div className="viewCard">
        <h1>{task.title}</h1>
        <p>Descrição: {task.description}</p>
        <p>Prioridade: {task.priority}</p>
        <p>Status: {task.status}</p>
        <p>Prazo: {deadline}</p>
        <p>Data da criação: {created}</p>
        <p>Ultima atualização: {updated}</p>
        <Link to={`/update/${task._id}`}>
          <button type="button">Editar</button>
        </Link>
        <Link to={`/delete/${task._id}`}>
          <button type="button">Deletar</button>
        </Link>
        <Link to="/">
          <button type="button">Voltar</button>
        </Link>
      </div>
    </article>
  );
};
export default TaskView;
