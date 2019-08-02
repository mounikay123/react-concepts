import React, { Component,PureComponent } from 'react'
import RegularComponent from './regularComponent';
import PureComponente from './pureComponent';

class ParentComponent extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"mounika"
      }
    }
 componentDidMount(){
    setInterval(() => {
        this.setState({name:"mounika"})
    },2000);
 }
  render() {
      console.log("parent component render")
    return (
      <div>
        <h1>Parent Component</h1>
        <RegularComponent name={this.state.name} />
        <PureComponente name={this.state.name} />
      </div>
    )
  }
}
export default ParentComponent;