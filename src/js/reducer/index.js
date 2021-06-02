import {combineReducers} from 'redux';
import movieReducer from './movieReducer';
import starReducer from './starReducer';

const rootReducer = combineReducers({movieReducer,starReducer})
export default rootReducer