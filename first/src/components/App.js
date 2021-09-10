import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './shared/Header'
import Footer from './shared/Footer'
import Home from '../pages/Home'
import New from '../pages/New'
import TaskCard from './structure/TaskCard'


export default function App(){
   return (
       <div>
           <Header/>
                <Switch>
                    <Route path="/" exact={true} component={ Home }/>
                    <Route path="/new" component={ New }/>
                    <Route path="/tarefas" component={ TaskCard }/>
                </Switch>
           <Footer/>
       </div>
   )
}
