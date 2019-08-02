import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import Login1 from "../mounika/LoginActions"
class Login extends Component {
    state = {
        username: "",
        password: "",
        errors: ""

    }
    componentWillReceiveProps(nextProps) {
        console.log("nextProps",nextProps)
        if (this.props.data) {
            this.props.history.push("/employerVamsi")
        }
        else{
            this.setState({})
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)


        if (!this.state.username || !this.state.password) {
            this.setState({ errors: "please enter the all fields" })
        } else {
            if (this.state.password.length < 6) {
                this.setState({ errors: "please enter the passworf more than 6" })
            }
            else {
                
                this.props.dispatch(Login1(this.state));

            }
        }


    }

    render() {

        console.log(this.props.data)
        if (this.props.data) {
            this.props.history.push("/employerVamsi")
        }
        return (
            <div>
                {this.state && <p>{this.state.errors}</p>}
                <div className='row'>
                    <div className="col-md-7">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="email" className="form-control" name="username" onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                                <label>password</label>
                                <input type="password" className="form-control" name="password" onChange={this.changeHandler} />
                            </div>

                            <button className="btn btn-xs btn-primary">Login</button>
                        </form>

                    </div>

                </div>

            </div>

        )
    }
}
const mapStateToProps = (state) =>{
    console.log("state",state)
    return{
        data:state.loginReducer.auth,
        error:state.loginReducer.error
    }
}

export default connect(mapStateToProps, null)(Login);
