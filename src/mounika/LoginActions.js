//  export default  LoginActions=()=>{
//     return dispatch =>{
//         fetch("").then(res=>{
//             res.json.then(res1=>{
// dispatch({
//     type:"GET_LOGIN",
//     payload:res1
// })
//             })
//         })
//     }
// }
export default (data) => ({
    type: "login",
    payload: data

})