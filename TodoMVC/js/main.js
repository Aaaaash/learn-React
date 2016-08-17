'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import {AddTodo} from './components/AddTodo'
import {TodoList} from './components/TodoList'
import {TodoFooter} from './components/TodoFooter'

class TodoApp extends React.Component{
    render(){
        return (
            <section className="todoapp">
                <AddTodo></AddTodo>
                <TodoList></TodoList>
                <TodoFooter></TodoFooter>
            </section>
        )
    }
}
ReactDOM.render(
    <TodoApp />,
    document.getElementById('app')
)
