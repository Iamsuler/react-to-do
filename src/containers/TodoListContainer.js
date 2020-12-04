import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo, fetchTodos } from '../store/action'
import { getVisibleTodos } from '../selectors/index'
import { toJS } from '../hocs/toJS'

const mapStateToProps = state => ({
  // toJS会返回一个新的对象
  // todos: getVisibleTodos(state).toJS()
  todos: getVisibleTodos(state)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => {
    dispatch(toggleTodo(id))
  },
  fetchTodos: () => {
    fetchTodos(dispatch)
  }
})

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(TodoList))

export default TodoListContainer
