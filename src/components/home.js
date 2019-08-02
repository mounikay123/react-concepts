import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getPosts ,dataPost} from '../actions/posts'


class Home extends Component {
    state = {
        posts: [],
        inpPost:"",
        posts1:[]
    }
    dataChange = (e) => {
      this.setState({inpPost:e.target.value})
    }
    onSubmit=()=>{
        this.props.dataPosts(this.state.inpPost)
        this.setState({inpPost:""})
    }
    componentDidMount() {
  console.log(this.props.getPosts())
        this.props.getPosts()
 
    }
    render() {
        console.log(this.props.Posts.posts,"mona");
        const dis= this.props.Posts.posts?this.props.Posts.posts.map((countryData)=>{
           return(
                <ul key={countryData.id}>
               <li>{countryData.country}</li>
           </ul>
           );
         } ):null;
        return (
            <div>
                  
                <p>mounika</p>
               {dis}
                <input type="text" onChange={this.dataChange}  value={this.state.inpPost} />
                <button type="button" className="btn btn-xs btn-primary" onClick={this.onSubmit}>submit</button>
               
                
            </div>

        )
    }
}
const mapStateToProps = state => ({
    Posts: state.posts
    
})
const mapDispatchToProps = (dispatch) => ({
    getPosts: () => dispatch(getPosts()) ,
    dataPosts:(data)=>dispatch(dataPost(data))
  
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);
