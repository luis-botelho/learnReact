import React, { useEffect, useState } from "react";
import { Api } from '../../api/api';

const CreateTask = () =>{
    const [task, setTask] = useState({})

    const handleFields = (event) =>{
        const auxTask = { ...task };
        auxTask[event.target.name] = event.target.value;
        setTask(auxTask);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        
    }

}