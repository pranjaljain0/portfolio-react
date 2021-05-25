import loadable from "@loadable/component";
const Home = loadable(() => import("../components/Home"));
const Project = loadable(() => import("../pages/Project"));
const ProjectList = loadable(() => import("../pages/ProjectList"));

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
