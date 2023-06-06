'use client'

import api from '@/api/api';
import allActions from '.';
import { setToken,setExpiresIn,setLoading,setError } from '../slices/auth';

export const register = (email, password, rePassword) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      await api
        .post('auth/register', {
          email: email,
          password: password,
          repassword: rePassword,
        })
        .then((res) => {
          dispatch(allActions.loginActions.setTime());
          dispatch(setToken(res.data.token));
          dispatch(setExpiresIn(res.data.expiresIn));
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
          console.log('res: ', res.data.token);
          dispatch(allActions.loginActions.setTime());
          dispatch(setToken(res.data.token));
          dispatch(setExpiresIn(res.data.expiresIn));
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
      const expiresIn = getState().login.expiresIn;
      setTimeout(() => {
        dispatch(allActions.loginActions.refreshToken());
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
        .get('auth/refresh')
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
      await api.get('auth/logout').then((res) => {
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