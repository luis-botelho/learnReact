import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom'
import '../Header/Header.css'


export default function Header(){
    const [btnHome, setBtnHome] = useState('btn')
    const [btnCreate, setBtnCreate] = useState('btn')

    useEffect(() => {
        
    }, [])

    const selectHome = () => {
        setBtnHome('selected')
        setBtnCreate('btn')
    }
    const selectCreate = () => { 
        setBtnHome('btn')
        setBtnCreate('selected')
    } 

    return(
        <header className="header">
            <nav className="navbar">
                <ul className="nav">
                    <Link to="/">
                        <li className={btnHome} onClick={selectHome}>Tarefas</li>
                    </Link>
                    <Link to="/new">
                        <li className={btnCreate} onClick={selectCreate}>Criar uma Tarefa</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}