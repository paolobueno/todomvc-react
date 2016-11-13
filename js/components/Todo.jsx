import React from 'react';

const todoClass = (todo) => todo.completed ? 'completed' : '';

export default function Todo (props) {
	return <li className={todoClass(props.todo)}>
		<div className="view">
			<input className="toggle" type="checkbox" checked={props.todo.completed} onChange={props.toggleCompleted} />
			<label>{props.todo.text}</label>
			<button className="destroy" onClick={props.onDestroy}></button>
		</div>
		<input className="edit" value="Create a TodoMVC template" />
	</li>;
}