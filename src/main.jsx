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

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>DASHBOARD PAGE</div>,
    errorElement: <ErrorPage/>
  },

  {
    path:"/loginPage",
    element: <LoginPage />
  },

  {
    path:"/registerPage",
    element:<RegisterPage/>
  }
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
