import React, { PureComponent } from 'react'
import FormatList from './FormatList'
import { threeFirst, time } from '../game/game'

const date = new Date()
const intDay = date.getDay()
const daysOfWeek = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado']

export default class BattleLog extends PureComponent {
    state = {
        arrOfTheToday: daysOfWeek[intDay].split('')
    }

    render(){
    return (
    <div>
        <div>
            <h4>{threeFirst(this.state.arrOfTheToday)} {time()}</h4>  
            <h2>Battle Log</h2>
        </div>
        <FormatList logHistory={this.props.status.historyLog} />
    </div>
    )
}
}