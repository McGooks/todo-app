import React, { Component } from 'react'
import NewToDoForm from './NewToDoForm'
import ToDo from './ToDo'
import './ToDoList.css'

export default class ToDoList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todos: []
        }
    }

    create = (newTodo) => {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    update = (id, updatedTask) => {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return{...todo, task: updatedTask}
            }
            return todo;
        })
        this.setState( {todos: updatedTodos} )
    }

    toggleCompletion = (id) =>{
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return{...todo, completed: !todo.completed}
            }
            return todo;
        })
        this.setState( {todos: updatedTodos} )
    }

    remove = (id) => {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        })
    }
    
    render() {
        const todos = this.state.todos.map(todo => {
            return <ToDo 
            key={todo.id} 
            id={todo.id} 
            task= {todo.task} 
            completed={todo.completed}
            removeTodo={this.remove}
            updateTodo={this.update}
            toggleTodo={this.toggleCompletion}/>
        })
        return (
            <div className="ToDoList">
                <h1>To Do List<span>A Simple React to do list</span></h1>
                <ul>
                    {todos}
                </ul>
                <NewToDoForm createTodo={this.create}/>
            </div>
        )
    }
}
