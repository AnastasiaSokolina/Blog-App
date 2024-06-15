import { createAsyncThunk } from '@reduxjs/toolkit'

export const editArticleFetch = createAsyncThunk('editArticleSlice/editArticle', async function (action) {
    const { editProfileShortDescription, editProfileText, editProfileTitle, tags, token, params } = action
    const body = {
        article: {
            title: editProfileTitle,
            description: editProfileShortDescription,
            body: editProfileText,
            tagList: tags.map((el) => el.tag)
        },
    }
    const options = {
        method: 'PUT',
        Host: 'https://blog.kata.academy',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: `Token ${token}`,
        },
        body: JSON.stringify(body)
    }
    const response = await fetch(`https://blog.kata.academy/api/articles/${params.slug}`, options).then((answer) => {
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