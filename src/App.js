import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component = {Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;