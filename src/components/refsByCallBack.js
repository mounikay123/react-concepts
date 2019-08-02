import React, { Component } from 'react'

class RefsByCallBack extends Component {
constructor(props) {
  super(props)

  this.callByRef=null;
  this.setHandlerr=(element)=>{
    this.callByRef=element
  }
}
clickHandler=()=>{
 console.log( this.callByRef.value)
}
componentDidMount(){
    this.callByRef.focus()
 
}

  render() {
    return (
      <div>
        <h1>CallBack Ref</h1>
        <input type="text " ref={this.setHandlerr} />
        <input type="submit" onClick={this.clickHandler} />
      </div>
    )
  }
}
export default RefsByCallBack;