import React, { Component } from 'react'

 class RenderOnClick extends Component {
  state = {
    count: 0
}
btnClick = () => {
    this.setState(prevState => {
        return { count: prevState.count + 1 }
    })
}
  render() {
    
    return (
      <div>
         <button onClick={this.btnClick}>  Render click me!! {this.state.count}</button>
      </div>
    )
  }
}
export default RenderOnClick;