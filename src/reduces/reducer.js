import {combineReducers} from 'redux'
import {ADD_TODO,TOGGLE_TODO,DELETE_TODO,SET_VISIBILITY_FILTER} from '../constants/actionTypes';


function todos(state = [], action) {    //对应state.todos
    switch (action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    text:action.payload.text,
                    completed:false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo,index) => {
                if( index == action.payload.index){
                    return Object.assign({},todo,{
                        completed:!todo.completed
                    })
                }
                return todo
            })

        default:
            return state
    }
}

function visibilityFilter(state = SHOW_ALL,action) {
    switch (action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

//可以使用combinereducer重构
/*function todoApp(state = {},action) {
    return {
        visibilityFilter:visibilityFilter(state.visibilityFilter,action),
        todos:todos(
            state.todos,action
        )
    }

}*/
//替换
const todoApp = combineReducers({
    visibilityFilter:visibilityFilter,
    todos:todos
})

export default todoApp;

//处理跟节点state的reducer
/*
function todoApp(state = intitialState,action) {
    switch (action.type){
        case SET_VISIBILITY_FILTER:
            return Object.assign({},state,{
                visibilityFilter:action.filter
            })
        case ADD_TODO:
        case TOGGLE_TODO:
            v
           /!* return Object.assign({},state,{
                todos:todos(state.todos,action)  //state的分层组合
            })*!/
        default:
            return state
    }
}*/
