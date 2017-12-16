/**
 * Created by 27353 on 2017/11/29.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import sum from './sum';
//import './image_view';
import Comment from './study1';
import App from './App';


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

ReactDOM.render(
    <div>
        <App/>
        <h1>this is my sds test sdssdsdqqqq</h1>
        <Button/>
        <Comment date={comment.date} text={comment.text} author={comment.author}/>
        <br/>

    </div>,
    document.getElementById('root')
)

