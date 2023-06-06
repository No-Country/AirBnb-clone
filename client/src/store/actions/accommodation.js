'use client'

import api from '@/api/api';
import allActions from '.';
import accommodationSlice from '../slices/accommodationSlice';

const getAccommodations = () => {
  return async (dispatch) => {
    try {
      dispatch(accommodationSlice.actions.isLoadingAccommodations(true));
      await api.get("accommodation/")
        .then(res => {
          dispatch(accommodationSlice.actions.getAccommodations(res.data));
          dispatch(accommodationSlice.actions.isLoadingAccommodations(false));
        })
        .catch(error => {
          dispatch(accommodationSlice.actions.isLoadingAccommodations(false));
          dispatch(accommodationSlice.actions.saveError(error.response.data.message));
        });
    } catch (e) {
      console.log(e);
      dispatch(accommodationSlice.actions.isLoadingAccommodations(false));
    }
  };
}

const getAccommodation = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(accommodationSlice.actions.isLoadingAccommodations(true));
      await api.get(`accommodation/${id}`)
        .then(res => {
          dispatch(accommodationSlice.actions.saveCurrentAccommodation(res.data));
          dispatch(accommodationSlice.actions.isLoadingAccommodations(false));
        })
        .catch(function (error) {
          dispatch(accommodationSlice.actions.isLoadingAccommodations(false));
          dispatch(accommodationSlice.actions.saveError(error.response.data.message));
        });
    } catch (e) {
      console.log(e);
      dispatch(accommodationSlice.actions.isLoadingAccommodations(false));
    }
  }
}

const deleteAccommodation = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(accommodationSlice.actions.isLoadingAccommodations(true));
      const token = getState().auth.token;
      await api.get(`accommodation/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(res => {
          dispatch(accommodationSlice.actions.isLoadingAccommodations(false));
        })
        .catch(function (error) {
          dispatch(accommodationSlice.actions.isLoadingAccommodations(false));
          dispatch(accommodationSlice.actions.saveError(error.response.data.message));
        });
    } catch (e) {
      console.log(e);
      dispatch(accommodationSlice.actions.isLoadingAccommodations(false));
    }
  }
}

const updateAccommodation = (body) => {
  return async (dispatch, getState) => {
    try {
      dispatch(accommodationSlice.actions.isLoadingAccommodations(true));
      const token = getState().auth.token;
      await api.put(`accommodation/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
        body: { body }
      })
        .then(res => {
          dispatch(accommodationSlice.actions.getAccommodations(res.data));
          dispatch(accommodationSlice.actions.isLoadingAccommodations(false));
          dispatch(allActions.authActions.getAccommodations());
        })
        .catch(res => {
          dispatch(accommodationSlice.actions.isLoadingAccommodations(false));
        });
    } catch (error) {
      console.log(error);
      dispatch(accommodationSlice.actions.isLoadingAccommodations(false));
    }
  }
}

export default {
  getAccommodations,
  getAccommodation,
  deleteAccommodation,
  updateAccommodation
};