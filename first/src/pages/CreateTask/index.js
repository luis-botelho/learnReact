import React, { useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../Api";
import "./CreatTask.css";

const CreateTask = (props) => {
  const [task, setTask] = useState({});

  const handleChange = (event) => {
    const auxTask = { ...task };
    auxTask[event.target.name] = event.target.value;
    setTask(auxTask);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await Api.fetchPost(task);
      props.history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section >
      <div className="form">
          <h1>Crie uma nova tarefa</h1>
          <form onSubmit={handleSubmit}>
            <div className="formInputs">
              <label hmtlFor="title" className="formLabel">
                Título:{" "}
              </label>
              <input
                type="text"
                className="formInput"
                name="title"
                id="title"
                onChange={handleChange}
              ></input>
            </div>
            <div className="formInputs">
              <label hmtlFor="description" className="formLabel">
                Descrição:{" "}
              </label>
              <textarea
                className="formTextarea"
                name="description"
                id="description"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="formInputs">
              <span>Prioridade </span>
              <select
                name="priority"
                id="priority"
                className="formSelect"
                onChange={handleChange}
              >
                <option value="Baixa"></option>
                <option value="Alta">Alta</option>
                <option value="Média">Média</option>
                <option value="Baixa">Baixa</option>
              </select>
              <span>Status</span>
              <select
                name="status"
                id="status"
                className="formSelect"
                onChange={handleChange}
              >
                <option value="Fazer"></option>
                <option value="Fazer">Fazer</option>
                <option value="Fazendo">Fazendo</option>
                <option value="Feita">Feita</option>
              </select>
            </div>
            <div className="formInputs">
              <label hmtlFor="deadline">Prazo:</label>
              <input
                type="date"
                name="deadline"
                id="deadline"
                onChange={handleChange}
              ></input>
            </div>
            <button type="submit" className="btn">
              Criar
            </button>
            <Link to="/">
              <button type="button">Voltar</button>
            </Link>
          </form>
      </div>
    </section>
  );
};

export default CreateTask;
