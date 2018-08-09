import React, { PureComponent } from 'react'
import FormatList from './FormatList'
import { threeFirst, time, lastElements } from '../game/game'

const date = new Date()
const intDay = date.getDay()
const daysOfWeek = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado']

export default class BattleLog extends PureComponent {
    state = {
        arrOfTheToday: daysOfWeek[intDay].split(''),
        history: [],
    }

    part = () => {
        const fullHistory = this.props.status
        const fourLast = lastElements(fullHistory, 4)
        return fourLast
    }

    render(){
    return (
    <div>
        <div>
            <h4>{threeFirst(this.state.arrOfTheToday)} {time()}</h4>  
            <h2>Battle Log</h2>
        </div>
        <FormatList logHistory={this.part()} />
    </div>
    )
}
}