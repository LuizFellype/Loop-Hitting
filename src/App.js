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
  },
  player2: {
    life: 10,
    damage: 2,
    skill: 6,
    dodge: 5,
  }
}
class App extends Component {

  state = {...initialState}

  getLife = (event) => {
    console.log(event.target.value)
    if (event.target.value === 'player1') {
      const p1DontDie = eat(this.state.player1)
      this.setState({player1: p1DontDie })
      return

    }
    const p2DontDie = eat(this.state.player2)
    this.setState({player2: p2DontDie })
  }
  attacker = (event) => {
    const attbutton1 = document.getElementById('attack1')
    const attbutton2 = document.getElementById('attack2')
    const msg= document.getElementById('msg')
    if (event.target.value === 'player1') {
      const { attacker, hitted } = attack(this.state.player1, this.state.player2)
      this.setState({ player1: attacker, player2: hitted })
      
      attbutton1.disabled = true
      
      msg.innerText = 'You cant handle it, man! ;)'
      return
    }
    const { attacker, hitted } = attack(this.state.player2, this.state.player1)
    this.setState({ player1: hitted, player2: attacker }) 
    
    attbutton2.disabled = true
    attbutton1.disabled = false
    msg.innerText = 'Oh man! you are so far to get me.'
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
          <div className=''> 
            <h2> Player 1</h2>
            <h3>LIFE: <Display value={this.state.player1.life}/></h3>
            <h3>DAMAGE: <Display value={this.state.player1.damage}/></h3>
            <h3>SKILL: <Display value={this.state.player1.skill}/></h3>
            <h3>DODGE: <Display value={this.state.player1.dodge}/></h3> 
            <button value='player1' onClick={this.getLife}>EAT</button> 
            <button id='attack1' value='player1' onClick={this.attacker}>ATTACK</button>
          </div>
          <div className='middle'>
            <h1>VS</h1>
          </div>        
          <div >
            <h2> Player 2</h2>
            <h3>LIFE: <Display value={this.state.player2.life}/></h3>
            <h3>DAMAGE: <Display value={this.state.player2.damage}/></h3>
            <h3>SKILL: <Display value={this.state.player2.skill}/></h3>
            <h3>DODGE: <Display value={this.state.player2.dodge}/></h3> 
            <button value='player2' onClick={this.getLife}>EAT</button> 
            <button id='attack2' value='player2' onClick={this.attacker}>ATTACK</button>
            {/* <button onClick={() => this.attackFighter(this.state.player2, this.state.player1)}>ATTACK</button>
            <button onClick={() => this.eatplayer2(this.state.player2)}>EAT</button>  */}
          </div>
        </div>
        <div className='battle-log'> 
          <h2>Battle Log</h2>
          <h3 id='msg'></h3>
        </div>
        

      </div>
    );
  }
}

export default App;
