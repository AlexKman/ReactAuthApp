import SignUp from "./SignUp";
import { Container } from "react-bootstrap";
import "../css/App.css";

function App() {
  return (
    <Container className="container">
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <SignUp></SignUp>
      </div>
    </Container>
  );
}

export default App;
