/**
 * Created by liao on 2017/12/17.
 */
import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions'

const AddTodo = ({dispatch}) => {
    let input;
    return(<div>
        <form onSubmit={ e => {
            e.preventDefault();
            if(!input.value.trim()){
                return
            }
            dispatch(addTodo(input.value));
            input.value = '';
        }}>
            <label>输入todo</label>
            <input ref={node => {
                input = node
            }}/>

            <button type="submit">
                Add Todo
            </button>
        </form>
    </div>)
}

export default connect()(AddTodo) ///绑定dispatch给component