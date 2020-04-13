import { SELECT_TODO } from '../constants/action-types'

export const select = (index) => ({
  type: SELECT_TODO,
  index: index,
})
