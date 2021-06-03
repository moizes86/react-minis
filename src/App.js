import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { PROJECTS as projects } from "./projects";

import "./App.scss";
import Container from "react-bootstrap/esm/Container";
import Welcome from "./components/welcome/welcome";

function App() {
  return (
    <div className="App">
      <Switch>
        <Container>
          <Route exact path="/" component={Welcome} /> 
          {projects.map((project, i) => (
            <Route key={`${project.name}-${i}`} path={project.url} component={project.component} />
          ))}
        </Container>
      </Switch>
    </div>
  );
}

export default App;
