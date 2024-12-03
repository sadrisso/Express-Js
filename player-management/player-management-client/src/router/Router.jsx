
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home";
import PopularTeams from "../components/PopularTeams";
import Register from "../components/Register";
import Login from "../components/Login";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import Users from "../pages/Users";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                children: [
                    {
                        path: "/",
                        element: <PopularTeams />
                    }
                ]
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile /></PrivateRoute>
            },
            {
                path: "/users",
                element: <PrivateRoute><Users /></PrivateRoute>,
                loader: () => fetch("http://localhost:4000/users")
            }
        ]
    }
])