import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import axios from 'axios';


export default class TablePagination extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        axios.get("http://localhost:9000/v1/signUp").then(response => {
            const data = response.data;
            this.setState({ data });
        })
    }
   
    dataFunc = (dataa) => {
        axios.put("http://localhost:9000/v1/signUp/" + dataa._id, dataa).then(response => {
            this.componentDidMount();
        })
    }
    render() {
        // console.log(tableData.tableData,"tableData")
        const { data } = this.state;
        return (
            <React.Fragment>
                <h2 >Employee List</h2>
                <table >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data ? data.map((employee) => {
                            return (
                                <tr key={employee._id}>
                                    <td>{employee.name}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.password}</td>
                                    <td>
                                        <Data data1={employee} dataFunc={this.dataFunc} />
                                    </td>
                                </tr>
                            );
                        }) : null}
                    </tbody>
                </table>

            </React.Fragment>

        )
    }
}


class Data extends Component {
    state = { ...this.props.data1, data2: false };
    onEdit = (event) => {
        this.setState({ data2: true });
    }
    handleOnChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    closeModal = () => {
        this.setState({ data2: false });
    }
    onSave = (event) => {
        this.props.dataFunc(this.state);
        this.closeModal();
    }


    render() {
        return (
            <React.Fragment>
                <button onClick={this.onEdit}>edit</button>
                <section>
                    <Modal visible={this.state.data2} width="500" height="500" onClickAway={this.closeModal}>
                        <div>
                            <label>name</label>
                            <input type="text" value={this.state.name} name="name" onChange={this.handleOnChange}></input>
                            <label>password</label>
                            <input type="text" value={this.state.password} name="password" onChange={this.handleOnChange}></input>
                            <label>email</label>
                            <input type="text" value={this.state.email} name="email" onChange={this.handleOnChange}></input>
                        </div>
                        <div>
                            <button onClick={this.closeModal}>close</button>
                            <button onClick={this.onSave}>save</button>
                        </div>
                    </Modal>
                </section>
            </React.Fragment>
        )
    }
}