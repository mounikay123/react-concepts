import data from "../login.json"

const initialState = {
    username: data.username,
    password: data.password,
    auth:false,
    error:""
}
const postReducer = (state=initialState, action) => {
    console.log("reducer", action)
    switch (action.type) {
        case "getPosts":
            if(initialState.auth){
                return {
                    ...state,
                    posts: action.payload
                };
            }
            
        default:
            return state

    }

}
export default postReducer;
