import { createAsyncThunk } from '@reduxjs/toolkit'

export const createArticleFetch = createAsyncThunk('createArticleSlice/createArticle', async function (action) {
    const { editProfileShortDescription, editProfileText, editProfileTitle, tags, token } = action
    const body = {
        article: {
            title: editProfileTitle,
            description: editProfileShortDescription,
            body: editProfileText,
            tagList: tags.map((el) => el.tag)
        },
    }
    
    const options = {
        method: 'POST',
        HOST: 'https://blog.kata.academy',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: `Token ${token}`,
        },
        body: JSON.stringify(body),
    }
    const response = await fetch('https://blog.kata.academy/api/articles', options).then((answer) => {
        if (!answer.ok) {
            if (answer.status === 422) throw new Error ('Some unexpected error!')
            throw new Error('Some unexpected error from server!')
        }
        return answer.json()
        })
        return {
            response
        }
})
