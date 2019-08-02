import axios from 'axios';
export const getPosts = () => {
  return dispatch => {
    fetch("https://jsonplaceholder.typicode.com/todos").then(response => {
      response.json().then(json => {
        dispatch({
          type: "getPosts",
          payload: json
        })
      })
    })
  }

}
export const dataPost = (data) => {
  return dispatch => {
    console.log(data,"actions")
  axios.post("https://fgrsftg.firebaseio.com/name.json", {data})
      .then(res => {
        console.log(res, "jhgkj")
      })
      .catch(err => {
        console.log(err);
      })
  }
}





