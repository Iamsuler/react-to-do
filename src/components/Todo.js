import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
  render() {
    const { text, completed, onTodoClick } = this.props
    return (
      <li
        onClick={ onTodoClick }
        className={ completed ? 'completed' : '' }
      >{ text }</li>
    );
  }
}

export default Todo;