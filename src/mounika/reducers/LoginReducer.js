const initalState = {
    username: "hruday@gmail.com",
    password: "mounika1",
    auth: false,
    error: ""
}
const LoginRed = (state = initalState, action) => {
    console.log(action,"action")
    switch (action.type) {
        case "login":
            console.log(action.payload.username ,action.payload.password)
            if (state.username === action.payload.username && state.password === action.payload.password) {
               return {
                    ...state,
                   auth:true
                }
            }else{
                return{
                    ...state,
                    error:"username and password not matched in my records"

                }
            }
           default:
            return state
    }
}
export default LoginRed;