import { createStore } from 'redux'
import todoApp from './reduces/reducer'
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions/actions'

let store = createStore(todoApp);

console.log(store.getState())