//import logo from './logo.svg';
//import './App.css';
import './all.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react';
import Tabs from './Tabs'
import TabBar from './components/TabBar'
import ListData from './components/ListData'

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

  //item list

  const [list, setList] = useState(initialList);
  const [item, setItem] = useState('');
  function handleChange(e) {
    setItem(e.target.value)
  }
  function handleAdd() {
    // add item
    const newList = [...list, { id: String(list.length + 1), name: item }]
    console.log('list', newList)
    setList(newList)
    setItem('')
  }



  return (

    <div id="todoListPage" className="bg-half">

      <h1><a href="#">ONLINE TODO LIST</a></h1>
      <div className="conatiner todoListPage vhContainer">
        <div className="todoList_Content">
          <div className="inputBox">
            <input type="text" placeholder="Please input todo " onChange={handleChange} value={item} />
            <a onClick={handleAdd}>
              <FontAwesomeIcon icon={['fa', 'plus']} />
            </a>
          </div>
          {/* <Tabs /> */}
          {/* <TabBar
            dataCount={data.length}
            setClickPage={setClickPage}
          // totalPages={totalPages}
          /> */}

          <ListData data={initialList} />
          <div className="todoList_items">

            {/* 項目列表 */}
            <ul className="todoList_item">
              {list.map((item) => (
                <li key={item.id}>
                  <label className="todoList_label">
                    <input className="todoList_input" type="checkbox" value="true" />
                    <span>{item.name}</span>
                  </label>
                  <a href="#">
                    <FontAwesomeIcon icon={['fa', 'times']} />
                  </a>
                </li>
              ))}
              {/* <li>
                <label className="todoList_label">
                  <input className="todoList_input" type="checkbox" value="true" />
                  <span>把冰箱發霉的檸檬拿去丟</span>
                </label>
                <a href="#">
                  <FontAwesomeIcon icon={['fa', 'times']} />
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
