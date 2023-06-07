'use client'

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    loading: false,
    token: null,
    expiresIn: null,
    error: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setExpiresIn: (state, action) => {
      state.expiresIn = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setToken, setExpiresIn, setError } = authSlice.actions;

export default authSlice;