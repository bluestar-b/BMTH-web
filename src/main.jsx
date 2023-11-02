import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets//index.css";


import Navbar from "./components/Navbar.jsx"
import Home from "./pages/root.jsx";
import About from "./pages/about.jsx";
import ErrorPage from './pages/error.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
