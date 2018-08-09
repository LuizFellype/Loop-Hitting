import React, { PureComponent } from 'react'
import './FormatList'

export default class FormatList extends PureComponent {
    render() {
    return(
        <div className='item'>
            {this.props.logHistory.map(el => <div> {el} </div>)}
        </div>
    )}
}