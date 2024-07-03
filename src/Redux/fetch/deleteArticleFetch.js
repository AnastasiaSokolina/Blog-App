import { createAsyncThunk } from '@reduxjs/toolkit';

export const deleteArticleFetch = createAsyncThunk('deleteArticleSlice/deleteArticle', async (action) => {
  const { token, slug } = action;
  console.log(token, slug);
  const options = {
    method: 'DELETE',
    Host: 'https://blog.kata.academy',
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  const response = await fetch(`https://blog.kata.academy/api/articles/${slug}`, options).then((answer) => {
    if (!answer.ok) {
      if (answer.status === 422) throw new Error('Some unexpected error!');
      throw new Error('Some unexpected error from server!');
    }
    return answer.json();
  });
  return {
    response,
  };
});
