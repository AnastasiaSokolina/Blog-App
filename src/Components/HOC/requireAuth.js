import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function RequireAuth({ children }) {
  const logined = useSelector((state) => state.reducers.logIn.logined);
  if (!logined) {
    return <Navigate to="/sign-in" />;
  }
  return children;
}

export default RequireAuth;
