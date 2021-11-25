import { signOut } from '@firebase/auth';
import { auth } from '../Firebase';
import toast from 'react-hot-toast';

const useLogout = () => {
  return () => {
    signOut(auth)
      .then(() => {
        toast.success('Logged out sucessfully');
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  };
};

export default useLogout;
