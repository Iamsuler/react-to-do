import { combineReducers } from 'redux'
import {
  VISIBILITY_FILTERS,
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO,
  SET_TODO_TEXT
} from './action'

function todos (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        { text: action.text, id: action.id, completed: false },
        ...state
      ]
    case TOGGLE_TODO:
      return state.map(todo => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo)
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
  todos,
  filter,
  text
})

export default todoApp
