import React,{Component} from 'react'

class StateMutables extends Component{
  constructor() {
    super()
    this.state={
      numsArray:[123]
    }
  }
  //This IS the WRONG WAY---It still Works Though
  /*addToArray=(e)=>{
    let newNumber=Math.floor(Math.random()*1000)
    let numsArray=this.state.numsArray
    numsArray.push(newNumber)
    this.setState({numsArray:numsArray})
  }*/
  addToArray=(e)=>{
    let newNumber=Math.floor(Math.random()*1000)
    //We Use The Spread Operator.
    //The Spread Operator ...array unpacks an array and adds something new
    this.setState({numsArray:[...this.state.numsArray,newNumber]})
  }
  render(){
    return(
      <div>
        {this.state.numsArray.map(numbers=><h3>{numbers}</h3>)}
        <button onClick={this.addToArray}>Add Number</button>
      </div>
    )
  }
}

export default StateMutables
