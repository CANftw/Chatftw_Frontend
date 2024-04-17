import "./App.css";
import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import FourOFour from "./Pages/FourOFour/FourOFour";
import Login from "./Pages/Login/login";
import Signup from "./Pages/SignUp/signUp";
import Chatroom from "./Pages/Chatroom/chatRoom";
import Home from "./Pages/Home/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in by checking the existence of the refresh token
    const data = localStorage.getItem('data');
    const parsedData = data ? JSON.parse(data) : null;
    const refreshToken = parsedData?.refreshToken;
    setIsLoggedIn(!!refreshToken);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/home" />
    },
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login setIsLoggedIn={setIsLoggedIn} />
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/chatroom",
      element: isLoggedIn ? <Chatroom /> : <Navigate to="*" />
    },
    {
      path: "*",
element: <FourOFour />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="bottom-center" reverseOrder={true} />
    </>
  );
}

export default App;