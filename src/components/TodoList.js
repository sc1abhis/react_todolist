import React from 'react'
import Todo from '../components/Todo'
const TodoList = () => {

    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                <Todo />
                <Todo />

                </ul>
            </div>

        </div>
    );
  }

export default TodoList
