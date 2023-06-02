import {combineReducers} from 'redux';
import auth from './auth'
import accommodationReducer from './accommodation';

const rootReducer = combineReducers({
    auth,
    accommodationReducer,
})

export default rootReducer;