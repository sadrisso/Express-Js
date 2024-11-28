import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import MainLayout from './layout/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddMilks from './components/AddMilks.jsx';
import UpdateMilk from './components/UpdateMilk.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/milks")
      },
      {
        path: "/addMilks",
        element: <AddMilks />
      },
      {
        path: "/milks/:id",
        element: <UpdateMilk />,
        loader: ({params}) => fetch(`http://localhost:3000/milks/${params.id}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
