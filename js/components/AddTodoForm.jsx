import React from 'react';

export default class AddTodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ''
        };
    }
    updateValue(value) {
        this.setState({value: value});
    }
    onSubmit() {
        if (!this.state.value) return;

        this.props.onSubmit(this.state.value);
        this.setState({value: ''});
    }
    render() {
        return <form onSubmit={() => this.onSubmit()}>
            <input className="new-todo" placeholder="What needs to be done?" onChange={e => this.updateValue(e.target.value)} value={this.state.value} />
        </form>
    }
}