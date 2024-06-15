import { createSlice } from '@reduxjs/toolkit'
import { signUpFetch } from '../fetch/signUpFetch'

const initialState = {
    loading: false,
    errorMessage: null
}
const editProfile = createSlice({
    name: 'signUp',
    initialState,
    reducers: {
        resetError: (state) => {
            state.errorMessage = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUpFetch.pending, (state) => {
                state.loading = true
            })
            .addCase(signUpFetch.fulfilled, (state) => {
                state.loading = false
            })
            .addCase(signUpFetch.rejected, (state, action) => {
                state.errorMessage = action.error.message
                state.loading = false
                console.log(action)
            })
    },
})

export const { actions, reducer } = editProfile