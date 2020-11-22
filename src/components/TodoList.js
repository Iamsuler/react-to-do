import React, { Component } from 'react';
import Todo from './Todo'

class TodoList extends Component {
  render() {
    const { todos, toggleTodoById } = this.props
    return (
      <ul>
        {
          todos.map(todo => <Todo
              key={ todo.id }
              { ...todo }
              onTodoClick={ () => toggleTodoById(todo.id) }
            />
          )
        }
      </ul>
    );
  }
}

export default TodoList;