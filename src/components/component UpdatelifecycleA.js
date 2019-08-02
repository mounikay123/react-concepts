import React, { Component } from 'react'

class UpdatelifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'vidhya'
        }
        console.log("Updateconstructor constructor ")
    }
    static getDerivedStateFromProps(props,state) {
        console.log("UpdatelifecycleA getDerivedStateFromProps ")
        return null;
    }
    shouldComponentUpdate(nextState,nextProps) {
        console.log("UpdatelifecycleA shouldComponentUpdate ")
        return true;
    }
    componentDidUpdate(prevProps,prevState,snapshot) {
        console.log("UpdatelifecycleA componentDidUpdate ")
    }
    getSnapshotBeforeUpdate(prevState,prevProps) {
        console.log("UpdatelifecycleA getsnapshotBeforeUpdate")
        return null;
    }
    render() {
        console.log("UpdatelifecycleA render ")
        return (
            <div>

            </div>
        )
    }
}
export default UpdatelifecycleA;

