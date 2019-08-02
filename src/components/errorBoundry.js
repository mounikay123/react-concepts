import React, { Component } from 'react'

 class ErrorBoundry extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          hasError:false
       }
     }
     static getDerivedStateFromError(error){
       return {
           hasError:true
       }
     }
     componentDidCatch(error,info){
         console.log(error)
         console.log(info)
     }
     
  render() {
    return (
      <div>
        {this.state.hasError?<div>something went wrong</div> :this.props.children}
      </div>
    )
  }
}
export default ErrorBoundry;