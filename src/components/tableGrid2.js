import React, { Component } from 'react';



import tableData from '../data.json';
class TableGrid2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableInfo: tableData,
            currentPage:1,
            begin:1,
            numPerPage:10,
            end:1
        };
    }
    componentDidMount(){
      this.state.tableInfo.tableData.map((value)=>{
             console.log(value,"vale")
      })
    }
  handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });
    }
    PreviousPage = (curr) => {
        // console.log(curr,"curr")
        const {begin,end,numPerPage,currentPage}=this.state
    
        if (this.state.currentPage > 1) {
            this.setState({begin:end + 1-numPerPage,currentPage:currentPage - 1,end:numPerPage*currentPage})
          console.log(begin,end,numPerPage,currentPage);
        }
    }
  
    NextPage = (curr) => {
        // console.log(curr,"curr")
        // const limitExceed= curr*numPerPage;
        const {begin,end,numPerPage,currentPage}=this.state
        if (this.state.tableInfo.tableData.length >= numPerPage){
            this.setState({currentPage:currentPage + 1 ,begin:end+1  ,
                end:(numPerPage*currentPage)})
                console.log(begin,end,numPerPage,currentPage);
        }
    }
    render() {
        return (
            <div>
                
                <div className="table table-striped table-bordered " style={{left:50}} >
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>userId</th>
                            <th>id</th>
                            <th>body</th>
                        </tr>

                    </thead>
                    <tbody>

                        {this.state.tableInfo.tableData ? this.state.tableInfo.tableData.map((employee) => {
                            return (
                                <tr key={employee.id} >
                                    <td>{employee.title}</td>
                                    <td>{employee.userId}</td>
                                    <td>{employee.id}</td>
                                    <td>{employee.completed}</td>

                                </tr>
                            );
                        }) : null}


                    </tbody>
                </div>
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" onClick={this.PreviousPage(this.state.currentPage)} >Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">{this.state.currentPage }</a></li>
                    <li  class="page-item"><a class="page-link" onClick={this.NextPage}>Next</a></li>
                </ul>
            </div>
        );
    }

}

export default TableGrid2;
