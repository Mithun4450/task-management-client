import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/MainLayout/MainLayout';
import Home from './components/Home/Home';
import AuthProvider from './AuthProvider/AuthProvider';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
        <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
