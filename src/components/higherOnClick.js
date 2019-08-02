import React, { Component } from 'react'
import updatedComponent from '../components/withCounter'
class HigherOnClick extends Component {


  
  render() {
      const {click, incrementCount} =this.props;
    return (
      <div>
        <button type="button" className="btn btn-xs btn-primary" onClick={click} >
        click {incrementCount}times
        </button>
      </div>
    )
  }
}
export default updatedComponent(HigherOnClick);
