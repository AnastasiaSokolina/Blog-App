import Markdown from 'markdown-to-jsx';
import './articleItemBody.scss';

export default function ArticleItemBody(props) {
  const {
    item: { body },
  } = props;
  return (
    <div className="articleItem__body">
      <Markdown>{body}</Markdown>
    </div>
  );
}
