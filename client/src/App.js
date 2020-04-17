import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Groups from './pages/Groups'
import Events from './pages/Events'
import EditProfile from './pages/EditProfile'
import Create from './pages/Create'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Welcome />
        </Route>
        <Route exact path='/dashboard'>
          <Dashboard />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route exact path='/edit-profile'>
          <EditProfile />
        </Route>
        <Route exact path='/create'>
          <Create />
        </Route>
        <Route exact path='/groups'>
          <Groups />
        </Route>
        <Route exact path='/events'>
          <Events />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/signup'>
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
