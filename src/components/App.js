import SignUp from "./SignUp";
import { Container } from "react-bootstrap";
import "../css/App.css";
import { AuthProvider } from "../context/AuthContext";

function App() {
  return (
    <AuthProvider>
      {" "}
      <Container className="container">
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <SignUp></SignUp>
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
