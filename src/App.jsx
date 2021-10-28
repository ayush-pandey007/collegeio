import './App.css';
import Login from './components/Login';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './Firebase';
function App() {
  const [user] = useAuthState(auth);
  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <h1 className="text-2xl mt-48 hover:text-pink-400">Collegeio</h1>
        </div>
      )}
    </div>
  );
}

export default App;
