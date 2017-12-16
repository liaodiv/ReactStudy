import React from 'react';
import {createStore} from 'redux';

const  initialState = {
    counter:3
}

function dispatch(action) {

}

function reducer( state , action ) {
    switch (action.type){
        case 'INC':
            return  Object.assign({},state,{ counter: state.counter + 1} )
        case 'DEC':
            return  Object.assign({},state,{ counter: state.counter - 1} )
        default:
            return state;
    }

}
const store = createStore( reducer ,initialState )



class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            counter:3
        };
    }

    render(){
        return (
            <div>
                Counter:
                <span>{this.state.counter}</span>
                <button onClick={store.dispatch({type:'INC'})}>increment</button>
                <button onClick={store.dispatch({type:'DEC'})}>Decrement</button>
            </div>

        )
    }
}

store.subscribe(function () {
    //Counter.setState({counter:store.getState().counter})
    store.getState().counter
})

function middle() {
   const counter = store.getState().counter;
    return (
        <Counter value = {counter} />
    )

}
export default Counter;