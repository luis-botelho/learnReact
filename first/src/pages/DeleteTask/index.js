import React from "react";
import Api from "../../Api";

const DeleteTask =  (props) => {
  const id = props.match.params.id;
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
      <h1>Deseja Excluir a tarefa</h1>
      <div className="DeleteBtns">
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
