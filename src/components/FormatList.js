import React from 'react'

const toList = (props) =>
    <div>
        {props.logHistory.map(el => <div> {el} </div>)}
    </div>

export default toList