import AppReducer from './AppReducer';
import LoginReducer from './LoginReducer';
import SelectionReducer from './SelectionPageReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ AppReducer, LoginReducer, SelectionReducer });

export default rootReducer;
