import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './components/Home';
import AddDrinks from './components/AddDrinks';
import UpdateDrinks from './components/UpdateDrinks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:9000/drinks")
      },
      {
        path: "/addDrinks",
        element: <AddDrinks />
      },
      {
        path: "/drinks/:id",
        element: <UpdateDrinks />,
        loader: ({params}) => fetch(`http://localhost:9000/drinks/${params.id}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
