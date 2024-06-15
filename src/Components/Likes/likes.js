import { LoadingOutlined } from '@ant-design/icons'
import { message } from 'antd'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import './likes.scss'
import { fetchDislike } from './fetchDislike'
import { fetchLike } from './fetchLike'
import likeIcon from './like.svg'
import likeIconLiked from './redLike.svg'

export default function Likes(props) {
  const {
    item: { favoritesCount, favorited, slug },
  } = props;

  const [state, setState] = useState({
    favorited,
    favoritesCount,
    loadingLike: false,
  });

  const token = useSelector((Gstate) => Gstate.reducers.logIn.token);
  const like = async () => {
    setState((prevState) => ({
      ...prevState,
      loadingLike: true,
    }));

    if (state.favorited) {
      await fetchDislike(slug, token)
        .then((response) => {
          if (response.errors) {
            if (response.errors.error.status === 401) {
              throw new Error('Not authorized!');
            }
            throw new Error('Error!');
          }

          setState((prevState) => ({
            ...prevState,
            favorited: response.article.favorited,
            favoritesCount: response.article.favoritesCount,
            loadingLike: false,
          }));
        })
        .catch(() => {
          message.error('Oops! Something went wrong! Maybe you need to log into your account?');
          setState((prevState) => {
            return { ...prevState, loadingLike: false };
          });
        });
    } else {
      await fetchLike(slug, token)
        .then((response) => {
          if (response.errors) {
            if (response.errors.error.status === 401) {
              throw new Error('Not authorized!');
            }
            throw new Error('Error!');
          }
          setState((prevState) => ({
            ...prevState,
            favorited: response.article.favorited,
            favoritesCount: response.article.favoritesCount,
            loadingLike: false,
          }));
        })
        .catch((err) => {
          console.log(err);
          message.error('Oops! Something went wrong! Maybe you need to log into your account?');
          setState((prevState) => {
            return { ...prevState, loadingLike: false };
          });
        });
    }
  };

  return (
    <div className="likesCountField">
      {state.favorited ? (
        state.loadingLike ? (
          <LoadingOutlined />
        ) : (
          <>
            <button onClick={() => like()}>
              <img src={likeIconLiked} alt="like icon" />
            </button>
            <p className="likesCount">{state.favoritesCount}</p>
          </>
        )
      ) : state.loadingLike ? (
        <LoadingOutlined />
      ) : (
        <>
          <button onClick={() => like()}>
            <img src={likeIcon} alt="like icon" />
          </button>
          <p className="likesCount">{state.favoritesCount}</p>
        </>
      )}
    </div>
  )
}