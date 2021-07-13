import SignUp from "./SignUp";
import "../css/App.css";
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword.js";
import UpdateProfile from "./UpdateProfile";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Home}></PrivateRoute>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/forgot-password" component={ForgotPassword}></Route>
            <Route path="/update-profile" component={UpdateProfile}></Route>
          </Switch>
        </AuthProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
