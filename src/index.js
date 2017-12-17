/**
 * Created by 27353 on 2017/11/29.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import todoApp from './reduces/reducer'
import sum from './sum';
//import './image_view';
import Comment from './study1';
import App from './App';

//import './storeindex';


const total = sum(10,5);
console.log(total);

const Button = () => {
    return <button onClick={
        () => {
            System.import('./image_view').then(module => {
                //console.log(module);
                module.default();
            })
        }
    }>
        Click me
    </button>;
}

const comment = {
    date: new Date(),
    text:
        'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl:
            'http://placekitten.com/g/64/64',
    },
}
let store = createStore(todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)

