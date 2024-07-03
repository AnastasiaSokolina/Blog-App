import { createSlice } from '@reduxjs/toolkit';
import { editArticleFetch } from '../fetch/editArticleFetch';

const initialState = {
  loading: false,
  errorRequest: false,
  successRequest: false,
};
const editArticle = createSlice({
  name: 'createArticle',
  initialState,
  reducers: {
    resetSuccessRequest(state) {
      state.successRequest = false;
    },
    setSuccessRequest(state) {
      state.successRequest = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(editArticleFetch.pending, (state) => {
        state.loading = true;
        state.successRequest = false;
      })
      .addCase(editArticleFetch.fulfilled, (state) => {
        state.loading = false;
        state.successRequest = true;
      })
      .addCase(editArticleFetch.rejected, (state, action) => {
        state.loading = false;
        state.errorRequest = true;
        console.log(action);
      });
  },
});

export const { actions, reducer } = editArticle;
