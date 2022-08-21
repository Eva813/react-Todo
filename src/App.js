//import logo from './logo.svg';
//import './App.css';
import './all.css'
import { useState, useEffect } from 'react';
import Tabs from './Tabs'
import Layout from './components/Layout'
// import TabBar from './components/TabBar'
// import ListData from './components/ListData'
import { Routes, Route, Link, useRoutes } from "react-router-dom";
import NotFound from "./components/NotFound"
import routes from "./routes"



// App.js
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}




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
  const elements = useRoutes(routes);
  return elements
  //item list

  const [list, setList] = useState(initialList);
  const [item, setItem] = useState('');
  const [completed, setCompleted] = useState();

  function handleChange(e) {
    setItem(e.target.value)
  }
  function handleAdd() {
    // add item
    const newList = [...list, { id: String(list.length + 1), name: item, isComplete: false, }]
    console.log('list', newList)
    setList(newList)
    setItem('')
  }



  return (

    <div id="todoListPage" className="bg-half">


      {/* <div className="conatiner todoListPage vhContainer">
        <div className="todoList_Content"> */}
      {/* <div className="inputBox">
            <input type="text" placeholder="Please input todo " onChange={handleChange} value={item} />
            <a onClick={handleAdd}>
              <FontAwesomeIcon icon={['fa', 'plus']} />
            </a>
          </div> */}
      {/* <Tabs list={list} /> */}
      {/* <TabBar
            dataCount={data.length}
            setClickPage={setClickPage}
          // totalPages={totalPages}
          /> */}

      {/* <h1>Welcome to React Router!</h1> */}
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="tabs" element={<Tabs list={list} />} />
          <Route path="about" element={<About />} />
        </Route>
      
      </Routes> */}


      {/* <ListData data={initialList} /> */}
      <div className="todoList_items">

        {/* 項目列表 */}

      </div>
      {/* </div>
      </div> */}
    </div>

  );
}

export default App;
