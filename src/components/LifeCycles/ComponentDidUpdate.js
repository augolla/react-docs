import React,{Component} from 'react'
import axios from 'axios'

class ComponentDidUpdate extends Component {
  constructor() {
    super()
    console.log('Constructor first');
}
  componentDidUpdate(prevProps,prevState){
    //The first parameter in componentDidUpdate is the previous props
    //the second parameteris the previous state.Gives access to the state objec
    //values before it was updated...prevState.name==this.state.name
  }
  render(){
    console.log('Render during mounting-Second');
    return(
      <div>
        <h4>Immediately After Component is Updated...</h4>
        <h4>Update-setState,props change.</h4>
      </div>
    )
  }
}

export default ComponentDidUpdate
