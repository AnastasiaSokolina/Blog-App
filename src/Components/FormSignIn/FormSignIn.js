import { Button } from 'antd'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { loginFetch } from '../../Redux/fetch/loginFetch'
import LabelSignInEmail from './Label/labelSignInEmail'
import LabelSignInPassword from './Label/labelSignInPassword'

export default function FormSignIn(props) {
    const { errorMessage } = props
    const {
        register,
        formState: { errors },
        handleSubmit,
        } = useForm({
        mode: 'onChange',
    })
    const dispatch = useDispatch();
    const onSubmit = (data) => {
    dispatch(loginFetch(data));
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <LabelSignInEmail register={register} errors={errors} />
          <LabelSignInPassword register={register} errors={errors} />
          {errorMessage ? <p className="errorMessage">{errorMessage}</p> : null}
          <Button type="primary" htmlType="submit" className="decorator__Btn">
            Login
          </Button>
          <span className="decorator__info">
            Don't have an account? <Link to="/sign-up">Sign up</Link>
          </span>
        </form>
      )
}