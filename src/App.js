import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import { IsUserRedirect } from './routes/Routes';
import { ProtectedRoute } from './routes/Routes';
import { useLocalContext } from './context/context';
const App = () => {
  const {loggedInMail, loggedInUser} = useLocalContext();
  return (
    <Router>
      <Switch>
      {/* <IsUserRedirect
          user={loggedInMail}
          loggedInPath="/"
          path="/login"
          exact
        >
           <Login />
        </IsUserRedirect> */}

        
        <Route path="/" exact component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component = {Dashboard} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
};

export default App;