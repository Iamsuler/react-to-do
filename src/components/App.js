import React, { Component } from 'react'
import AddTodo from './AddTodo'
import Footer from './Footer'
import TodoList from './TodoList'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      todos: [],
      filter: 'all'
    }

    this.nextTodoId = 0
  }

  render() {
    const todos = this.getVisibleTodos()
    return (
      <div>
        <AddTodo addTodo={ this.addTodo }/>
        <TodoList todos={ todos } toggleTodoById={ this.toggleTodoById }/>
        <Footer filter={ this.state.filter } setFilter={ this.setFilter }/>
      </div>
    );
  }

  getVisibleTodos = () => {
    const { todos, filter } = this.state

    return todos.filter(({ completed }) => filter === 'active'
      ? !completed
      : filter === 'completed'
        ? completed
        : true
    )
  }

  addTodo = (text) => {
    const id = this.nextTodoId++
    const todo = {
      id,
      text,
      completed: false
    }

    this.setState({
      todos: [todo, ...this.state.todos]
    })
  }

  toggleTodoById = (id) => {
    const newTodos = this.state.todos.map(item => item.id === id
      ? { ...item, completed: !item.completed }
      : item
    )

    this.setState({
      todos: newTodos
    })
  }

  setFilter = (filter) => {
    this.setState({
      filter
    })
  }
}

export default App;