import * as React from "react";
import { useRoutes } from "react-router-dom";
import Tabs from "../Tabs"
import Login from "../components/Login"
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
      { path: "login", element: <Login /> },
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

