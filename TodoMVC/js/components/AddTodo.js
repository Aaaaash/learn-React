'use strict'
import React from 'react'

class AddTodo extends React.Component{
    render(){
        return (
            <header className="header">
                <h1>TodoList</h1>
                <input className="new-todo" placeholder="What needs to be done?" value=""/>
            </header>
        )
    }
}
export {
    AddTodo
}
