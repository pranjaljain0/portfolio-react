import Home from "../components/Home";
import Project from "../pages/Project";
import ProjectList from "../pages/ProjectList";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/projects",
    component: ProjectList,
  },
  {
    path: "/projects/:project_id",
    component: Project,
  },
];

export default routes;
