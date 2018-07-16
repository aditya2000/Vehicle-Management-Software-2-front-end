import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import stepReducer from './stepReducer';

export default combineReducers({
    item: itemReducer,
    steps: stepReducer
});
