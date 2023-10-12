import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// routes
import Index from './routes';
import Root from './routes/root';
import Errorpage from './error-page';
import Home from './routes/Home';
import About from './routes/about';
import Contact from './routes/contact';
import Personnel from './routes/Personnel';
import Login from './routes/Login';

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App/>
    element: <Root/>,
    errorElement: <Errorpage/>,
    children: [{
      index: true, element: <Index/>,
    },
      {
        path: "home",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      
      {
        path: "contact",
        element: <Contact/>
      },

      {
        path: "personnel",
        element: <Personnel/>
      },

      {
        path: "login",
        element: <Login/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);
