import { createAsyncThunk } from '@reduxjs/toolkit';

export const editProfileFetch = createAsyncThunk('editProfileSlice/editProfile', async (action) => {
  const {
    editProfileAvatar, editProfileEmail, editProfilePassword, editProfileUsername, token,
  } = action;
  const body = {
    user: {
      email: editProfileEmail,
      username: editProfileUsername,
      bio: null,
      image: editProfileAvatar,
      password: editProfilePassword,
    },
  };
  const options = {
    method: 'PUT',
    Host: 'https://blog.kata.academy',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify(body),
  };
  const response = await fetch('https://blog.kata.academy/api/user', options).then((answer) => {
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
