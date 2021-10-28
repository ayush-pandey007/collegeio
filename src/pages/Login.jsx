import React from 'react';
import { auth, provider } from '../Firebase';
import { signInWithPopup } from 'firebase/auth';

import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();

  const signIn = async (e) => {
    try {
      await signInWithPopup(auth, provider);
      history.push('/');
    } catch (err) {
      throw new Error(err.message);
    }
  };
  return (
    <div>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
}

export default Login;
