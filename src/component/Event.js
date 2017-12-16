import React ,{ Component } from 'react';
import test from './testmodel';

class Toggle extends Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
        console.log('Event调用',test.a.b);

       // this.handleClick = this.handleClick.bind(this);
    }
    handleClick= () => {
        this.setState( prevState => {
            return {isToggleOn:!prevState.isToggleOn}
        });
    }
    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}
export default Toggle;