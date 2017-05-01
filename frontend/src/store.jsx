import {createStore, combineReducers} from 'redux';
import {Framework7StateKernel, framework7Reducer, syncFramework7WithStore} from 'framework7-redux';
import todos from './reducers/todos'
import visibilityFilter from './reducers/visibilityFilter'
import termine from './reducers/TermineReducers'

export const framework7StateKernel = new Framework7StateKernel();

export const store = createStore(
    combineReducers({
        framework7: framework7Reducer,
        todos,
        termine,
        visibilityFilter
	})
);

syncFramework7WithStore(store, framework7StateKernel);