import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './components/Home';
import AddDrinks from './components/AddDrinks';
import UpdateDrinks from './components/UpdateDrinks';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AuthProvider from './provider/AuthProvider';
import Users from './components/Users';

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
        loader: ({ params }) => fetch(`http://localhost:9000/drinks/${params.id}`)
      },
      {
        path: "/signin",
        element: <SignIn />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("http://localhost:9000/users")
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
