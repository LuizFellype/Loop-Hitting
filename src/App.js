import React, { Component } from 'react';
import Sidep from './components/sidePlayer'


const initialState = {
  playerHealty: 100,
  playerPower: 20,
  opponentHealty: 100,
  opponentPower: 20 
}


class App extends Component {


  state = {...initialState}

  playerAtack = () => {
    let opponentHealty = this.state.opponentHealty - 10
    this.setState({ opponentHealty })
  }

  opponentAtack = () => {
    let playerHealty = this.state.playerHealty - 10
    this.setState({ playerHealty })
  }

  clear = () => {
    this.setState({
      ...initialState
    })
  }

  render() {
    return (
      <React.Fragment>
        <div >
          <h3>LIFE: <Sidep value={this.state.playerHealty}/></h3>
          <h3>POWER: <Sidep value={this.state.playerPower}/></h3> 
          <button onClick={this.playerAtack}>Atack</button>    
        </div>
        <div>
          <button onClick={this.clear}>Reset</button>
        </div>
        <div >
          <h3>LIFE: <Sidep value={this.state.opponentHealty}/></h3>
          <h3>POWER: <Sidep value={this.state.opponentPower}/></h3>
          <button onClick={this.opponentAtack}>Atack</button>     
        </div>
      </React.Fragment>
    );
  }
}

export default App;
