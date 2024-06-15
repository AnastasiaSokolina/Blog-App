import ArticleItemHeader from '../ArticleItemHeader/articleItemHeader'
import './articleItem.scss'

export default function ArticleItem(props) {
    const { item } = props
    return (
        <li className="articlesList__article articleItem">
            <ArticleItemHeader item={item} />
        </li>
  )
}