import React, { useEffect, useState} from 'react';
import Api from '../../Api'


const TaskView = (props)=> {
    const id = props.match.id
    const [task, setTask] = useState({})
    useEffect(()=>{
        getTaskById();
    }, [])
    const getTaskById = async ()=>{
        const reponse = await Api.fetchGetById(id);
        const data = await reponse.json();
        setTask(data);
    }
    return(
        <div>
            {task}
        </div>
    )
}
export default TaskView;