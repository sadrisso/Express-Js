import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../layout/MainLayout';
import Home from '../components/Home';
import Students from '../components/Students';
import AddStudents from '../components/AddStudents';
import Login from '../components/Login';
import UpdateStudent from "../components/UpdateStudent";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/students",
                element: <Students />,
                loader: () => fetch("http://localhost:2000/students")
            },
            {
                path: "/students/:id",
                element: <UpdateStudent />,
                loader: ({params}) => fetch(`http://localhost:2000/students/${params.id}`)
            },
            {
                path: "/addStudents",
                element: <AddStudents />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    },
]);