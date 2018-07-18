import React, { Component } from 'react';
import './App.css'
import Display from './components/Display';
import { attack, eat } from './game/game'
const initialState = {
  player1: {
    life: 10,
    damage: 2,
    skill: 6,
    dodge: 5,
    msg: '',
  },
  player2: {
    life: 10,
    damage: 2,
    skill: 6,
    dodge: 5,
    msg2: '',
  },
  notYourTurn: false,
  
}

class App extends Component {

  state = {...initialState}

  getLife = (event) => {
    const msg = "I'm eating, you wont kill me, baby!"
    if (event.target.value === 'player1') {
      const p1DontDie = eat(this.state.player1)
      this.setState({player1: p1DontDie, msg1: msg})
      console.log(this.state.player1.msg1)
      return
    }
    const p2DontDie = eat(this.state.player2)
    this.setState({player2: p2DontDie, msg2: msg})
  }
  attacker = (event) => {
    if (event.target.value === 'player1') {
      const { attacker, hitted } = attack(this.state.player1, this.state.player2)
      this.setState({ player1: attacker, player2: hitted })
      return
    }
    const { attacker, hitted } = attack(this.state.player2, this.state.player1)
    this.setState({ player1: hitted, player2: attacker }) 
  }

  
  render() {
    return (
      <div className='all'>
        <div className='title'> 
          <p> LOOP HITTING</p>
        </div>
        <div className='turn'> 
          <h2> Turn: PLAYER 1</h2>
        </div>
        <div className='tree-col'>
          <div>
            <h2> Player 1</h2>
            <Display label="LIFE" value={this.state.player1.life}/>
            <Display label="DAMAGE" value={this.state.player1.damage}/>
            <Display label="SKILL" value={this.state.player1.skill}/>
            <Display label="DODGE" value={this.state.player1.dodge}/>
            <button value='player1' onClick={this.getLife}>EAT</button> 
            <button value='player1' onClick={this.attacker}>ATTACK</button>
          </div>
          <div className='middle'>
            <h1>VS</h1>
          </div>        
          <div >
            <h2> Player 2</h2>
            <Display label="LIFE" value={this.state.player2.life}/>
            <Display label="DAMAGE" value={this.state.player2.damage}/>
            <Display label="SKILL" value={this.state.player2.skill}/>
            <Display label="DODGE" value={this.state.player2.dodge}/>
            <button  disabled={this.notYourTurn} value='player2' onClick={this.getLife}>EAT</button> 
            <button disabled={this.notYourTurn} value='player2' onClick={this.attacker}>ATTACK</button>
          </div>
        </div>
        <div className='battle-log'> 
          <h2>Battle Log</h2>
          <Display label="Player 1" value={this.state.msg1}/>
          <Display label="Player 2" value={this.state.msg2}/>
        </div>
        

      </div>
    );
  }
}

export default App;
