import React, { Component } from 'react'

export class Comp extends Component {
  componentWillUnmount(){
    alert('Component is going to removed')
  }
  render() {
    return (
      <div style={{width:'100%', height:'100vh' , background:'red'}}>

       <h1>Hi there how are you</h1>
      </div>
    )
  }
}

export default Comp
