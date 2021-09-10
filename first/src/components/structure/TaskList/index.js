import React, { useState, useEffect } from "react";
import TaskCard from "../TaskCard";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTask();
  }, [])

  const url = 'http://localhost:3050/tasks';
  const getTask = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setTasks(data);
  }

  return (
    <div className="list">
      {tasks.map((task, index) => (
        <TaskCard task={task} key={task._id}/>
        ))}
    </div>
  )
}
