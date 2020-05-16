import React,{Component} from 'react'

class Pokedex extends Component {
  render(){
    return(
      <div>
        <img src={this.props.imgSrc}/>
        <h2>{this.props.name}</h2>
        <h5>{this.props.type}</h5>
      </div>
    )
  }

}

export default Pokedex
