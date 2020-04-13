import { REMOVE_TODO } from '../constants/action-types'

export const removeTodo = (index) => ({
  type: REMOVE_TODO,
  index,
})
