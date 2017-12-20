/**
 * Created by liao on 2017/12/17.
 */
import React from 'react'
import AddTodo from '../container/AddTodo'
import List from '../container/Visible'
import Footer from '../container/Footer'

//根节点
const App = ( ) => {
    return (
        <div>
            <AddTodo/>
            <List/>
            <Footer/>
        </div>
    )
}

export default App