import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './pages/Home.jsx';
import ToDo from './pages/ToDo.jsx';
import Root from './Root.jsx';
import AddTask from './pages/AddTask.jsx';
import Completed from './pages/Completed.jsx';
import Ongoing from './pages/Ongoing.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Authprovider from './providers/AuthProvider.jsx';
import Login from './pages/Login.jsx';
import Registration from './pages/Registration.jsx';
import PrivateRoutes from './PrivateRoutes.jsx';
import Updatetask from './pages/Updatetask.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/todo",
        element: <PrivateRoutes><ToDo></ToDo></PrivateRoutes>,
      },
      {
        path: "/addtask",
        element: <PrivateRoutes><AddTask></AddTask></PrivateRoutes>,
      },
      {
        path: "/completed",
        element: <PrivateRoutes><Completed></Completed></PrivateRoutes>,
      },
      {
        path: "/ongoing",
        element: <PrivateRoutes><Ongoing></Ongoing></PrivateRoutes>,
      },
      {
        path: "/dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/updatetask/:id",
        element: <Updatetask></Updatetask>,
        loader: ({ params }) => fetch(`https://task-master-server-six.vercel.app/task/${params.id}`)
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)
