import * as React from "react";
import { useRoutes } from "react-router-dom";
import TodoList from "../components/TodoList";
import Login from "../components/Login";

function App() {
  let element = useRoutes([
    //     {
    //       path: "/",
    //       element: <Dashboard />,
    //       children: [
    //         {
    //           path: "messages",
    //           element: <DashboardMessages />,
    //         },
    //         { path: "tasks", element: <DashboardTasks /> },
    //       ],
    //     },
    //     { path: "team", element: <AboutPage /> },
    {
      path: "/",
      element: <TodoList />,
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);

  return element;
}
