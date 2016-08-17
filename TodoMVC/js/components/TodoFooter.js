'use strict'
import React from 'react'

class TodoFooter extends React.Component{
    render(){
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong/>0 items left
                </span>
                <ul className="filters">
                    <li>
                        <a href="#/" className="selected">All</a>
                    </li>
                    <li>
                        <a href="#/active" className="">Active</a>
                    </li>
                    <li>
                        <a href="#/completed" className="selected">Completed</a>
                    </li>
                </ul>
                <button className="clear-completed" >Clear completed</button>
            </footer>
        )
    }
}

export {
    TodoFooter
}
