/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';

export const createArticleFetch = createAsyncThunk('createArticleSlice/createArticle', async (action) => {
  const {
    editProfileShortDescription, editProfileText, editProfileTitle, tags, token,
  } = action;
  const body = {
    article: {
      title: editProfileTitle,
      description: editProfileShortDescription,
      body: editProfileText,
      tagList: tags.map((el) => el.tag),
    },
  };

  const options = {
    method: 'POST',
    HOST: 'https://blog.kata.academy',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify(body),
  };

  const response = await fetch('https://blog.kata.academy/api/articles', options);

  if (!response.ok) {
    if (response.status === 422) {
      throw new Error('Some unexpected error!');
    }
    throw new Error('Some unexpected error from server!');
  }

  const data = await response.json();
  return {
    data,
  };
});
