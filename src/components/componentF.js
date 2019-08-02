import React, { Component } from 'react'
import userContext, {UserConsumer} from '../context/userContext'

export default class ComponentF extends Component {
  render() {
    return (
      <div>
          {this.context}
              <UserConsumer >
       {
        (username)=>{
            return (
                <div><h1>Hello world  {username}</h1></div>
            )
        }
    }

               </UserConsumer>
      
      </div>
    )
  }
}
ComponentF.contextType = userContext;