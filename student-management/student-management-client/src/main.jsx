import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './components/Home';

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
        element: <h2>Students</h2>
      },
      {
        path: "/addStudents",
        element: <AddStudents />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
