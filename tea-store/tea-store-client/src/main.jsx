import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import MainLayout from './layout/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddTeas from './components/AddTeas.jsx';
import UpdateTea from './components/UpdateTea.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:4000/teas")
      },
      {
        path: "/addTeas",
        element: <AddTeas />
      },
      {
        path: "/teas/:id",
        element: <UpdateTea />,
        loader: ({params}) => fetch(`http://localhost:4000/teas/${params.id}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
