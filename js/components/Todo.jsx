import React from 'react';

const completedClass = (todo) => todo.completed ? 'completed' : '';

export default function Todo (props) {
	return <li className={completedClass(props.todo)}>
		<div className="view">
			<input className="toggle" type="checkbox" defaultChecked={props.todo.completed} onChange={props.toggleCompleted} />
			<label>{props.todo.text}</label>
			<button className="destroy" onClick={props.onDestroy}></button>
		</div>
		<input className="edit" value="Create a TodoMVC template" />
	</li>;
}