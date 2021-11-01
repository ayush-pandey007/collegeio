import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from '@firebase/auth';
import { auth } from '../Firebase';

const Home = () => {
  const [user] = useAuthState(auth);
  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log('signout successful');
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-7">
      <h1 className="text-xl">welcome {user.displayName}</h1>
      <button
        onClick={logOut}
        className="bg-green-400 rounded px-4 py-1 text-white"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
