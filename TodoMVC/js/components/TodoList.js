'use strict'
import React from 'react'

class TodoList extends React.Component{
    render(){
        return (
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <ul className="todo-list">
                    <li>
                        <div className="view">
                            <input type="checkbox" className="toggle"/>
                            <label>keke</label>
                            <button className="destroy"></button>
                        </div>
                    </li>
                </ul>
            </section>
        )
    }
}
export {
    TodoList
}
