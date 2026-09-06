import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";
import Contact from "../pages/Contact/Contact";

const routes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/projects', element: <Projects /> },
    { path: '/project/:id', element: <ProjectDetails /> },
    { path: '/contact', element: <Contact /> }
]

export default routes;