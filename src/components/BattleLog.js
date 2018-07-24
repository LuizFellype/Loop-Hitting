import React from 'react'
import Display from './Display'

export default ({ status }) =>
    <div>
        <h2>Battle Log</h2>
        <Display label="Player 1" value={status.msg1}/>
        <Display label="Player 2" value={status.msg2}/>
    </div>