import React, { PureComponent } from 'react'
import './FormatList.css'

export default class FormatList extends PureComponent {
    render() {
    return(
        <div className='lis'>
            {this.props.logHistory.map((el, i) => <div className='item' key={i}> {el} </div>)}
        </div>
    )}
}