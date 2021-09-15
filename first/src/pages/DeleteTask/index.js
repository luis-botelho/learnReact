import React, { useState, useEffect } from "react";
import Api from "../../Api";
import "./DeleteTask.css";

const DeleteTask = (props) => {
  const id = props.match.params.id;
  const [task, setTask] = useState({});

  useEffect(() => {
    getTaskById();
  }, []);

  const getTaskById = async () => {
    const reponse = await Api.fetchGetById(id);
    const data = await reponse.json();
    setTask(data[0]);
  };

  const handleDelete = async (evento) => {
    evento.preventDefault();
    await Api.fetchDelete(id);
    props.history.push("/");
  };
  const exit = () => {
    props.history.push(`/task/${id}`);
  };
  return (
    <div className="DeleteCard">
      <div className="modal">
        <h1>{`Deseja Excluir a tarefa ${task.title} ?`}</h1>
        <button onClick={handleDelete} className="DeleteBtn">
          Deletar
        </button>
        <button onClick={exit} className="Cancel">
          Cancelar
        </button>
      </div>
    </div>
  );
};
export default DeleteTask;
