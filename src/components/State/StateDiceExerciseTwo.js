import React,{Component} from 'react'

class StateDiceExerciseTwo extends Component {
  constructor() {
    super()
    this.state={}
  }
  render() {
    return (
      <div>
        <h2>Dice One: {this.props.diceOne}</h2>
        <h2>Dice One: {this.props.diceTwo}</h2>
      </div >
    );
  }
}

export default StateDiceExerciseTwo
