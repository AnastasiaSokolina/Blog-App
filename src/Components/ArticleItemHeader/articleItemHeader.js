import { Button, Popconfirm, message } from 'antd'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import Likes from '../Likes/likes'
import TagList from '../TagList/tagList'
import UserIcon from '../UserIcon/userIcon'
import './articleItemHeader.scss'
import { fetchDeleteArticle } from './fetchDeleteArticle'

export default function ArticleItemHeader(props) {
    const { item, total, setDeleteProcessing } = props
    const token = useSelector((state) => state.reducers.logIn.token)
    const isMyArticle = useSelector((state) => state.reducers.logIn.username) === item.author.username
    const navigate = useNavigate()

    const classnameForFullArticle = classNames({
        total,
    })

    const classnameForFullArticleBtnGroup = classNames({
        articleItem__userInfo: true,
        isMyArticle,
    })

    const confirm = async () => {
        setDeleteProcessing(true);
        await fetchDeleteArticle(token, item.slug)
          .then((response) => {
            if (response.ok) {
              navigate('/');
              message.success('Article successfully deleted!');
            } else {
              throw new Error('Something wrong...');
            }
          })
          .catch(() => {
            message.error(`Click doesn't work`);
          })
    }
    
    return (
        <header className={classnameForFullArticle}>
          <div className="articleItem__info">
            <div className="articleItem__titleField">
              <Link to={`/article/${item.slug}`}>
                <h2>{item.title}</h2>
              </Link>
              <Likes item={item} total={total} />
            </div>
            <TagList tagList={item.tagList} className="articleItem__tagList" />
                <p className={classnameForFullArticle}>{item.description}</p>
          </div>
          <div className={classnameForFullArticleBtnGroup}>
            <UserIcon className="articleItem__userinfo" item={item} />
            {total ? (
              <div className="articleItem__btnGroup">
                <Popconfirm
                  title="Delete the task"
                  description="Are you sure to delete this task?"
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  {' '}
                  <Button size="large" ghost danger className="articleItem__delete delete">
                    Delete
                  </Button>
                </Popconfirm>
                <Link to={`/articles/${item.slug}/edit`} className="articleItem__edit edit" state={{ item }}>
                  <span>Edit</span>
                </Link>
              </div>
            ) : null}
          </div>
        </header>
    )
}