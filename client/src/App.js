import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
//import Alert from "./layout/Alert";
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
import PrivateRoute from "./components/routing/PrivateRoute";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

//import "./App.css";

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
          <Route exact path="/" component={Welcome} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/profile/edit" component={EditProfile} />
          <PrivateRoute exact path="/groups" component={MyGroups} />
          <PrivateRoute exact path="/group/:id" component={Group} />
          <PrivateRoute exact path="/group/events/1" component={Events} />
          <PrivateRoute exact path="/create/group" component={CreateGroup} />
          <PrivateRoute exact path="/events" component={MyEvents} />
          <PrivateRoute exact path="/create/event" component={CreateEvent} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
