import React, { Component } from 'react';
import './App.css'
import { attack, eat, random, listMaker } from './game/game'
import BattleLog from './components/BattleLog'
import Player from './components/Player'

const initialState = {
  turn: 'PLAYER 1',
  player1: {
    life: 12,
    damage: 2,
    skill: 5,
    dodge: 6,
  },
  player2: {
    life: 12,
    damage: 2,
    skill: 5,
    dodge: 6,
  },
  historyLog: [],
  notYourTurn1: false,
  notYourTurn2: true,
}

class App extends Component {

  state = {...initialState}

  getLife = (event) => {
    const msg = "I'm eating, baby! it turns my life up in 5 points"
    if (event.target.value === 'player1') {
      const p1DontDie = eat(this.state.player1)
      const newHistory = listMaker('Player 1: '+ msg, this.state.historyLog)
      // const newHistory = [...this.state.historyLog]
      // newHistory.push('Player 1: '+ msg) 
      this.setState({player1: p1DontDie, notYourTurn1: true, notYourTurn2: false , historyLog: newHistory, turn: 'PLAYER 2'})
      return
    }
    const p2DontDie = eat(this.state.player2)
    const newHistory = listMaker('Player 2: '+ msg, this.state.historyLog)
    this.setState({player2: p2DontDie, historyLog: newHistory, notYourTurn2: true, notYourTurn1: false, turn: 'PLAYER 1' })
  }
  
  attacker = (event) => {
    const { random1, randomDam ,random2 } = random(6.7, 0.7, 10)
    const msg = 'Do you wanna take this outside, man?!'
    if (event.target.value === 'player1') {
      const { attacker, hitted } = attack(this.state.player1, random1, randomDam ,this.state.player2, random2)
      if (hitted.life <= 0) { 
        const newHistory = listMaker('Player 1: GAME OVER baby, let the next Loser come in', this.state.historyLog)
        this.setState({ ...initialState, historyLog: newHistory, notYourTurn1: true })
        return 
      }
      const newHistory = listMaker('Player 1: '+ msg, this.state.historyLog)
      this.setState({ player1: attacker, player2: hitted, historyLog: newHistory, notYourTurn1: true, notYourTurn2: false, turn: 'PLAYER 2' })
      return
    }

    const { attacker, hitted } = attack(this.state.player2, random2, randomDam ,this.state.player1, random1)
    if (hitted.life <= 0) {
      const newHistory = listMaker('Player 2: GAME OVER baby, let the next Loser come in', this.state.historyLog)
      this.setState({ ...initialState, historyLog: newHistory, notYourTurn1: true})
      return
    }
    const newHistory = listMaker('Player 2: '+ msg, this.state.historyLog)
    this.setState({ player1: hitted, player2: attacker, historyLog: newHistory, notYourTurn2: true, notYourTurn1: false, turn: 'PLAYER 1' }) 
  }

  
  render() {
    return (
      <div className='all'>
        <div className='title'> 
          <p> LOOP HITTING</p>
        </div>
        <div className='turn'> 
          <h2> Turn: {this.state.turn}</h2>
        </div>
        <div className='tree-col'>
        <div>
          <h2> Player 1</h2>
          <Player player={this.state.player1}/>
          <button disabled={this.state.notYourTurn1} value='player1' onClick={this.getLife}>EAT</button> 
          <button disabled={this.state.notYourTurn1} value='player1' onClick={this.attacker}>ATTACK</button>
        </div>
        <div className='middle'>
          <h1>VS</h1>
        </div>        
        <div >
          <h2> Player 2</h2>
          <Player player={this.state.player2}/>
          <button disabled={this.state.notYourTurn2} value='player2' onClick={this.getLife}>EAT</button> 
          <button disabled={this.state.notYourTurn2} value='player2' onClick={this.attacker}>ATTACK</button>
        </div>
        </div>
        <div className='battle-log'> 
          <BattleLog status={this.state}/>
        </div>
      </div>
    );
  }
}

export default App;
