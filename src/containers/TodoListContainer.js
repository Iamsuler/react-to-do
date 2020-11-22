import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo, VISIBILITY_FILTERS } from '../store/action'

const getVisibleTodos = (todos, filter) => {
  return todos.filter(({ completed }) => filter === VISIBILITY_FILTERS.ACTIVE
    ? !completed
    : filter === VISIBILITY_FILTERS.COMPLETED
      ? completed
      : true
  )
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.filter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => {
    dispatch(toggleTodo(id))
  }
})

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer
