import React from 'react';
import TaskList from '../../components/structure/TaskList'
import './Home.css';
export default function Home(){
    return(
        <div className="container">
            <TaskList/>
        </div>
    )
}