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
    skill: 5,
    dodge: 5,
  }
}
class App extends Component {

  state = {...initialState}

  getLife = (event) => {
    console.log(event.target.value)
    // if (whoAte === 'player1') {
    //   const p1DontDie = eat(this.state.player1)
    //   this.setState({player1: p1DontDie })
    //   return
      
    // }
    // const p2DontDie = eat(this.state.player2)
    // this.setState({player2: p2DontDie })
  }
  attacker = (attacker) => {
    if (attacker === this.state.player1) {
      const newState = attack(this.state.player1, this.state.player2)
      const player1 = newState.player1
      const player2 = newState.player2
      this.setState({ player1, player2 })
      return
    }
      const newState = attack(this.state.player2, this.state.player1)
      const player1 = newState.player1
      const player2 = newState.player2
      this.setState({ player1, player2 })
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
            <button onClick={() => this.attacker(this.state.player1)}>ATTACK</button>
            {/* <button onClick={() => this.eatFighter(this.state.player1)}>EAT</button> 
            <button onClick={() => this.attackplayer2(this.state.player1, this.state.player2)}>ATTACK</button> */}
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
            <button onClick={() => this.getLife(this.state.player2)}>EAT</button> 
            <button onClick={() => this.getLife(this.state.player2)}>ATTACK</button>
            {/* <button onClick={() => this.attackFighter(this.state.player2, this.state.player1)}>ATTACK</button>
            <button onClick={() => this.eatplayer2(this.state.player2)}>EAT</button>  */}
          </div>
        </div>
        <div className='battle-log'> 
          <div>
            <h2>Battle Log</h2>
            <h3>.....</h3>
            <h3>.....</h3>
            <h3>.....</h3>
            <h3>.....</h3>

          </div>
        </div>
        

      </div>
    );
  }
}

export default App;
