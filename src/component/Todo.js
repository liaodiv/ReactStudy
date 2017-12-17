/**
 * Created by liao on 2017/12/17.
 */
import React from 'react'

//Todo item component
const Todo = ({ onClick ,completed,text}) => {
    return(
    <li onClick={onClick}
        style={{
            textDecoration:completed? 'line-through':'none'
    }}>
        {text}
    </li>
    )
}

export default Todo;