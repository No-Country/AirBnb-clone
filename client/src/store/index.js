'use client'
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth';
import accommodationSlice from './slices/accommodationSlice';
import userSlice from './slices/user';

const rootReducer = {
    auth:authSlice.reducer,
    accommodation:accommodationSlice.reducer,
    user:userSlice.reducer,
}

const store = configureStore({
    reducer:rootReducer,
});


export default store;