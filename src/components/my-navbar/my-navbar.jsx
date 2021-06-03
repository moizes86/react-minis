import React from "react";
import {PROJECTS as projects} from "../../projects";
import { useHistory } from "react-router-dom";

// STYLES
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import './my-navbar.scss';

const MyNavbar = () => {
  let history = useHistory();

  return (
    <Navbar bg="dark" expand="lg" className="mb-5">
      <Container>
        <Navbar.Brand className="text-light mr-3" onClick={() => history.push("/")}>
            React Minis
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {projects.map((project, i) => (
              <Nav.Link onClick={() => history.push(project.url)} className="text-light">
                {project.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
