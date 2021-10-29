import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <main>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </main>
    </Router>
  );
};

export default App;
