import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "../components/Home";
import Project from "../pages/Project"
import ProjectList from "../pages/ProjectList";

export default function Index() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/projects" component={ProjectList}>
          </Route>
          <Route path="/languages" component={languages}>
          </Route>
          <Route path="/project/:project_id" component={Project}>
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
    </Router>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
    </div>
  );
}

function languages() {
  return (
    <div>
      <h2>prog languages</h2>
    </div>
  );
}

