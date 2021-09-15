import React, { useEffect, useState } from "react";
import Api from "../../Api";

const EditTask = (props) => {
  const id = props.match.params.id;
  const [fields, setFields] = useState({});

  useEffect(() => {
    getTaskById();
  }, []);
  const getTaskById = async () => {
    const response = await Api.fetchGetById(id);
    const data = await response.json();
    setFields(data[0]);
  };
  const handleChange = (event) => {
    const auxFields = { ...fields };
    auxFields[event.target.name] = event.target.value;
    setFields(auxFields);
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const data = { ...fields };
    try {
      await Api.fetchPut(data, id);
      props.history.push("/");
    } catch (e) {
      console.log(e);
    }
  };
  const exit = () => {
    props.history.push(`/task/${id}`);
  };

  return (
    <section >
      <div className="form">
          <h1>Atualizar tarefa </h1>
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
                value={fields.title}
              ></input>
            </div>
            <label hmtlFor="description" className="formLabel">
              Descrição:{" "}
            </label>
            <input
              className="formTextarea"
              name="description"
              id="description"
              onChange={handleChange}
              value={fields.description}
            ></input>
            <div className="formInputs">
              <span>Prioridade: </span>
              <select
                name="priority"
                id="priority"
                className="formSelect"
                onChange={handleChange}
              >
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
                <option value="Fazer">Fazer</option>
                <option value="Fazendo">Fazendo</option>
                <option value="Feita">Feita</option>
              </select>
            </div>
            <div className="formDate">
              <label hmtlFor="deadline">Prazo:</label>
              <input
                type="date"
                name="deadline"
                id="deadline"
                onChange={handleChange}
              ></input>
            </div>
            <button type="submit" className="btn">
              Concluir
            </button>
            <button type="button" onclick={exit}>Voltar</button>
          </form>
      </div>
    </section>
  );
};

export default EditTask;
