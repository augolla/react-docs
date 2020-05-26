import React,{Component} from 'react'

class Events extends Component {
  printSomething(){
    console.log("Something?");
  }
  render(){
    let num=0
    return(
      <div>
        <button onClick={this.printSomething}>Mimi</button>
      </div>
    )
  }
}

export default Events
