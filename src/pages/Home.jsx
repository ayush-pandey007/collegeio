import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../Firebase';

const Home = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <h1>welcome {user.displayName}</h1>
    </div>
  );
};

export default Home;
