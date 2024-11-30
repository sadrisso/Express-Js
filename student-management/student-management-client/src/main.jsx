import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './components/Home';
import AuthProvider from './provider/AuthProvider';
import AddStudents from './components/AddStudents';
import Login from './components/Login';
import Students from './components/Students';

const router = createBrowserRouter([
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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
