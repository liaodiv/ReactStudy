/**
 * Created by liao on 2017/12/17.
 */
import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => {
    console.log('todolist');
    return (
        <ul>
            {todos.length == 0}?<li>无数据</li>:''
            {todos.map((todo, index) => {
                return (
                    <Todo
                        key={index}
                        {...todo}
                        onClick={ () => onTodoClick(index)}
                    />
                )
            })}
        </ul>
    )
}


export default TodoList;
