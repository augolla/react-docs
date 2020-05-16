import React,{Component} from 'react'

class  StateExercise extends Component {
  constructor() {
    super()
    this.state={number:1}
  }
  changeNumber=(e)=>{
    const newNumber=Math.floor(Math.random()*10+1)
    this.setState({number:newNumber})
  }
  render(){
    return(
      <div>
        <h2>Number is {this.state.number}</h2>
        {this.state.number!==7?<button onClick={this.changeNumber}>Random number</button>:null}
        {this.state.number==7?<h1>7 !!!!You WON</h1>:null}
      </div>
    )
  }
}

export default StateExercise
