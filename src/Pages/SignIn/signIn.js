import { Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import FormDecorator from '../../Components/FormDecorator/formDecorator';
import FormSignIn from '../../Components/FormSignIn/FormSignIn';
import { actions } from '../../Redux/slice/loginSlice';

export default function SignIn() {
  const signInLoading = useSelector((state) => state.reducers.logIn.loading);
  const errorMessage = useSelector((state) => state.reducers.logIn.errorMessage);
  const logined = useSelector((state) => state.reducers.logIn.logined);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(signInLoading);
  }, [signInLoading]);

  useEffect(
    () => () => dispatch(actions.resetError()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (logined) {
      navigate('/', { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logined]);

  return (
    <section className="signIn">
      <FormDecorator title="Sign In">
        <Spin tip="Loading" size="large" spinning={loading}>
          <FormSignIn setLoading={setLoading} errorMessage={errorMessage} />
        </Spin>
      </FormDecorator>
    </section>
  );
}
