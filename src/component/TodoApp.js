/**
 * Created by liao on 2017/12/17.
 */
import React from 'react'
import AddTodo from './AddTodo'
import List from '../container/VisibleTodoList'

//根节点
const App = ( ) => {
    return (
        <div>
            <AddTodo/>
            <List/>
        </div>
    )
}