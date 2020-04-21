import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Group from './pages/Group'
import Events from './pages/Events'
import EditProfile from './pages/EditProfile'
import CreateGroup from './pages/CreateGroup'
import CreateEvent from './pages/CreateEvent'
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
        <Route exact path='/profile/edit'>
          <EditProfile />
        </Route>
        <Route exact path='/group'>
          <Group />
        </Route>
        <Route exact path='/create/group'>
          <CreateGroup />
        </Route>
        <Route exact path='/events'>
          <Events />
        </Route>
        <Route exact path='/create/event'>
          <CreateEvent />
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
