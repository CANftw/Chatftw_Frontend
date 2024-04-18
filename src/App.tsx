import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import FourOFour from "./Pages/FourOFour/FourOFour";
import Login from "./Pages/Login/login";
import Signup from "./Pages/SignUp/signUp";
import Chatroom from "./Pages/Chatroom/chatRoom";
import Home from "./Pages/Home/Home";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);

  useEffect(() => {
    // Check if user is logged in by checking the existence of the access token
    const accessToken = localStorage.getItem("accessToken");
    setIsLoggedIn(!!accessToken); // Update isLoggedIn based on accessToken existence
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/home" />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login setIsLoggedIn={setIsLoggedIn} />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/chatroom",
      element: (
        <PrivateRoute />
      ),
      children: [
        {
          index: true,
          element: <Chatroom />
        }
      ]
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