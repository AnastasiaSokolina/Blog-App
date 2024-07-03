import { createAsyncThunk } from '@reduxjs/toolkit';

export const loginFetch = createAsyncThunk('loginedUserSlice/loginedUser', async (action) => {
  const { email, password } = action;
  const options = {
    method: 'POST',
    Host: 'https://blog.kata.academy',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ user: { email, password } }),
  };
  const response = await fetch('https://blog.kata.academy/api/users/login', options).then((answer) => {
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
