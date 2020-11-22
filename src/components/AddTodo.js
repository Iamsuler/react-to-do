import React, { Component } from 'react';

class AddTodo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <div>
        <input value={ this.state.text } onChange={ this.onTextChange }/>
        <button onClick={ this.handlerClick }>add todo</button>
      </div>
    );
  }

  onTextChange = (e) => {
    const value = e.target.value
    this.setState({
      text: value
    })
  }

  handlerClick = () => {
    this.props.addTodo(this.state.text)
  }
}

export default AddTodo;