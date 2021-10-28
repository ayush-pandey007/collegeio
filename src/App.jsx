import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './Firebase';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
function App() {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <main>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </main>
    </Router>
    // <div>
    //   {!user ? (
    //     <Login />
    //   ) : (
    //     <div className="App">
    //       <h1 className="text-2xl mt-48 hover:text-pink-400">Collegeio</h1>
    //     </div>
    //   )}
    // </div>
  );
}

export default App;
