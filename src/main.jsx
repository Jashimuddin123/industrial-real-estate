import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
       path:"/",
       element:<Home></Home>,
       loader: () => fetch('data.json')
      },
     {
      path:"/login",
      element:<Login></Login>
     },
     {
      path:"/register",
      element:<Register></Register>
     }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <FirebaseProvider>
  <RouterProvider router={router} />
  </FirebaseProvider>
  </React.StrictMode>,
)
