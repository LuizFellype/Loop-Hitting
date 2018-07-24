import React from 'react'
import Display from './Display'

export default ({ player }) =>
    <div>
        <Display label="LIFE" value={player.life}/>
        <Display label="DAMAGE" value={player.damage}/>
        <Display label="SKILL" value={player.skill}/>
        <Display label="DODGE" value={player.dodge}/>
    </div>