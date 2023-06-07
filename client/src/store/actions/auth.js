'use client'

import api from '@/api/api';
import allActions from '.';
import { setToken,setExpiresIn,setLoading,setError } from '../slices/auth';

export const register = (email, password, rePassword, name, lastName) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      await api
        .post('auth/register', {
          email: email,
          password: password,
          repassword: rePassword,
          name: name,
          lastName: lastName,
        })
        .then((res) => {
          dispatch(setToken(res.data.token));
          dispatch(setExpiresIn(res.data.expiresIn));
          dispatch(allActions.authActions.setTime());
          dispatch(setLoading(false));
        })
        .catch(function (error) {
          dispatch(setLoading(false));
          dispatch(setError(error.response.data.message));
        });
    } catch (e) {
      dispatch(setLoading(false));
    }
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      await api
        .post('auth/login', {
          email: email,
          password: password,
        })
        .then((res) => {
          dispatch(setToken(res.data.token));
          dispatch(setExpiresIn(res.data.expiresIn));
          dispatch(allActions.authActions.setTime())
          dispatch(setLoading(false));
        })
        .catch(function (error) {
          dispatch(setLoading(false));
          dispatch(setError(error.response.data.message));
        });
    } catch (e) {
      console.log('es esto', e);
      dispatch(setLoading(false));
    }
  };
};

export const setTime = () => {
  return async (dispatch, getState) => {
    try {
      const expiresIn = getState().auth.expiresIn;
      setTimeout(() => {
        dispatch(allActions.authActions.refreshToken());
      }, expiresIn * 1000 - 6000);
    } catch (e) {
      console.log(e);
    }
  };
};

export const refreshToken = () => {
  return async (dispatch) => {
    try {
      await api
        .post('auth/refresh')
        .then((res) => {
          dispatch(setLoading(true));
          setTime();
          dispatch(setToken(res.data.token));
          dispatch(setExpiresIn(res.data.expiresIn));
        })
        .catch(function (e) {
          dispatch(setLoading(false));
          dispatch(setError(error.response.data.message));
        });
    } catch (error) {
      dispatch(setLoading(false));
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      await api.post('auth/logout').then((res) => {
        dispatch(setLoading(true));
        dispatch(setToken(null));
        dispatch(setError(error.response.data.message));
      });
    } catch (error) {
      dispatch(setLoading(false));
    }
  };
};

export default {
  register,
  login,
  setTime,
  logout,
  refreshToken
};