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
        {/*Adding key helps for when every number/data rendered is not/might not be unique
        e.g If we had a remove functionality,if we tried to remove a number,
        all numbers/data with that value would be removed.The key makes each rendering
        unique*/}
        {this.state.numsArray.map(numbers=><h3 key={numbers}>{numbers}</h3>)}
        <button onClick={this.addToArray}>Add Number</button>
      </div>
    )
  }
}

export default StateMutables
