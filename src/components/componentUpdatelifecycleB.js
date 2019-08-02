import React, { Component } from 'react'

 class UpdatelifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'vidhya'
        }
        console.log("UpdateconstructorB constructor ")
    }
    static getDerivedStateFromProps() {
        console.log("UpdatelifecycleB getDerivedStateFromProps ")
        return null;
    }
    shouldComponentUpdate() {
        console.log("UpdatelifecycleB shouldComponentUpdate ")
        return true;
    }
    componentDidUpdate() {
        console.log("UpdatelifecycleB componentDidUpdate ")
    }
    getSnapshotBeforeUpdate() {
        console.log("UpdatelifecycleB getsnapshotBeforeUpdate")
    }
    render() {
        console.log("UpdatelifecycleB render ")
        return (
            <div>

            </div>
        )
    }
}

export default UpdatelifecycleB;