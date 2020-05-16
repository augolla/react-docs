import React,{Component} from 'react'
import StateColorBoxesTwo from './StateColorBoxesTwo'

class StateColorBoxes extends Component {
  constructor() {
    super()
  }
  changeColor=(e)=>{
  }
  render() {
    return (
      <div className="row">
        <StateColorBoxesTwo/>
        <StateColorBoxesTwo />
        <StateColorBoxesTwo />
        <StateColorBoxesTwo />
        <StateColorBoxesTwo />
        <StateColorBoxesTwo />
        <StateColorBoxesTwo />
        <StateColorBoxesTwo />
        <StateColorBoxesTwo />
        <StateColorBoxesTwo />
        <StateColorBoxesTwo />
        <StateColorBoxesTwo />
        <StateColorBoxesTwo />
        <StateColorBoxesTwo />
        <StateColorBoxesTwo />

      </div>
    );
  }
}

export default StateColorBoxes
