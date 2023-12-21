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
        element: <ToDo></ToDo>,
      },
      {
        path: "/addtask",
        element: <AddTask></AddTask>,
      },
      {
        path: "/completed",
        element: <Completed></Completed>,
      },
      {
        path: "/ongoing",
        element: <Ongoing></Ongoing>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
