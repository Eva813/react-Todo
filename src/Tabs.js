import React, { useState, useEffect } from "react";
import './all.css'
import TodoList from './components/TodoList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRoutes, Outlet, Link } from "react-router-dom"


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

const Tabs = () => {
  // console.log('prop', props)
  // const { list: todoList } = props

  // console.log('prop', todoList)


  const [list, setList] = useState(initialList);
  const [item, setItem] = useState('');
  const [completed, setCompleted] = useState();


  const [currentTab, setCurrentTab] = useState('all');


  useEffect(() => {
    const tab = document.querySelector('.todoList_tab');
    const aTags = tab.querySelectorAll('a');

    aTags.forEach((atag) => {
      if (atag.id == currentTab) {
        atag.classList.add('active');
      } else {
        atag.classList.remove('active');
      }
    })
  }, [currentTab])

  const handleTab = (e) => {
    setCurrentTab(e.target.id);
  }



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
    <>
      <div className="conatiner todoListPage vhContainer">
        <div className="todoList_Content">
          <div className="inputBox">
            <input type="text" placeholder="Please input todo " onChange={handleChange} value={item} />
            <a onClick={handleAdd}>
              <FontAwesomeIcon icon={['fa', 'plus']} />
            </a>
          </div>
          <div className="todoList_list">
            <ul className="todoList_tab">
              <li><a as={Link} to="/Tabs" id="all" onClick={handleTab}>全部</a></li>
              <li><a as={Link} to="/Tabs" id='unfinished' onClick={handleTab}>待完成</a></li>
              <li><a as={Link} to="/Tabs" id='finished' onClick={handleTab}>已完成</a></li>
            </ul>
            <TodoList list={list} currentTab={currentTab} />
            {/* <div className="todoList_items">

        </div> */}
          </div>
        </div>
      </div>

    </>
  )
}

export default Tabs;
