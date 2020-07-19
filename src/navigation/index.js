import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Project from "../pages/Project";
import ProjectList from "../pages/ProjectList";

export default function Index() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects" component={ProjectList}></Route>
        <Route path="/project/:project_id" component={Project}></Route>
      </Switch>
    </Router>
  );
}
