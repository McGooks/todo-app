import React, { Component } from 'react'
import "./ToDo.css"

export default class ToDo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isEditing: false, 
            task: this.props.task
        }
    }

    handleRemove = () => {
        this.props.removeTodo(this.props.id)
    }

    handleUpdate = (event) =>{
        event.preventDefault()
        this.props.updateTodo(this.props.id, this.state.task)
        this.setState({isEditing: false})

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleToggle = (event) =>{
        this.props.toggleTodo(this.props.id)
    }

    toggleForm = () =>{
        this.setState({isEditing: !this.state.isEditing})
    }
    
    render() {
        let result
        if (this.state.isEditing) {
            result = (
                <div className="Todo">
                    <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                        <input 
                        type="text" 
                        value={this.state.task} 
                        name="task"
                        onChange={this.handleChange}/>
                        <button>Save</button>
                    </form>
                </div>
            )
        } else result = (
            <div className="Todo">
                <li className={this.props.completed ? "Todo-task completed": "Todo-task"} onClick={this.handleToggle}>
                    {this.props.task}</li>
                    <div className="Todo-buttons">
                <button onClick={this.toggleForm}>
                    <i class="fas fa-pen"></i>
                    </button>
                <button onClick={this.handleRemove}>
                <i class="fas fa-trash"></i>
                </button>
                </div>
            </div>
        )
        return result
    }
}
