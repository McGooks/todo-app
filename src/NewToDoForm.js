import React, { Component } from 'react'
import './NewToDoForm.css'
import { v4 as uuidv4 } from 'uuid';

export default class NewToDoForm extends Component {
    constructor(props){
        super(props)
        this.state = {task: " "}
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createTodo({...this.state, id: uuidv4(), completed: false})
        this.setState({ task: "" })
    } 
    render() {
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="task">New Todo</label>
                <input 
                type="text" 
                placeholder="New Todo" 
                id="task"
                value={this.state.task}  
                onChange={this.handleChange}
                name="task"
                />
                <button>Add Todo</button>
            </form>
        )
    }
}
