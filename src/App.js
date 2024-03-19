
import React, { Component } from 'react' 
import Comp from './Comp';

export class App extends Component {
  
  state = {
      name:'', 
      count:0,
      show: true
    }

  inc=()=>{this.setState((prevState)=> ({count: prevState.count+1}));
  }

  render() {
    let child;
    if(this.state.show){
      child = <Comp/>
    }
    return (
      <div className="container">
        <h1>Class Components</h1>  
        <h3>Current state.........{this.state.name}</h3> 
        <input type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
        <h3>{this.state.count}</h3> 
       <button onClick={this.inc}> Increment</button>
       {child}
       <button onClick={()=> this.setState({show:false})} > Delete Comp</button>
     </div> 
    )
  }
}

export default App

