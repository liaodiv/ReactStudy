import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component{
    render(){
        return(
            <button style={{background:this.context.color}}>
                {this.props.children}
            </button>
        )
    }
}

Button.contextTypes = {
    color:PropTypes.string
}

class Message extends Component{
    render(){
        return(
            <div>
                {this.props.text} <Button>Delete</Button>
            </div>
        )
    }
}

class MessageList extends Component{
    constructor(props){
        super(props);

    }
    getChildContext(){
        return {color:"blue"}
    }
    render(){
        const color = "purple";
        const children =  ['test1','test2'].map( (message) =>
            <Message  key = {message} text={message} />
        );
        return <div>{children}</div>
    }
}
MessageList.childContextTypes = {
    color:PropTypes.string
}

export default MessageList;