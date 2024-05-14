import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Service from "../components/Service/Service";
import Work from "../components/Work/Work";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/service",
                element: <Service></Service>
            },
            {
                path: "/work",
                element: <Work></Work>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
        ],
    }
])

export default router;