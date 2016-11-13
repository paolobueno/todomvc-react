import React from 'react';
import Todo from './Todo';
export default function TodoList(props) {
    var todos = props.todos.map(t => <Todo todo={t} />);
    return <ul className="todo-list">
        {todos}
    </ul>
}