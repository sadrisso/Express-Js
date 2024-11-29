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
