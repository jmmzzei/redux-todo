import { ADD_TODO } from '../constants/action-types'
let index = 0

export const addTodo = (payload) => ({
  type: ADD_TODO,
  index: ++index,
  payload: payload,
})
