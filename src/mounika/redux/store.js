// import { createStore, combineReducers } from 'redux';

// const initialState = {
//     "username" :"hrudy123@gmail.com",
//     "password":"mounika1"
// }


// export default createStore(combineReducers({
//     reducer1:reducer1,
//     reducer2:reducer2
// }))




import {createStore} from 'redux';
import rootReducerVamsi from '../reducers/rootReducerVamsi';


export default createStore(rootReducerVamsi);

