import rootReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth'

const store = configureStore({
    reducer:rootReducer,
    auth:authReducer,
});


export default store;