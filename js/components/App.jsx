import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { map, filter, clone, some } from 'lodash';
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
    incompleteTodoCount() {
        var res = 0;
        for (var i = 0; i < this.state.todos.length; i++) {
            if (!this.state.todos[i].completed) {
                res++;
            }
        }
        return res;
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
    hasIncompleteTodos() {
        return some(this.state.todos, t => !t.completed);
    }
    clearCompleted() {
        const state = clone(this.state);
        const todos = filter(this.state.todos, t => !t.completed);
        state.todos = todos;
        this.setState(state);
    }
    setAll(v) {
        const state = clone(this.state);
        const todos = map(this.state.todos, t => { t.completed = v; return t });
        state.todos = todos;
        this.setState(state);
    }
    render() {
        const main = <section className="main">
			<input id="toggle-all" className="toggle-all" type="checkbox" onChange={(e) => this.setAll(e.target.checked)} />
			<label htmlFor="toggle-all">Mark all as complete</label>
			<TodoList todos={this.state.todos} onToggle={i => this.onToggleItem(i)} onDestroy={i => this.onDestroyItem(i)} />
		</section>;
		const footer = <footer className="footer">
			<span className="todo-count"><strong>{this.incompleteTodoCount()}</strong> item{this.incompleteTodoCount() > 1 ? 's' : null} left</span>
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
			{ this.hasIncompleteTodos() ? <button className="clear-completed" onClick={() => this.clearCompleted()}>Clear completed</button> : null }
		</footer>;
        return <section className="todoapp">
            <header className="header">
				<h1>todos</h1>
				<AddTodoForm onSubmit={t => this.onAddItem(t)} />
			</header>
			{this.state.todos.length ? main : null}
			{this.state.todos.length ? footer : null}
		</section>
	}
}

