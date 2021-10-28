import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Redirect } from 'react-router-dom';

import { auth } from '../Firebase';

const PrivateRoute = (props) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading....</div>;
  }

  if (!user) {
    return <Redirect to="/login" />;
  }

  return <Route {...props} />;
};

export default PrivateRoute;
