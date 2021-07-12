import SignUp from "./SignUp";
import { Container } from "react-bootstrap";
import "../css/App.css";
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Container className="container">
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Dashboard}></Route>
              <Route path="/signup" component={SignUp}></Route>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
