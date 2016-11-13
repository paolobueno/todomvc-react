import React from 'react';
import Todo from './Todo';
export default class TodoList extends React.Component {
    render() {
        var todos = this.props.todos.map((t, i) =>
            <Todo todo={t} key={t.text}
                onDestroy={() => this.props.onDestroy(i)}
                toggleCompleted={() => this.props.onToggle(i)}
            />);
        return <ul className="todo-list">
            {todos}
        </ul>
    }
}