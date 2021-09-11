import React from 'react';
import { Link } from 'react-router-dom'



export default function Header(){
    return(
        <header>
            <ul>
                <Link to="/">
                    <li>Item 1</li>
                </Link>
                <Link to="/tarefas">
                    <li>Item 1</li>
                </Link>
            </ul>
        </header>
    )
}