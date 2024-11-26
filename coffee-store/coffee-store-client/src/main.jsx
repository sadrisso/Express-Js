import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from './components/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch("http://localhost:8000/coffee")
  },
  {
    path: "addCoffee",
    element: <AddCoffee />
  },
  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee />,
    loader: ({params}) => fetch(`http://localhost:8000/coffee/${params.id}`)
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
