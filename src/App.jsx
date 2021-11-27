import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <main className="h-screen">
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/:id" component={Home} />
        <Route exact path="/login" component={Login} />
      </main>
      <Toaster position="top-right" />
    </Router>
  );
};

export default App;
