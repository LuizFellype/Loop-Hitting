import React, { Component } from 'react';
import './App.css'
//import { attack, eat } from './game/game'
const initialState = {
  fighter: {
    life: 10,
    damage: 2,
    skill: 5,
    dodge: 5,
  },
  opponent: {
    life: 10,
    damage: 2,
    skill: 5,
    dodge: 5,
  }
}
class App extends Component {

  state = {...initialState}

  // eatFighter = (whoate) => {
  //   this.setState({fighter: eat(whoate)})
  // }

  // attackOpponent = (shooter, target) => {
  //   this.setState({opponent: attack(shooter, target)})
  // }

  // eatOpponent = (whoate) => {
  //   this.setState({opponent: eat(whoate)})
  // }

  // attackFighter = (shooter, target) => {
  //   this.setState({fighter: attack(shooter, target)})
  // }

  render() {
    return (
      <div className='all'>
        <div className='display'> 
          <h1> Turn: PLAYER 1</h1>
        </div>
        <div className='tree-col'>
          <div className=''> 
            <h1> Player 1</h1>
            <h3>LIFE: <div value={this.state.fighter.life}/></h3>
            <h3>DAMAGE: <div value={this.state.fighter.damage}/></h3>
            <h3>SKILL: <div value={this.state.fighter.skill}/></h3>
            <h3>DODGE: <div value={this.state.fighter.dodge}/></h3> 
            <button>EAT</button> 
            <button>ATTACK</button>
            {/* <button onClick={() => this.eatFighter(this.state.fighter)}>EAT</button> 
            <button onClick={() => this.attackOpponent(this.state.fighter, this.state.opponent)}>ATTACK</button> */}
          </div>
          <div className='middle'>
            <h1>VS</h1>
          </div>        
          <div class=''>
            <h1> Player 2</h1>
            <h3>LIFE: <div value={this.state.opponent.life}/></h3>
            <h3>DAMAGE: <div value={this.state.opponent.damage}/></h3>
            <h3>SKILL: <div value={this.state.opponent.skill}/></h3>
            <h3>DODGE: <div value={this.state.opponent.dodge}/></h3> 
            <button>EAT</button> 
            <button>ATTACK</button>
            {/* <button onClick={() => this.attackFighter(this.state.opponent, this.state.fighter)}>ATTACK</button>
            <button onClick={() => this.eatOpponent(this.state.opponent)}>EAT</button>  */}
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
