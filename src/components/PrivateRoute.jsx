import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Redirect } from 'react-router-dom';

import { auth } from '../Firebase';

import Spinner from './Spinner';

const PrivateRoute = (props) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner className="h-5 w-5" />
      </div>
    );
  }

  if (!user) {
    return <Redirect to="/login" />;
  }

  return <Route exact {...props} />;
};

export default PrivateRoute;
