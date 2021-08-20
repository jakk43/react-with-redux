import { combineReducers } from "redux";
import accountReducer from './accountReducer'
import postReducer from './postReducer'

const reducers = combineReducers({
    account: accountReducer,
    post: postReducer
})

export default reducers;