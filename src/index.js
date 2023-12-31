import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
// import App from './App';
// routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// routes
import Index from './routes';
import Root from './routes/root';
import Errorpage from './error-page';
import Home from './routes/Home';
import About from './routes/about';
import Contact from './routes/contact';
import Products from './routes/Products';
import Login from './routes/Login';

// contexts
import AuthenticationProvider from './context/AuthenticationContext';

const router = createBrowserRouter([
  {
    path: "/",
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
        path: "products",
        element: <Products/>
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
  <AuthenticationProvider>
    <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
  </AuthenticationProvider>
);
