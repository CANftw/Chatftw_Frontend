import React, { lazy } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";


const Login = lazy(() => import("./Pages/Login/login"));
const Signup = lazy(() => import("./Pages/SignUp/signUp"));
const Chatroom = lazy(() => import("./Pages/Chatroom/chatRoom"));
const Home = lazy(() => import("./Pages/Home/Home"));

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Navigate to="/Home" replace /> },
    {path:"/Home", element: <Home/>},
    { path: "/login", element: <Login /> },
    { path: "/signUp", element: <Signup /> },
    { path: "/chatroom", element: <Chatroom /> }
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="bottom-center" reverseOrder={true} />
    </>
  );
}

export default App;

