//import logo from './logo.svg';
//import './App.css';
import './all.css'
import { useState } from 'react';
import Tabs from './Tabs'
import Layout from './components/Layout'
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
// import { AuthContext } from "./components/Context";
import { useAuth, AuthProvider, AuthContext } from './components/Context';
import { ProtectedRoute } from './components/ProtectedRoute';

import { Routes, Route, Link, useRoutes } from "react-router-dom";
import NotFound from "./components/NotFound"
import routes from "./routes"



function App() {
  const elements = useRoutes(routes);
  // return elements
  return (
    <AuthProvider>
      {elements}
    </AuthProvider>
  );
  //item list


  // const [token, setToken] = useState(null);

  // return (

  //   <div >
  //     <AuthContext.Provider value={{ token, setToken }}>
  //       <Routes>
  //         <Route path="/" element={<Layout />}>
  //           <Route path="/" element={<SignIn />} />
  //           <Route path="/SignIn" element={<SignIn />} />
  //           <Route element={<ProtectedRoute />}>
  //             <Route path="/tabs" element={<Tabs />} />
  //           </Route>
  //           <Route path="signUp" element={<SignUp />} />
  //           <Route path="signIn" element={<SignIn />} />
  //         </Route>
  //       </Routes>
  //     </AuthContext.Provider>
  //   </div>


  // );
}

export default App;
