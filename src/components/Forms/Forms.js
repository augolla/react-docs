import React,{Component} from 'react'

class Forms extends Component {
  constructor() {
    super()
    this.state={fullname:'',password:'',email:''}
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange(evt){
    this.setState({[evt.target.name]:evt.target.value})
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name='fullname' value={this.state.name} onChange={this.handleChange}/>
          <input type='email' name='email' value={this.state.email} onChange={this.handleChange}/>
          <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
          <button>submit</button>
        </form>
        <h2>fullname:{this.state.fullname}</h2>
        <h2>email:{this.state.email}</h2>
        <h2>passsword:{this.state.password}</h2>
      </div>
    )
  };
}

export default Forms
