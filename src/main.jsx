import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root';
import Home from './page/Home';
import AuthProvider from './route/AuthProvider';
import LogIn from './page/LogIn';
import SignUp from './page/Signup';
import Product from './page/Product';
import Private from './route/Private';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<LogIn></LogIn>
      },
      {
        path:'/register',
        element:<SignUp></SignUp>
      },
      {
        path:'/products',
        element:<Private><Product></Product></Private>,


      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
)
