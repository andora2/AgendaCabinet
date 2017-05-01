import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import termine from './TermineReducers'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  termine
})

export default todoApp