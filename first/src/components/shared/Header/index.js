import React from 'react';
import { Link } from 'react-router-dom'
import '../Header/Header.css'


export default function Header(){
    
    
    const changeColor = (selector) => {
        
        
    }

    return(
        <header className="header">
            <nav className="navbar">
                <ul className="nav">
                    <Link to="/">
                        <li onclick={changeColor('home')} id='home'>Tarefas</li>
                    </Link>
                    <Link to="/new">
                        <li>Criar uma Tarefa</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}