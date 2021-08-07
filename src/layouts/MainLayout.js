import React, { useEffect, useState } from 'react';
import Navbar from '../components/atoms/Navbar';
import Button from '../components/atoms/Button';
import Div from '../components/atoms/Div';
import Typography from '../components/molecules/Typography';
import { Link, useHistory, useLocation } from 'react-router-dom';

const MainLayout = ({ title, children }) => {
  const history = useHistory();
  const location = useLocation();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkIsAuthenticated = () => {
    if (localStorage.getItem('isAuthenticated') === 'true') {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  const logout = () => {
    localStorage.setItem('isAuthenticated', '');
    history.push('/login');
  };

  useEffect(() => {
    checkIsAuthenticated();
  }, [location.pathname]);

  return (
    <Div>
      <Navbar variant="secondary" mode="dark">
        <Typography component="h1">{title}</Typography>
        {!isAuthenticated && <Link to="/login">Login</Link>}
        {isAuthenticated && (
          <>
            <Link to="/">Home</Link>
            <Link to="/about-me">About me</Link>
            <Link to="/contact">Contact</Link>
            <Button onClick={logout}>Logout</Button>
          </>
        )}
      </Navbar>
      <Div>{children}</Div>
    </Div>
  );
};

export default MainLayout;
