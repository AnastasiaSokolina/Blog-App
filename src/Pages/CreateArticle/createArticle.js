import { Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import FormCreateArticle from '../../Components/FormCreateArticle/formCreateArticle';
import FormDecorator from '../../Components/FormDecorator/formDecorator';
import './createArticle.scss';

export default function CreateArticle() {
  const createArticleLoading = useSelector((state) => state.reducers.createArticle.loading);
  const successRequest = useSelector((state) => state.reducers.createArticle.successRequest);
  const errorRequest = useSelector((state) => state.reducers.createArticle.errorRequest);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(createArticleLoading);
  }, [createArticleLoading]);

  return (
    <section>
      <FormDecorator className="createArticle" title="Create new article">
        <Spin tip="Loading" size="large" spinning={loading}>
          <FormCreateArticle successRequest={successRequest} errorRequest={errorRequest} />
        </Spin>
      </FormDecorator>
    </section>
  );
}
