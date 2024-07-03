import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from '../../Redux/slice/loginSlice';
import UserIcon from '../UserIcon/userIcon';
import './mainHeader.scss';

function MainHeader() {
  const userData = useSelector((state) => state.reducers.logIn);
  const dispatch = useDispatch();
  return (
    <header className="header">
      <h1 className="header__title">
        <Link to="/" className="header__link">
          Realworld Blog
        </Link>
      </h1>
      {userData.logined ? (
        <div className="header__btnGroup_logined">
          <Link to="/new-article" className="header__createArticleLink">
            <span>Create article</span>
          </Link>
          <Link to="/profile">
            <UserIcon
              item={{
                author: {
                  username: userData.username,
                  image: userData.avatar,
                },
              }}
            />
          </Link>
          <button type="button" className="header__logOutBtn" onClick={() => dispatch(actions.logOut())}>
            Log Out
          </button>
        </div>
      ) : (
        <div className="header__btnGroup">
          <Link to="sign-in" className="header__signInBtn">
            Sign In
          </Link>
          <Link to="sign-up" className="header__signUpBtn" onClick={() => dispatch(actions.logOut())}>
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
}

export default MainHeader;
