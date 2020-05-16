import React,{Component} from 'react'

class StateColorBoxesTwo extends Component {
  constructor(props){
    super(props)
    this.state={
      colors:['red','blue','green','black','yellow','orange','purple','pink','grey','brown','indig'],
      background:Math.floor(Math.random()*10)
    }
  }
  changeBg=(e)=>{
    this.setState({background:this.state.colors[Math.floor(Math.random()*this.state.colLength-1)]})
  }
  render(){
    return (
      <div onClick={this.changeBg} className='col-2' style={{height:'100px',background:`${this.state.colors[Math.floor(Math.random()*10)]}`}}>

      </div>
    );
  }
}

export default StateColorBoxesTwo
