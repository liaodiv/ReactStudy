import {ADD_TODO, DELETE_TODO , TOGGLE_TODO ,SET_VISIBILITY_FILTER} from '../constants/actionTypes'

export function addTodo(text) {
    return {
        type:ADD_TODO,
        payload:{
            text:text
        }
    }
}

export function toggleTodo(index) {
    return {
        type:TOGGLE_TODO,
        payload:{
            index:index
        }
    }
}

export function filter(filter) {
    return {
        type:SET_VISIBILITY_FILTER,
            filter:filter

    }
    
}