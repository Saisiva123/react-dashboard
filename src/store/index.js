import {combineReducers} from 'redux';
import UserLoggedReducer from './reducers/user-reducer';

const allReducers = combineReducers({
    userReducer:UserLoggedReducer
})
export default allReducers;