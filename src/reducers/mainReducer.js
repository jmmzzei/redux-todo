import {
  SELECT_TODO,
  ADD_TODO,
  REMOVE_TODO,
  DELETE_ALL,
} from '../constants/action-types'

const initialState = {
  todos: [],
  selected: 0,
}

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.payload,
            index: action.index,
            completed: false,
          },
        ],
      })
    case REMOVE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((e, i) => i !== action.index && e),
      })
    case SELECT_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map(
          (e) =>
            (action.index === e.index && { ...e, completed: !e.completed }) ||
            e,
        ),
      })
    case DELETE_ALL:
      return Object.assign({}, state, {
        todos: state.todos.map((e) => (e.completed && {}) || e),
      })
    default:
      return state
  }
}
