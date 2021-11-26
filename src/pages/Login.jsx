import React from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

import { useHistory } from 'react-router-dom';

import { GoogleIcon } from '../assets/icons';

import loginBg from '../assets/loginBg.svg';

const Login = () => {
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
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-no-repeat"
      style={{
        // background: 'linear-gradient(rgb(48, 50, 54) 0%, rgb(31, 32, 35) 50%)',
        backgroundImage: `url(${loginBg})`,
      }}
    >
      <div className="text-white text-center">
        <h2 className="mb-9 text-xl">Login to Collegeio</h2>
        <button
          onClick={signIn}
          className="flex gap-3 border border-indigo-700 items-center justify-center text-white bg-indigo-500 px-10 py-2 rounded transition-all hover:bg-indigo-400"
        >
          {' '}
          <GoogleIcon className="h-4 w-4 flex" />{' '}
          <span className="text-base font-medium">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
