import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from '/src/App';
import Users from './components/Users';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <Users />,
    loader: () => fetch("http://localhost:8000/users")
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
