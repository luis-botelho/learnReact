import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './shared/Header'
import Footer from './shared/Footer'
import Home from '../pages/Home'
import CreateTask from '../pages/CreateTask'
import TaskView from '../pages/TaskView'



export default function App(){
   return (
       <div>
           <Header/>
                <Switch>
                    <Route path="/" exact={true} component={ Home }/>
                    <Route path="/new" component={ CreateTask }/>
                    <Route path="/task:id" component={ TaskView }/>
                </Switch>
           <Footer/>
       </div>
   )
}
