import React from 'react'
import './FormatList'

const toList = (props) =>
    <div className='item'>
        {props.logHistory.map(el => <div> {el} </div>)}
    </div>

export default toList