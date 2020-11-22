import { connect } from 'react-redux'
import { setTodoText, addTodo } from '../store/action'
import AddTodo from '../components/AddTodo'
import { getText } from '../selectors/index'

const mapStateToProps = state => ({
  text: getText(state)
})

const mapDispatchToProps = dispatch => ({
  setTodoText: text => dispatch(setTodoText(text)),
  addTodo: text => dispatch(addTodo(text))
})

const AddTodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)

export default AddTodoContainer
