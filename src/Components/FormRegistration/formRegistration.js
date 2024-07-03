import { Button, Divider } from 'antd';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signUpFetch } from '../../Redux/fetch/signUpFetch';
import LabelRegCheckbox from './Label/labelRegCheckbox';
import LabelRegEmail from './Label/labelRegEmail';
import LabelRegPassword from './Label/labelRegPassword';
import LabelRepeatPassword from './Label/labelRepeatPassword';
import LabelRegUsername from './Label/labelRegUsername';

export default function FormRegistration(props) {
  const { errorMessage } = props;
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(signUpFetch(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LabelRegUsername register={register} errors={errors} />
      <LabelRegEmail register={register} errors={errors} />
      <LabelRegPassword register={register} errors={errors} />
      <LabelRepeatPassword register={register} errors={errors} getValues={getValues} />
      {errorMessage ? <p className="errorMessage">{errorMessage}</p> : null}
      <Divider />
      <LabelRegCheckbox register={register} errors={errors} getValues={getValues} />
      <Button type="primary" htmlType="submit" className="decorator__Btn">
        Create
      </Button>
      <span className="decorator__info">
        Already have an account?
        {' '}
        <Link to="/sign-in">Sign in</Link>
      </span>
    </form>
  );
}
