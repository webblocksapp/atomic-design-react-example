import React, { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import Div from '../components/atoms/Div';
import Button from '../components/atoms/Button';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const location = useLocation();

  const loginWithFirebase = () => {
    localStorage.setItem('isAuthenticated', 'true');
    history.push('/');
  };

  const checkIsAuthenticated = () => {
    if (localStorage.getItem('isAuthenticated') === 'true') {
      history.push('/');
    }
  };

  useEffect(() => {
    checkIsAuthenticated();
  }, [location.pathname]);

  return (
    <MainLayout title="Login">
      <Div>
        <Button onClick={loginWithFirebase}>LOGIN</Button>
      </Div>
    </MainLayout>
  );
};

export default Login;
