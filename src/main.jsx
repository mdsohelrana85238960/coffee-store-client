import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import App from "./App";
import AddCoffee from "./components/AddCoffee";
import UpdateCoffee from "./components/UpdateCoffee";
import SingUp from "./components/firebase/singUp/SingUp";
import SingIn from "./components/firebase/singUp/SingIn";
import AuthProvider from "./provider/AuthProvider";
import Users from "./components/firebase/singUp/Users";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('https://coffee-store-server-fxx5ozo4t-my-team-88e02784.vercel.app/coffee')
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`https://coffee-store-server-fxx5ozo4t-my-team-88e02784.vercel.app/coffee/${params.id}`)
  },
  {
    path: "/signup",
    element: <SingUp></SingUp>
  },
  {
    path: "/signin",
    element: <SingIn></SingIn>
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch('https://coffee-store-server-fxx5ozo4t-my-team-88e02784.vercel.app/user')
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>
);
