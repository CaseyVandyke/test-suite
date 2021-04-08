import React from 'react';

const Todo = ({ todo }) => {

    const list = () => {
        return (
            <div>
                <strike>{h1}</strike>
            </div>
        )
    }
    const { id, title, completed } = todo;
    const h1 = <h1>{title}</h1>;
    const todos = completed ? <strike>{h1}</strike> : h1;
    return (
        <div data-testid={`todo-${id}`} className="todo">{todos}</div>
    )
}

export default Todo;