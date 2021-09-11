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
  const todo = tasks.filter(task => task.status == "doing")
  
  return (
    <div className="list">
        {todo.map((task, index) => (
          <TaskCard task={task} key={task._id} />
        ))}
        
    </div>
  );
}
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

const filterItems = (query) => {
  return fruits.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) > -1);
};

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']