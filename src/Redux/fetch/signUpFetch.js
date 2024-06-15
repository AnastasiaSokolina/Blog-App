import { createAsyncThunk } from '@reduxjs/toolkit'

export const signUpFetch = createAsyncThunk('signUpSlice/signUp', async function (action) {
    const { username, email, password } = action
    const body = {
        user: {
            email,
            username,
            password,
          }
    }
    const options = {
        method: 'POST',
        Host: 'https://blog.kata.academy',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    }
    const response = await fetch('https://blog.kata.academy/api/users', options).then((answer) => {
        if (!answer.ok) {
            if (answer.status === 422) throw new Error('Some unexpected error!')
                throw new Error('Some unexpected error from server!')
        }
        return answer.json()
        })
        return {
            response
        }
    })    