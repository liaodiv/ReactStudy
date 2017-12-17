/**
 * Created by liao on 2017/12/17.
 */
import React from 'react';
import { connect } from 'react-redux'
import { toggleTodo } from '../actions/actions'
import TodoList from '../component/TodoList'

const mapStateToProps = (state) => {
    console.log(state);
   /* return {
        todos: state.todos
    }*/
}

const mapDispatchToProps = (dispatch) =>{
    return{
        onTodoClick:(id) =>{
            console.log(id);
            dispatch(toggleTodo(id))
        }
    }
}

function List() {
    console.log('hello world')
    return (
        <p>{JSON.stringify(todos)}123</p>
    )
}

//const visibileTodoList= connect(mapStateToProps,mapDispatchToProps)(List);

export default List;
