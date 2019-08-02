import React, { Component } from 'react'

export default class Counter extends Component {
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
        {this.props.render( this.state.count, this.btnClick)}
      </div>
    )
  }
}
