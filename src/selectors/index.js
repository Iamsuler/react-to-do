import { VISIBILITY_FILTERS } from '../store/action'

export const getText = state => state.text
export const getFilter = state => state.filter
export const getVisibleTodos = state => {
  const { todos: { data }, filter } = state
  return data.filter(({ completed }) => filter === VISIBILITY_FILTERS.ACTIVE
    ? !completed
    : filter === VISIBILITY_FILTERS.COMPLETED
      ? completed
      : true
  )
}
