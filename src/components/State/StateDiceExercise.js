import React,{Component} from 'react'
import StateDiceExerciseTwo from './StateDiceExerciseTwo'

class StateDiceExercise extends Component {
  constructor() {
    super()
    this.state={
      diceOne:Math.floor(Math.random()*6+1),
      diceTwo:Math.floor(Math.random()*6+1),
      diceValue:'Roll Die'
    }
  }
  rollDie=()=>{
    this.setState({diceValue:'Rolling'})//Set button value to rolling
    setTimeout(()=>{
      this.setState({diceOne:Math.floor(Math.random()*6+1)})
      this.setState({diceTwo:Math.floor(Math.random()*6+1)})
      setTimeout(()=>{
        this.setState({diceValue:'Roll Dice'})
      },300)//Wait an xtra .3 secs to return button to Roll Dice
    },1000)//Wait 1 sec to give dice their value
  }
  render() {
    return (
      <div>
        <StateDiceExerciseTwo diceOne={this.state.diceOne} diceTwo={this.state.diceTwo}/>
        <button onClick={this.rollDie}>{this.state.diceValue}</button>
      </div >
    );
  }
}

export default StateDiceExercise
