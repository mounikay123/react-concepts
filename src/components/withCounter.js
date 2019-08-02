import React, { Component } from 'react'
const updatedComponent = Originalcomponent => {
    class NewComponent extends Component {
        state = {
            count: 0
        }
        btnClick = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            })
        }
        render() {
         return <Originalcomponent incrementCount={this.state.count} click={this.btnClick} />
        }
    }
    return NewComponent
}
export default updatedComponent;

