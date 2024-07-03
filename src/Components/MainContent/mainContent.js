import { Route, Routes } from 'react-router-dom';
import './mainContent.scss';
import RequireAuth from '../HOC/requireAuth';
import Article from '../../Pages/Article/article';
import Articles from '../../Pages/Articles/articles';
import CreateArticle from '../../Pages/CreateArticle/createArticle';
import EditArticle from '../../Pages/EditArticle/editArticle';
import EditProfile from '../../Pages/EditProfile/editProfile';
import SignIn from '../../Pages/SignIn/signIn';
import SignUp from '../../Pages/SignUp/signUp';

function MainContent() {
  return (
    <div className="content__container">
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/article/:slug" element={<Article />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="/articles/:slug/edit"
          element={(
            <RequireAuth>
              <EditArticle />
            </RequireAuth>
                  )}
        />
        <Route
          path="/new-article"
          element={(
            <RequireAuth>
              <CreateArticle />
            </RequireAuth>
                  )}
        />
        <Route
          path="/profile"
          element={(
            <RequireAuth>
              <EditProfile />
            </RequireAuth>
                  )}
        />
      </Routes>
    </div>
  );
}

export default MainContent;
