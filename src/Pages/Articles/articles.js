import { Pagination, Spin } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ArticleItem from '../../Components/ArticleItem/articleItem'
import './articles.scss'
import { actions } from '../../Redux/slice/articleSlice'
import { articleFetch } from '../../Redux/fetch/articleFetch'


export default function Articles() {
    const dispatch = useDispatch()
    const articlesList = useSelector((state) => state.reducers.articles.list)
    const articlesLoaded = useSelector((state) => state.reducers.articles.loaded)
    const articlesTotalCount = useSelector((state) => state.reducers.articles.totalArticles)
    const currentPage = useSelector((state) => state.reducers.articles.currentPage)
    const token = useSelector((state) => state.reducers.logIn.token)

    useEffect(() => {
        dispatch(articleFetch({ number: currentPage * 5, token }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])

    return articlesLoaded ? (
        <section className="articlesList">
          <ul className="articlesList__list">
            {articlesList.map((item) => (
              <ArticleItem item={item} key={item.slug} />
            ))}
          </ul>
          <Pagination
            total={articlesTotalCount - 5}
            current={currentPage}
            defaultPageSize={5}
            pageSizeOptions={[5]}
            className="articlesList__pagination"
            onChange={(num) => dispatch(actions.onChangePage({ num }))}
          />
        </section>
        ) : (
        <Spin size="large" className="articlesList__spinner" />
      );
}