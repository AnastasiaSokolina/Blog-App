import { Alert, Button } from 'antd'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import uniqid from 'uniqid' 

import { actions as createArticleActions } from '../../Redux/slice/createArticleSlice'
import { createArticleFetch } from '../../Redux/fetch/createArticleFetch'
import { actions as editArticleActions } from '../../Redux/slice/editArticleSlice'
import { editArticleFetch } from '../../Redux/fetch/editArticleFetch'
import TagField from '../TagField/tagField'
import LabelCreateArticleText from './Label/LabelCreateArticleText'
import LabelCreateArticleTitle from './Label/LabelCreateArticleTitle'
import LabelCreatorArticleShortDescription from './Label/LabelCreatorArticleShortDescription'

import { useNavigate } from 'react-router-dom'

export default function FormCreateArticle(props) {
    const { item, params, successRequest, errorRequest } = props
    const token = useSelector((state) => state.reducers.logIn.token)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {
        register,
        formState: { errors },
        handleSubmit,
        control,
    } = useForm({
        mode: 'onChange',
        defaultValues: {
          tags: item?.tagList.map((el) => ({ id: uniqid(), item: el })),
        },
    })

    const onSubmit = (data) => {
        if (params) {
          dispatch(editArticleFetch({ ...data, token, params }));
        } else {
          dispatch(createArticleFetch({ ...data, token }));
        }
    }

    useEffect(() => {
      if (successRequest && !params) {
        navigate('/')
        dispatch(createArticleActions.resetSuccessRequest());
      }
    }, [successRequest, params]);

    useEffect(() => {
      if (successRequest) {
        dispatch(editArticleActions.setSuccessRequest());
      }
      return () => dispatch(editArticleActions.resetSuccessRequest());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
      if (successRequest) {
        dispatch(createArticleActions.setSuccessRequest());
      }
      return () => dispatch(createArticleActions.resetSuccessRequest());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          {successRequest ? <Alert message="Success operation" type="success" /> : null}
          {errorRequest ? <Alert message="Some error was found" type="error" /> : null}
          <LabelCreateArticleTitle register={register} errors={errors} item={item} />
          <LabelCreatorArticleShortDescription register={register} errors={errors} item={item} />
          <LabelCreateArticleText register={register} errors={errors} item={item} />
          <TagField register={register} errors={errors} control={control} item={item} /> 
          <Button type="primary" htmlType="submit" className="decorator__Btn">
            Send
          </Button>
        </form>
      )
}