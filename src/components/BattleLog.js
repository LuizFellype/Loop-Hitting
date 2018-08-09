import React, { PureComponent } from 'react'
import FormatList from './FormatList'
import { threeFirst, time, lastElements } from '../game/game'

const date = new Date()
const intDay = date.getDay()
const daysOfWeek = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado']

export default class BattleLog extends PureComponent {
    state = {
        arrOfTheToday: daysOfWeek[intDay].split(''),
        fullHistory: false,
    }

    part = () => {
        const fullHistory = this.props.history
        const fourLast = lastElements(fullHistory, 4)
        return fourLast
    }

    fullHistory = () => {
        this.setState({ fullHistory: !this.state.fullHistory })
        console.log(this.state.fullHistory)
    }

    render(){
    return (
    <div>
        <div>
            <h4>{threeFirst(this.state.arrOfTheToday)} {time()}</h4>  
            <h2>Battle Log</h2> 
            <button onClick={this.fullHistory}>
                {this.state.fullHistory ? 'Normal History' : 'Full History'}
            </button>
        </div>
        <FormatList logHistory={this.state.fullHistory? this.props.history: this.part()} />
    </div>
    )
}
}