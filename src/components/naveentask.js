import React, { Component } from 'react'
import axios from 'axios'
class Restarunts extends Component {
    state = {
        data: [],
        isDataAvailable: false
    }
    componentDidMount() {
        this.getRestaruntData()
    }
    getRestaruntData = () => {
        this.setState({ isDataAvailable: true })
        if(this.state.isDataAvailable){
            axios.get('https://reastaurantapplication.firebaseio.com/restaurants/-L_lbS82vsUkfNI3BbgO.json').then(res => {
                console.log(res.data, "responsemu");
                this.setState({ data: res.data })
            })
                .catch(err => {
                    console.log(err);
                });
        }
       
    }
    render() {
        return (
            <div>
                <button type="button" className="btn btn-xs btn-primary" onClick={this.getRestaruntData}>choose nearby reastarunts</button>
                { this.state.data ? this.state.data.map((resData) =>
                    <ul key={resData.id}>
                        <li>{resData.name}</li>
                    </ul>
                ) : null}
            </div>
        )
    }
}
export default Restarunts;
