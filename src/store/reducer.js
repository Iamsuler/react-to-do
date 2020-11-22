import { combineReducers } from 'redux-immutable'
import Immutable from 'immutable'
import {
  VISIBILITY_FILTERS,
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO,
  SET_TODO_TEXT,
  FETCH_TODOS_FAIL,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_REQUEST
} from './action'

const initTodos = {
  isFetch: false,
  error: '',
  data: []
}

function fetchTodos (state = Immutable.fromJS(initTodos), action) {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return state.set('isFetch', true)
    case FETCH_TODOS_SUCCESS:
      return state.merge({
        isFetch: false,
        data: Immutable.fromJS(action.data)
      })
    case FETCH_TODOS_FAIL:
      return state.merge({
        isFetch: false,
        error: action.error
      })
    default:
      const data = state.get('data')
      return state.set('data', todos(data, action))
  }
}

function todos (state = Immutable.fromJS([]), action) {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = Immutable.fromJS({ text: action.text, id: action.id, completed: false })
      return state.unshift(newTodo)
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.get('id') === action.id
          ? todo.set('completed', !todo.get('completed'))
          : todo
      )
    default:
      return state
  }
}

function filter (state = VISIBILITY_FILTERS.ALL, action) {
  return action.type === SET_VISIBILITY_FILTER ? action.filter : state
}

function text (state = '', action) {
  return action.type === SET_TODO_TEXT ? action.text : state
}

// export default function todoApp (state = {}, action) {
//   return {
//     todos: todos(state.todos, action),
//     filter: filter(state.filter, action)
//   }
// }

const todoApp = combineReducers({
  todos: fetchTodos,
  filter,
  text
})

export default todoApp
