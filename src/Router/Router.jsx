import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Register from "../Pages/User/Register/Register";
import Login from "../Pages/User/Login/Login";
import Recipes from "../Pages/Recipes/Recipes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("http://localhost:3000/chefs")
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: '/recipes/:id',
                element: <Recipes></Recipes>,
                loader: ({ params }) => fetch(`http://localhost:3000/chefs/${params.id}`)
            }
        ]
    },
]);

export default router;