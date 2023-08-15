import { useState, useMemo } from 'react';
import axios from 'axios';

import routes from '../routes';

import AuthContext from '../contexts/AuthContext';

const AuthProvider = ({ children }) => {
  const localUser = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(localUser);

  const context = useMemo(() => {
    const loggedIn = Boolean(user);

    const username = user ? user.username : null;

    const token = user ? user.token : null;

    const headers = loggedIn ? { Authorization: `Bearer ${token}` } : {};

    const logIn = async (userData) => {
      const res = await axios.post(routes.loginApi(), userData);
      const newUser = res.data;
      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
    };

    const logOut = () => {
      localStorage.removeItem('user');
      setUser(null);
    };

    const signUp = async (userData) => {
      const res = await axios.post(routes.signupApi(), userData);
      const newUser = res.data;
      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
    };

    return {
      loggedIn,
      username,
      token,
      headers,
      logIn,
      logOut,
      signUp,
    };
  }, [user]);

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
