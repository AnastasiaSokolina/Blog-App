import { Spin } from 'antd'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import ArticleItemBody from '../../Components/ArticleItemBody/articleItemBody'
import ArticleItemHeader from '../../Components/ArticleItemHeader/articleItemHeader'
import NotFoundPage from '../../Pages/NotFoundPage/notFoundPage'
import { fetchArticle } from './fetchArticle'
import './article.scss'

export default function Article() {
    const { slug } = useParams()
    const token = useSelector((state) => state.reducers.logIn.token)
    const [deleteProcessing, setDeleteProcessing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [articleContent, setArticleContent] = useState(null);
    const [pageFound, setPageFound] = useState(true);

    useEffect(() => {
        fetchArticle(slug, token)
          .then(({ response }) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error(response.status);
          })
          .then((response) => {
            setArticleContent(response.article);
            setLoading(false);
          })
          .catch((err) => {
            if (err.message === '404') {
              setPageFound(false);
              setLoading(false);
            }
            if (err.message === 'Failed to fetch') {
              setPageFound(false);
              setLoading(false);
            }
          });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return loading ? (
        <Spin size="large" className="article__spinner" />
      ) : pageFound ? (
        <Spin size="large" className="article__spinner" spinning={deleteProcessing}>
          <div className="articleItem articleItem_full">
            <ArticleItemHeader item={articleContent} total setDeleteProcessing={setDeleteProcessing} />
            {articleContent.body ? <ArticleItemBody item={articleContent} /> : null}
          </div>
        </Spin>
      ) : (
        <NotFoundPage />
      );
}