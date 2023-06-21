import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RegisterPage from './pages/register.jsx';
import LoginPage from './pages/login.jsx';
import ErrorPage from './pages/error.jsx';
import ProductPage from './pages/products.jsx';
import Modal from './pages/modal.jsx';
import Counter from './belajar/LifeCycle/Counter/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },

  {
    path:"/loginPage",
    element: <LoginPage />
  },

  {
    path:"/registerPage",
    element:<RegisterPage/>
  },
  {
    path:"/products",
    element:<ProductPage/>
  },
  {
    path:"/modal",
    element:<Modal/>
  },
  
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     {/* Komponen App di render */}
//     <App />
//   </React.StrictMode>,
// )
