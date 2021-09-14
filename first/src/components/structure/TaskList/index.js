import React, { useState, useEffect } from "react";
import TaskCard from "../TaskCard";
import './TaskList.css'

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTask();
  }, []);

  const url = "http://localhost:3050/tasks";
  const getTask = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTasks(data);
  };
  const todo = tasks.filter(task => task.status === "Fazer")
  const doing = tasks.filter(task => task.status === "Fazendo")
  const done = tasks.filter(task => task.status === "Feita")
  
  return (
    <div className="taskContainer">
        <div className="todo">
          <h2>Fazer</h2>
          {todo.map((task) => (
            <TaskCard task={task} key={task._id} />
          ))}
        </div>
        <div className="doing">
          <h2>Fazendo</h2>
          {doing.map((task) => (
            <TaskCard task={task} key={task._id} />
          ))}
        </div>
        <div className="done">
        <h2>Feitas</h2>
          {done.map((task) => (
            <TaskCard task={task} key={task._id} />
          ))}
        </div> 
    </div>
    
  );
}


