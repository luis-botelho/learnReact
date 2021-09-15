import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom'
import '../Header/Header.css'


export default function Header(props){
    return(
        <header className="header">
            <nav className="navbar">
                <ul className="nav">
                    <Link to="/">
                        <li className='btn'>Tarefas</li>
                    </Link>
                    <Link to="/new">
                        <li className='btn'>Criar uma Tarefa</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}