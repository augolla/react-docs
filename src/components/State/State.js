import React,{Component} from 'react'

class State extends Component {
  /*state={ /////This Only works with Babel
    name:'Austin',
    age:56
  }*/
  constructor(props){
    super(props)
    this.state={
      score:25,
      gameOver:false,
      name:'JENNY'
    }
    this.changeState=this.changeState.bind(this)
  }
  /*Updating a state*/
  changeState(){
    this.setState({name:'Austine'})
    console.log('Changed');
  }
  /*changeState=(e)=>{       //////Arrow function--Doesnet need binding Canuse it with alternate way of declaring state
    this.setState({name:'Austine'})
    console.log('Changed');
  }*/
  render(){
    return(
      <div>
        <h2>{this.state.score}</h2>
        <h4>{this.state.name}</h4>
        <h3 onClick={this.changeState}>Updated name: {this.state.name}</h3>
      </div>
    )
  }

}

export default State
