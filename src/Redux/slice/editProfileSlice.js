import { createSlice } from '@reduxjs/toolkit';
import { editProfileFetch } from '../fetch/editProfileFetch';

const initialState = {
  loading: false,
  errorMessage: null,
  successMessage: false,
};
const editProfile = createSlice({
  name: 'editProfile',
  initialState,
  reducers: {
    resetError: (state) => {
      state.errorMessage = null;
    },
    resetSuccess: (state) => {
      state.successMessage = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(editProfileFetch.pending, (state) => {
        state.loading = true;
        state.successMessage = false;
      })
      .addCase(editProfileFetch.fulfilled, (state) => {
        state.loading = false;
        state.successMessage = true;
        state.errorMessage = false;
      })
      .addCase(editProfileFetch.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.loading = false;
        state.successMessage = false;
        console.log('Error edit!');
      });
  },
});

export const { actions, reducer } = editProfile;
