/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { createArticleFetch } from '../fetch/createArticleFetch';

const initialState = {
  loading: false,
  errorRequest: false,
  successRequest: false,
};
const createArticle = createSlice({
  name: 'createArticle',
  initialState,
  reducers: {
    resetSuccessRequest: (state) => {
      state.successRequest = false;
    },
    setSuccessRequest: (state) => {
      state.successRequest = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createArticleFetch.pending, (state) => {
        state.loading = true;
        state.successRequest = false;
      })
      .addCase(createArticleFetch.fulfilled, (state) => {
        state.loading = false;
        state.successRequest = true;
      })
      .addCase(createArticleFetch.rejected, (state, action) => {
        state.loading = false;
        state.errorRequest = true;
        console.log(action);
      });
  },
});

export const { actions, reducer } = createArticle;
