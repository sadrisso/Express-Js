import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import { RouterProvider, } from "react-router-dom";
import AuthProvider from './provider/AuthProvider';
import { router } from './Router/Router';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
