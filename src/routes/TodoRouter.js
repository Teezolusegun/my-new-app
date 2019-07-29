import React,{} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Todo from '../components/Todo'
import Likes from '../components/Likes';
import localstorage from '../components/Localstorage'
import NotFoundPage from '../components/NotFoundPage'

const TodoRouter = ()=> (
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Todo}/>
    <Route  path="/likesApp" component={Likes}/>
    <Route  path="/localstorage" component={localstorage}/>
    <Route   component={NotFoundPage}/>
    </Switch>
    </BrowserRouter>
)

export default TodoRouter;