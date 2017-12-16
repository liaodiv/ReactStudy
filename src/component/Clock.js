import React ,{ Component } from 'react';

import test from './testmodel';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()}
        test.a.b ++;
        console.log('clock调用',test.a.b);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    componentDidMount(){
        this.timerID = setInterval( () => this.tick() , 1000 )
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    render(){
        return (
            <div>
                <h2>计时器</h2>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default  Clock;