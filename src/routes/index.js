import * as React from "react";
import { useRoutes } from "react-router-dom";
import Tabs from "../Tabs"
import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp"
import Layout from "../components/Layout"


let routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/tabs",
        element: <Tabs />,
      },
      { path: "signUp", element: <SignUp /> },
      { path: "signIn", element: <SignIn /> },

    ],
  },
  // { path: "team", element: <AboutPage /> },

  // {
  //   path: "/todoList",
  //   element: <TodoList />,
  // },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
];

export default routes;

