import { createSelector } from 'reselect'
import { VISIBILITY_FILTERS } from '../store/action'

export const getText = state => state.get('text')
export const getFilter = state => state.get('filter')

const getTodos = state => state.getIn(['todos', 'data'])
export const getVisibleTodos = createSelector(
  [getTodos, getFilter],
  (todos, filter) => {
    console.log('getVisibleTodos')
    return todos.filter(item => {
      const completed = item.get('completed')
      return filter === VISIBILITY_FILTERS.ACTIVE
        ? !completed
        : filter === VISIBILITY_FILTERS.COMPLETED
          ? completed
          : true
    })
  }
)

// export const getVisibleTodos = state => {
//   const data = state.getIn(['todos', 'data'])
//   const filter = state.get('filter')
//   console.log('getVisibleTodos')
//   return data.filter(item => {
//       const completed = item.get('completed')
//       return filter === VISIBILITY_FILTERS.ACTIVE
//         ? !completed
//         : filter === VISIBILITY_FILTERS.COMPLETED
//           ? completed
//           : true
//     }
//   )
// }
