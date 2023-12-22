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
import Dashboard from './components/MainLayout/Dashboard';
import CreateTask from './components/CreateTask/CreateTask';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AllTasks from './AllTasks/AllTasks';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const queryClient = new QueryClient();

const router = createBrowserRouter([

  // mainLayout
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


  // dashboard
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "createTask",
        element: <CreateTask></CreateTask>
      },
      {
        path: "allTasks",
        element: <AllTasks></AllTasks>
      },
      

      


          
      

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
     
  </React.StrictMode>,
)
