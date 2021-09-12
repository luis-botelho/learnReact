import React, { useEffect, useState } from "react";
import Api from "../../Api";

const TaskView = (props) => {
  const id = props.match.params.id;
  const [task, setTask] = useState({});
  useEffect(() => {
    getTaskById();
  }, []);

  const getTaskById = async () => {
    const reponse = await Api.fetchGetById(id);
    const data = await reponse.json();
    setTask(data);
  };
  return (
    <article className="task">
      <h1>POrra</h1>
    </article>
  );
};
export default TaskView;
