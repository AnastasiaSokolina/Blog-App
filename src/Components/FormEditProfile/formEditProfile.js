import { Alert, Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { editProfileFetch } from '../../Redux/fetch/editProfileFetch';
import LabelEditProfileAvatar from './Label/labelEditProfileAvatar';
import LabelEditProfileEmail from './Label/labelEditProfileEmail';
import LabelEditProfilePassword from './Label/labelEditProfilePassword';
import LabelEditProfileUsername from './Label/labelEditProfileUsername';

export default function FormEditProfile(props) {
  const { errorsMessage, successMessage, token } = props;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(editProfileFetch({ ...data, token }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {successMessage ? <Alert message="Profile data successfully updated" type="success" /> : null}
      {errorsMessage ? <Alert message={errorsMessage} type="error" /> : null}
      <LabelEditProfileUsername register={register} errors={errors} />
      <LabelEditProfileEmail register={register} errors={errors} />
      <LabelEditProfilePassword register={register} errors={errors} />
      <LabelEditProfileAvatar register={register} errors={errors} />
      <Button type="primary" htmlType="submit" className="decorator__Btn">
        Save
      </Button>
    </form>
  );
}
