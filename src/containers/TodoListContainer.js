import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo, fetchTodos } from '../store/action'
import { getVisibleTodos } from '../selectors/index'

const mapStateToProps = state => ({
  todos: getVisibleTodos(state).toJS()
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => {
    dispatch(toggleTodo(id))
  },
  fetchTodos: () => {
    dispatch(fetchTodos())
  }
})

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer
