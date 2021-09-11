import React, { useState, useEffect } from "react";
import TaskCard from "../TaskCard";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTask();
  }, []);

  const url = "http://localhost:3050/tasks";
  const getTask = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setTasks(data);
  };

  return (
    <div className="list">
      <table>
        <tr>
          <th>Título</th>
          <th>Descriçao</th>
          <th>Prioridade</th>
          <th>Status</th>
          <th>Data da criação</th>
          <th>Prazo</th>
          <th>Data de atualização</th>
        </tr>
        {tasks.map((task, index) => (
          <TaskCard task={task} key={task._id} />
        ))}
      </table>
      

    </div>
  );
}
