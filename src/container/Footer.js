/**
 * Created by liao on 2017/12/18.
 */
import React,{ Component } from 'react'
import {connect} from 'react-redux'
import { filter } from '../actions/actions'

 class Footer extends Component{
    renderFilter(filter, name){
        if(filter === this.props.filter){
            return name
        }

        return(
            <a href="#" onClick={ e => {
                e.preventDefault();
              this.props.onFilterChange(filter)
            }}>
                {name}
            </a>
        )
    }
    render(){
        return (
            <p>
                Show:
                {' '}
                {this.renderFilter('SHOW_ALL','All')}
                {','}
                {this.renderFilter('SHOW_COMPLETED','Completed')}
                {','}
                {this.renderFilter('SHOW_ACTIVE','Active')}
                .
            </p>
        )
    }
}

const mapDispatchToProps  = (dispatch) => {
    return {
        onFilterChange: (type) => {
            dispatch(filter(type))
        }
    }
}
export default connect(null,mapDispatchToProps)(Footer)