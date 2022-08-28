//import logo from './logo.svg';
//import './App.css';
import './all.css'
import { useState, useEffect } from 'react';
import Tabs from './Tabs'
import Layout from './components/Layout'
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import { AuthContext } from "./components/Context";
import { useAuth } from './components/Context';
import { ProtectedRoute } from './components/ProtectedRoute';


// import TabBar from './components/TabBar'
// import ListData from './components/ListData'
import { Routes, Route, Link, useRoutes } from "react-router-dom";
import NotFound from "./components/NotFound"
import routes from "./routes"



// App.js
// function Home() {
//   return (
//     <>
//       <main>
//         <h2>Welcome to the homepage!</h2>
//         <p>You can do this, I believe in you.</p>
//       </main>
//       <nav>
//         <Link to="/about">About</Link>
//       </nav>
//     </>
//   );
// }

// function About() {
//   return (
//     <>
//       <main>
//         <h2>Who are we?</h2>
//         <p>
//           That feels like an existential question, don't you
//           think?
//         </p>
//       </main>
//       <nav>
//         <Link to="/">Home</Link>
//       </nav>
//     </>
//   );
// }




const initialList = [
  {
    id: '1',
    name: 'Reading',
    isComplete: true,
  },
  {
    id: '2',
    name: 'Shopping',
    isComplete: true,
  },
  {
    id: '3',
    name: 'See the doctor',
    isComplete: false,
  },
];

function App() {
  // const elements = useRoutes(routes);
  // return elements
  //item list


  const [token, setToken] = useState(null);

  return (

    <div >
      <AuthContext.Provider value={{ token, setToken }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/SignIn" element={<SignIn />} />
            {/* <Route element={<ProtectedRoute />}> */}
            <Route path="/tabs" element={<Tabs />} />
            {/* </Route> */}
            <Route path="signUp" element={<SignUp />} />
            <Route path="signIn" element={<SignIn />} />
          </Route>
        </Routes>
      </AuthContext.Provider>
    </div>

    // <div id="todoListPage" className="bg-half">


    //   {/* <div className="conatiner todoListPage vhContainer">
    //     <div className="todoList_Content"> */}
    //   {/* <div className="inputBox">
    //         <input type="text" placeholder="Please input todo " onChange={handleChange} value={item} />
    //         <a onClick={handleAdd}>
    //           <FontAwesomeIcon icon={['fa', 'plus']} />
    //         </a>
    //       </div> */}
    //   {/* <Tabs list={list} /> */}
    //   {/* <TabBar
    //         dataCount={data.length}
    //         setClickPage={setClickPage}
    //       // totalPages={totalPages}
    //       /> */}

    //   {/* <h1>Welcome to React Router!</h1> */}
    //   {/* <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route path="tabs" element={<Tabs list={list} />} />
    //       <Route path="about" element={<About />} />
    //     </Route>

    //   </Routes> */}


    //   {/* <ListData data={initialList} /> */}
    //   <div className="todoList_items">

    //     {/* 項目列表 */}

    //   </div>
    //   {/* </div>
    //   </div> */}
    // </div>

  );
}

export default App;
