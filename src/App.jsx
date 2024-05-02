//Activity on Sept 1, 2023. Chosen soluion: no separate files for different routes.
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthController from "./controller/AuthController";
import UserController from "./controller/UserController";
import { AuthProvider } from "./model/providers/authprovider";
import AuthGuard from "./components/AuthGuard";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthGuard><UserController/></AuthGuard>,
  },
  {
    path: "/login",
    element: <AuthController/>,
  }
])


function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  );
}

export default App;

/* old code below
import UserController from "./controller/UserController";

function App() {
  return <UserController/>
}

export default App;
*/
