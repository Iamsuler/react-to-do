import React, { Component } from 'react';

class AddTodo extends Component {

  render() {
    return (
      <div>
        <input value={ this.props.text } onChange={ this.onTextChange }/>
        <button onClick={ this.handlerClick }>add todo</button>
      </div>
    );
  }

  onTextChange = (e) => {
    const value = e.target.value
    this.props.setTodoText(value)
  }

  handlerClick = () => {
    this.props.addTodo(this.props.text)
  }
}

export default AddTodo;