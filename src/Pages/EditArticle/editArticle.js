import { Spin } from 'antd'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'

import FormCreateArticle from '../../Components/FormCreateArticle/formCreateArticle'
import FormDecorator from '../../Components/FormDecorator/formDecorator'

export default function EditArticle() {
    const FormEditArticle = FormCreateArticle
    const params = useParams()
    const editArticleLoading = useSelector((state) => state.reducers.editArticle.loading)
    const successRequest = useSelector((state) => state.reducers.editArticle.successRequest)
    const errorRequest = useSelector((state) => state.reducers.editArticle.errorRequest)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(editArticleLoading)
      }, [editArticleLoading])

    const {
        state: { item },
    } = useLocation()

    return (
        <section className="editArticle">
          <FormDecorator className="createArticle" title="Edit article">
            <Spin tip="Loading" size="large" spinning={loading}>
              <FormEditArticle item={item} params={params} successRequest={successRequest} errorRequest={errorRequest} />
            </Spin>
          </FormDecorator>
        </section>
      );
    
}