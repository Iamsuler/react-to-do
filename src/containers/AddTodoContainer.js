import { connect } from 'react-redux'
import { setTodoText, addTodo } from '../store/action'
import AddTodo from '../components/AddTodo'

const mapStateToProps = state => ({
  text: state.text
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
