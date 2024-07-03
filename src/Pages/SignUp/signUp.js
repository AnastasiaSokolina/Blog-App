import { Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import FormDecorator from '../../Components/FormDecorator/formDecorator';
import FormRegistration from '../../Components/FormRegistration/formRegistration';
import { actions } from '../../Redux/slice/signUpSlice';

export default function SignUp() {
  const signUpLoading = useSelector((state) => state.reducers.signUp.loading);
  const logined = useSelector((state) => state.reducers.logIn.logined);
  const errorMessage = useSelector((state) => state.reducers.signUp.errorMessage);
  const [loading, setLoading] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(signUpLoading);
  }, [signUpLoading]);

  useEffect(() => {
    if (logined) {
      navigate('/', { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logined]);

  useEffect(
    () => () => dispatch(actions.resetError()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <section className="signUp">
      <FormDecorator title="Create new account">
        <Spin tip="Loading" size="large" spinning={loading}>
          <FormRegistration errorMessage={errorMessage} />
        </Spin>
      </FormDecorator>
    </section>
  );
}
