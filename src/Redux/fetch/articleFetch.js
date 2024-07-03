import { createAsyncThunk } from '@reduxjs/toolkit';

// eslint-disable-next-line import/prefer-default-export
export const articleFetch = createAsyncThunk('articlesListSlice/fetchArticles', async (action) => {
  const { number, token } = action;
  const options = {
    Host: 'https://blog.kata.academy',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Token ${token}`,
    },
  };
  const response = await fetch(`https://blog.kata.academy/api/articles?offset=${number}&limit=${5}`, options).then(
    (answer) => answer.json(),
  );
  return {
    response,
  };
});
