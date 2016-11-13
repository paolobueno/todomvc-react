import React from 'react';
import TodoList from './TodoList';
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
    render() {
        return <section className="todoapp">
            <header className="header">
				<h1>todos</h1>
				<input className="new-todo" placeholder="What needs to be done?" />
			</header>
			<section class="main">
				<input id="toggle-all" className="toggle-all" type="checkbox" />
				<label htmlFor="toggle-all">Mark all as complete</label>
				<TodoList todos={this.state.todos} />
			</section>
			<footer className="footer">
				<span className="todo-count"><strong>0</strong> item left</span>
				<ul className="filters">
					<li>
						<a class="selected" href="#/">All</a>
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

