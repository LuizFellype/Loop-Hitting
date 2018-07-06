import React, { Component } from 'react';
import Sidep from './components/sidePlayer'
import { attack, eat } from './game/game'
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

  eatFighter = (whoate) => {
    this.setState({fighter: eat(whoate)})
  }

  attackOpponent = (shooter, target) => {
    this.setState({opponent: attack(shooter, target)})
  }

  eatOpponent = (whoate) => {
    this.setState({opponent: eat(whoate)})
  }

  attackFighter = (shooter, target) => {
    this.setState({fighter: attack(shooter, target)})
  }

  render() {
    return (
      <React.Fragment>
        <div >
          <h3>LIFE: <Sidep value={this.state.fighter.life}/></h3>
          <h3>DAMAGE: <Sidep value={this.state.fighter.damage}/></h3>
          <h3>SKILL: <Sidep value={this.state.fighter.skill}/></h3>
          <h3>DODGE: <Sidep value={this.state.fighter.dodge}/></h3> 
          <button onClick={() => this.eatFighter(this.state.fighter)}>EAT</button> 
          <button onClick={() => this.attackOpponent(this.state.fighter, this.state.opponent)}>ATTACK</button>
        </div>
        <div >
        <h3>LIFE: <Sidep value={this.state.opponent.life}/></h3>
          <h3>DAMAGE: <Sidep value={this.state.opponent.damage}/></h3>
          <h3>SKILL: <Sidep value={this.state.opponent.skill}/></h3>
          <h3>DODGE: <Sidep value={this.state.opponent.dodge}/></h3> 
          <button onClick={() => this.eatOpponent(this.state.opponent)}>EAT</button> 
          <button onClick={() => this.attackFighter(this.state.opponent, this.state.fighter)}>ATTACK</button>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
