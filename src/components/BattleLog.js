import React from 'react'
// import Display from './Display'
import ToList from './toList'

export default ({ status }) =>
    <div>
        <h2>Battle Log</h2>
        {/* <Display label="Player 1" value={status.msg1}/> */}
        {/* <Display label="Player 2" value={status.msg2}/> */}

        <ToList logHistory={['Se Fodeu', ' Comi, tu n me mata', ' Ta Fodido']} />

    </div>