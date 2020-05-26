import React,{Component} from 'react'
import axios from 'axios'

class ComponentDidMounter extends Component {
  constructor() {
    super()
    console.log('Constructor first');
}
  componentDidMount(){
    console.log('ComponentDidMount last-after mounting');
    setTimeout(function () {
      axios.get("https://api.github.com/zen").then(response=>{
        console.log(response.data);
      })
    },3000)

  }
  render(){
    console.log('Render during mounting-Second');
    return(
      <div>
        <h4>Immediately After Component is Mounted...</h4>
        <h4>Mounting-First Time Component is rendered.</h4>
      </div>
    )
  }
}

export default ComponentDidMounter
