import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import useAuth from "../../providers/AuthProvider/useAuth";

function Header() {
  const { isAuthenticated, user, handleSignOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    handleSignOut();
    navigate("/");
  };

  return (
    <Navbar style={{ backgroundColor: "lightgray" }}>
      <Container>
        <Navbar.Brand className="nav-brand" as={Link} to="/">
          Dominos
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="top-nav" />
        <Navbar.Collapse id="top-nav">
          <Nav className="ms-auto nav-links">
            {isAuthenticated ? (
              <>
                <Nav.Link as={Link} to="/">
                  Welcome, {user.userName}
                  <img className="avatarProfilePic" src={user.selectedAvatar} />
                </Nav.Link>
                <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
                <Nav.Link as={Link} to="/communitypage"></Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Sign Up
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
