import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import About from './pages/About.jsx';
import Service from './pages/Service.jsx';
import Contact from './pages/Contact.jsx';
import SingleBlgo from './pages/SingleBlgo.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/service',
          element: <Service></Service>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/blogs/:id',
          element: <SingleBlgo></SingleBlgo>,
          loader: ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
        }
      ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
