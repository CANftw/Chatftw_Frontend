import "./App.css";
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import FourOFour from "./Pages/FourOFour/FourOFour";
import Login from "./Pages/Login/login";
import Signup from "./Pages/SignUp/signUp";
import Chatroom from "./Pages/Chatroom/chatRoom";
import Home from "./Pages/Home/Home";

function App() {
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
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/chatroom",
      element: <Chatroom />
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

