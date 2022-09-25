import * as React from "react";
import { useRoutes } from "react-router-dom";
import Tabs from "../Tabs"
import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp"
import Layout from "../components/Layout"
// import { AuthContext } from "./components/Context";


let routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/tabs",
        element: <Tabs />,
        meta: {
          title: '列表'
        }
      },
      { path: "signUp", element: <SignUp />, meta: { title: '註冊' } },
      { path: "signIn", element: <SignIn />, meta: { title: '登入' } },

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

// const onRouteBefore = ({ pathname, meta }) => {
//   // 动态修改页面title
//   if (meta.title !== undefined) {
//     document.title = meta.title;
//   }
//   // 判断未登录跳转登录页
//   if (meta.needLogin) {
//     if (!Cookies.get('x-cid')) {
//       return '/login';
//     }
//   }

//   return pathname;
// };

export default routes
  // onRouteBefore,


