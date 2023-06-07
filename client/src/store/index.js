'use client'
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth';
import accommodationSlice from './slices/accommodationSlice';

const rootReducer = {
    auth:authSlice.reducer,
    accommodation:accommodationSlice.reducer,
}

const store = configureStore({
    reducer:rootReducer,
});


export default store;