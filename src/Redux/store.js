import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer as articleSlice } from './slice/articleSlice';
import { reducer as createArticleSlice } from './slice/createArticleSlice';
import { reducer as editArticleSlice } from './slice/editArticleSlice';
import { reducer as editProfileSlice } from './slice/editProfileSlice';
import { reducer as loginSlice } from './slice/loginSlice';
import { reducer as signUpSlice } from './slice/signUpSlice';

const reducers = combineReducers({
  articles: articleSlice,
  logIn: loginSlice,
  editProfile: editProfileSlice,
  signUp: signUpSlice,
  createArticle: createArticleSlice,
  editArticle: editArticleSlice,
});

export const store = configureStore({
  reducer: {
    reducers,
  },
});
