import React,{Component} from 'react'

class StateUpdateExisting extends Component {
  constructor() {
    super()
    this.state={count:0}
  }
  increaseCount=(e)=>{
    /*Not a good idea.You do not want the update to depend on previous state If we add
    another setState line below this one for adding more.React will only enact the last thing*/
    this.setState({count:this.state.count+=1})
    /*Use this callback instead*/
    this.setState(currentState=>({count:currentState.count+1}))
  }
  render(){
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.increaseCount}>Increase</button>
      </div>
    );
  }
}

export default StateUpdateExisting
