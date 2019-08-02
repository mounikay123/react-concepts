import React, { Component } from 'react'

 class RenderPropsHover extends Component {
  
  render() {
    const {count,incrementCount} =this.props;
    return (
      <div>
        <button onMouseOver={incrementCount}>Render click me!! {count}</button>
      </div>
    )
  }
}
export default RenderPropsHover;
