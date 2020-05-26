import React,{Component} from 'react'
import {Route,Switch,Link} from 'react-router-dom'

class Rout1 extends Component {
  constructor() {
    super()
  }
  render(){
    return(
      <div>
        <h5>3 ways to Render something with Route</h5>
        <ol>
          <li>Route component</li>
          <li>Route children</li>
          <li>Route render</li>
        </ol>
        <Switch {/*Switch ensures routes arent layered on top*/}>
        {/*exact makes sure that component is only returned when the path is an exact match*/}
          <Route exact path='/' component={componentName}/>
          <Route exact path='/about' component={componentAbout}/>
          <Route exact path='/age/100' component={componentAge100}/>
          <Route exact path='/age/100' component={componentAge100}/>
          {/*404 Error Page-Whe not Found*/}
          <Route render={()=><h2>404 ERROR.PAGE NOT FOUND</h2>/>}/>
        </Switch>
        {/*Use Links to acces the routes...Replace Link with NavLinks for navbars--allows styling
          ---active etc*/}
        <Link to='/path'>path</Link>
        <Link to='/about'>about</Link>
        <Link to='/path'>path</Link>
        {/*When using props with child components,use render*/}
        <Route exact path='/age/100' render={()=><ChildComponent propsname='whatever'/>}/>
        {/*YOu can use url parameters.(any can be any word---try logging it to see)*/}
        <Route
        exact path='/age/:name'
        render={(any)=><ChildComponent propsname={any.match.params.name}/>}/>
        {/*Multiple parameters*/}
        <Route
        exact path='/age/:name/:another/:something'
        render={(any)=><ChildComponent propsname={any.match.params.name} propsname2={any.match.params.another}/>}/>
      </div>
    )
  }
}

export default Rout1
