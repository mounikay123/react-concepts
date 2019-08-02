import React, { PureComponent } from 'react'

class PureComponente extends PureComponent {
  render() {
    console.log("pure component render")
    return (
      <div>
        <h1>PureComponent {this.props.name}</h1>
        
      </div>
    )
  }
}
export default  PureComponente;
