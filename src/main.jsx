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
import PreviousTasks from './components/PreviousTasks/PreviousTasks';
import TaskManager from './components/TaskManager/TaskManager';
import CreateTask from './components/CreateTask/CreateTask';

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
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "createTask",
        element: <CreateTask></CreateTask>
      },
      {
        path: "previousTasks",
        element: <PreviousTasks></PreviousTasks>
      },
      {
        path: "taskManager",
        element: <TaskManager></TaskManager>
      }

      


          
      

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
        <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
