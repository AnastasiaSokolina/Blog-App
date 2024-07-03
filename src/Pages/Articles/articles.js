/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { Pagination, Spin } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useLocalStorage from 'use-local-storage';

import ArticleItem from '../../Components/ArticleItem/articleItem';
import './articles.scss';
import { actions } from '../../Redux/slice/articleSlice';
import { articleFetch } from '../../Redux/fetch/articleFetch';

export default function Articles() {
  const dispatch = useDispatch();
  const articlesList = useSelector((state) => state.reducers.articles.list);
  const articlesLoaded = useSelector((state) => state.reducers.articles.loaded);
  const articlesTotalCount = useSelector((state) => state.reducers.articles.totalArticles);
  const token = useSelector((state) => state.reducers.logIn.token);
  const [currentPage, setCurrentPage] = useLocalStorage('currentPage', 1);

  useEffect(() => {
    dispatch(articleFetch({ number: currentPage * 5, token }));
  }, [currentPage]);

  return articlesLoaded ? (
    <section className="articlesList">
      <ul className="articlesList__list">
        {articlesList.map((item) => (
          <ArticleItem item={item} key={item.slug} />
        ))}
      </ul>
      <Pagination
        total={articlesTotalCount}
        current={currentPage}
        pageSize={5}
        className="articlesList__pagination"
        onChange={(num) => {
          setCurrentPage(num);
          dispatch(actions.onChangePage({ num }));
        }}
      />
    </section>
  ) : (
    <Spin size="large" className="articlesList__spinner" />
  );
}
