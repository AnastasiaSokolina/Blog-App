import { createSlice } from '@reduxjs/toolkit'
import { editProfileFetch } from '../fetch/editProfileFetch'
import { signUpFetch } from '../fetch/signUpFetch'
import { loginFetch } from '../fetch/loginFetch'

const initialState = {
    loading: false,
    logined: !!sessionStorage.getItem('token'),
    username: sessionStorage.getItem('username') ? sessionStorage.getItem('username') : null,
    token: sessionStorage.getItem('token') ? sessionStorage.getItem('token') : null,
    avatar: sessionStorage.getItem('avatar') ? sessionStorage.getItem('avatar') : null,
    email: sessionStorage.getItem('email') ? sessionStorage.getItem('email') : null,
    errorMessage: null,
}
const loginedUser = createSlice({
    name: 'loginedUser',
    initialState,
    reducers: {
        logOut: (state) => {
            sessionStorage.clear()
            state.loading = false;
            state.logined = false;
            state.username = null;
            state.token = null;
            state.avatar = null;
            state.email = null;
            state.errorMessage = null;
        },
        resetError: (state) => {
            state.errorMessage = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginFetch.pending, (state) => {
                state.loading = true
            })
            .addCase(loginFetch.fulfilled, (state, action) => {
                const {
                    user: { username, email, token, image },
                    } = action.payload.response
                sessionStorage.setItem('username', username);
                sessionStorage.setItem('token', token);
                sessionStorage.setItem('avatar', image || null);
                sessionStorage.setItem('email', email);
                state.loading = false;
                state.logined = true;
                state.avatar = image;
                state.username = username;
                state.email = email;
                state.token = token;
                state.errorMessage = null;
            })
            .addCase(loginFetch.rejected, (state, action) => {
                state.loading = false;
                state.errorMessage = action.error.message;
            })
            .addCase(editProfileFetch.fulfilled, (state, action) => {
                const {
                    user: { username, email, token, image },
                  } = action.payload.response;
                  state.username = username;
                  state.email = email;
                  state.token = token;
                  state.errorMessage = null;
                  state.avatar = image;
                  sessionStorage.setItem('username', username);
                  sessionStorage.setItem('token', token);
                  sessionStorage.setItem('avatar', image);
                  sessionStorage.setItem('email', email);
            })
            .addCase(signUpFetch.fulfilled, (state, action) => {
                const {
                    user: { username, email, token, image },
                  } = action.payload.response;
                state.logined = true;
                state.username = username;
                state.email = email;
                state.token = token;
                state.errorMessage = null;
                state.avatar = image;
                sessionStorage.setItem('username', username);
                sessionStorage.setItem('token', token);
                sessionStorage.setItem('avatar', image);
                sessionStorage.setItem('email', email);
            })
    },
})

export const { actions, reducer } = loginedUser