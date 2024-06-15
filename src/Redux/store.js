import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer as articleSlice } from '../Redux/slice/articleSlice'
import { reducer as createArticleSlice } from '../Redux/slice/createArticleSlice'
import { reducer as editArticleSlice } from '../Redux/slice/editArticleSlice'
import { reducer as editProfileSlice } from '../Redux/slice/editProfileSlice'
import { reducer as loginSlice } from '../Redux/slice/loginSlice'
import { reducer as signUpSlice } from '../Redux/slice/signUpSlice'

const reducers = combineReducers({
    articles: articleSlice,
    logIn: loginSlice,
    editProfile: editProfileSlice,
    signUp: signUpSlice,
    createArticle: createArticleSlice,
    editArticle: editArticleSlice
})

export const store = configureStore({
    reducer: {
        reducers,
    },
})