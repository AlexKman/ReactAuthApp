import SignUp from "./SignUp";
import { Container } from "react-bootstrap";
import "../css/App.css";
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword.js";

function App() {
  return (
    <Container className="container">
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard}></PrivateRoute>
              <Route path="/signup" component={SignUp}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/forgot-password" component={ForgotPassword}></Route>
              <Route path="/update-profile" component={ForgotPassword}></Route>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
