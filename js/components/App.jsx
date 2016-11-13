import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import {  clone } from 'lodash';
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {
                    completed: true,
                    text: 'Taste JavaScript'
                },
                {
                    completed: false,
                    text: 'Buy a unicorn'
                },
            ]
        };
    }
    todoCount() {
        return this.state.todos.length;
    }
    onToggleItem(i) {
        const state = clone(this.state);
        const todos = clone(this.state.todos);
        todos[i].completed = !todos[i].completed;
        state.todos = todos;
        this.setState(state);
    }
    onDestroyItem(i) {
        const state = clone(this.state);
        const todos = clone(this.state.todos);
        todos.splice(i, 1);
        state.todos = todos;
        this.setState(state);
    }
    onAddItem(text) {
        const state = clone(this.state);
        const todos = clone(this.state.todos);
        todos.push({
            completed: false,
            text: text
        });
        state.todos = todos;
        this.setState(state);
    }
    render() {
        return <section className="todoapp">
            <header className="header">
				<h1>todos</h1>
				<AddTodoForm onSubmit={t => this.onAddItem(t)} />
			</header>
			<section className="main">
				<input id="toggle-all" className="toggle-all" type="checkbox" />
				<label htmlFor="toggle-all">Mark all as complete</label>
				<TodoList todos={this.state.todos} onToggle={i => this.onToggleItem(i)} onDestroy={i => this.onDestroyItem(i)} />
			</section>
			<footer className="footer">
				<span className="todo-count"><strong>{this.todoCount()}</strong> item left</span>
				<ul className="filters">
					<li>
						<a className="selected" href="#/">All</a>
					</li>
					<li>
						<a href="#/active">Active</a>
					</li>
					<li>
						<a href="#/completed">Completed</a>
					</li>
				</ul>
				<button className="clear-completed">Clear completed</button>
			</footer>
		</section>
	}
}

