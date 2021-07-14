import React, { useState } from "react";
import { Button, Alert, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import NavigationBar from "./NavigationBar";

export default function Dashboard() {
  const [error, setError] = useState();
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div>
      <NavigationBar></NavigationBar>
      {/* <Container>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <div>
            {" "}
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email: {currentUser.email}</strong>
            <Link to="/update-profile" className="btn btn-primary w-100">
              Update profile
            </Link>
            <div className="w-100 text-center mt-2">
              <Button onClick={handleLogout}>Log Out</Button>
            </div>
          </div>
        </div>
      </Container> */}
    </div>
  );
}
