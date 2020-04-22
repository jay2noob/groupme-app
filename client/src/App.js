import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import MyGroups from "./pages/MyGroups";
import Group from "./pages/Group";
import Events from "./pages/Events";
import MyEvents from "./pages/MyEvents";
import EditProfile from "./pages/EditProfile";
import CreateGroup from "./pages/CreateGroup";
import CreateEvent from "./pages/CreateEvent";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/profile/edit">
            <EditProfile />
          </Route>
          <Route exact path="/groups">
            <MyGroups />
          </Route>
          <Route exact path="/group/1">
            <Group />
          </Route>
          <Route exact path="/group/events/1">
            <Events />
          </Route>
          <Route exact path="/create/group">
            <CreateGroup />
          </Route>
          <Route exact path="/events">
            <MyEvents />
          </Route>
          <Route exact path="/create/event">
            <CreateEvent />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
