import React, { useEffect, useState } from 'react';
import { Route, useLocation, useHistory } from 'react-router-dom';

const PrivateRoute = ({ path, component }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const checkIsAuthenticated = () => {
    if (localStorage.getItem('isAuthenticated') === 'true') {
      setIsAuthenticated(true);
    } else {
      history.push('/login');
    }
  };

  useEffect(() => {
    checkIsAuthenticated();
  }, [location.pathname]);

  return isAuthenticated ? <Route path={path} component={component} /> : <></>;
};

export default PrivateRoute;
