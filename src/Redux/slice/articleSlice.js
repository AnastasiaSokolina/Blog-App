/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { articleFetch } from '../fetch/articleFetch';

const initialState = {
  loading: false,
  loaded: false,
  list: [],
  totalArticles: 0,
  currentPage: 1,
};

const articlesList = createSlice({
  name: 'articlesList',
  initialState,
  reducers: {
    onChangePage: (state, action) => {
      const { num } = action.payload;
      state.currentPage = num;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(articleFetch.pending, (state) => {
        state.loading = true;
        state.loaded = false;
      })
      .addCase(articleFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.response.articles;
        state.totalArticles = action.payload.response.articlesCount;
        state.loaded = true;
      })
      .addCase(articleFetch.rejected, (state, action) => {
        console.log(state, action);
      });
  },
});

export const { actions, reducer } = articlesList;
