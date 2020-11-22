// action 类型
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const SET_TODO_TEXT = 'SET_TODO_TEXT'
export const VISIBILITY_FILTERS = {
  ALL: 'ALL',
  COMPLETED: 'COMPLETED',
  ACTIVE: 'ACTIVE'
}

let nextTodoId = 0

// action 创建函数
export const addTodo = text => ({ type: ADD_TODO, id: nextTodoId++, text })
export const toggleTodo = id => ({ type: TOGGLE_TODO, id })
export const setVisibilityFilter = filter => ({ type: SET_VISIBILITY_FILTER, filter })
export const setTodoText = text => ({ type: SET_TODO_TEXT, text })
