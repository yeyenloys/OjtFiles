import { Navigate } from "react-router-dom";
import { Login, Register } from "../components";

export const publicRoutes = [
  {
    path: "login",
    element: <Login />,
  },

  {
    path: "*",
    element: <Navigate replace to="/login" />,
  },

  {
    path: "register",
    element: <Register />,
  },
];
