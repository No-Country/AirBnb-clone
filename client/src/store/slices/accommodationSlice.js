
import { createSlice } from '@reduxjs/toolkit';

const accommodationSlice = createSlice({
  name: 'accommodationSlice',
  initialState: { loading: false, accommodations: [], currentAccommodation: null },
  reducers: {
    isLoadingAccommodations: (state, action) => {
      state.loading = action.payload;
    },
    getAccommodations: (state, action) => {
      state.accommodations = action.payload;
    },
    saveCurrentAccommodation: (state, action) => {
      state.currentAccommodation = action.payload;
    },
    saveError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default accommodationSlice;

export const {
  isLoadingAccommodations,
  getAccommodations,
  saveCurrentAccommodation,
  saveError,
} = accommodationSlice.actions;