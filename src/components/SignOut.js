import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Container } from "react-bootstrap";
import { Button, Alert } from "react-bootstrap";

export default function SignOut() {
  const [error, setError] = useState();
  const { logout } = useAuth();
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
      <Container>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <div>
            {error && <Alert variant="danger">{error}</Alert>}
            <div className="w-100 text-center mt-2">
              <Button onClick={handleLogout}>Log Out</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
