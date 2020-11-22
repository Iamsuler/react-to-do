// action 类型
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const SET_TODO_TEXT = 'SET_TODO_TEXT'
export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST'
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'
export const FETCH_TODOS_FAIL = 'FETCH_TODOS_FAIL'
export const VISIBILITY_FILTERS = {
  ALL: 'ALL',
  COMPLETED: 'COMPLETED',
  ACTIVE: 'ACTIVE'
}

let nextTodoId = 0

// action 创建函数
const fetchTodosRequest = () => ({
  type: FETCH_TODOS_REQUEST
})
const fetchTodosSuccess = (data) => ({
  type: FETCH_TODOS_SUCCESS,
  data,
})
const fetchTodosFail = (error) => ({
  type: FETCH_TODOS_FAIL,
  error
})

export const addTodo = text => ({ type: ADD_TODO, id: nextTodoId++, text })
export const toggleTodo = id => ({ type: TOGGLE_TODO, id })
export const setVisibilityFilter = filter => ({ type: SET_VISIBILITY_FILTER, filter })
export const setTodoText = text => ({ type: SET_TODO_TEXT, text })
export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(fetchTodosRequest())

    fetch('./mock/todos.json')
      .then(
        response => response.json(),
        error => {
          dispatch(fetchTodosFail(error))
          console.error('An error occurred: ' + error)
        }
      )
      .then(data => {
        dispatch(fetchTodosSuccess(data))
      })
  }
}
