import React, { useState, useEffect } from "react";
import './all.css'
import TodoList from './components/TodoList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRoutes, Outlet, Link } from "react-router-dom"
import { useAuth } from './components/Context';

// const initialList = [
//   {
//     id: '1',
//     name: 'Reading',
//     isComplete: true,
//   },
//   {
//     id: '2',
//     name: 'Shopping',
//     isComplete: true,
//   },
//   {
//     id: '3',
//     name: 'See the doctor',
//     isComplete: false,
//   },
// ];

const initialList = [
  {
    id: '1',
    content: 'Reading',
  },
  {
    id: '2',
    content: 'Shopping',
  },
  {
    id: '3',
    content: 'See the doctor',
  },
];

const Tabs = () => {
  const { token } = useAuth();
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

  //取得todo列表
  const getTodo = () => {
    const _url = "https://todoo.5xcamp.us/todos";
    fetch(_url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token
      }
    })
      .then(res => {
        console.log('res', res)
        return res.json()
      })
      .then(res => {
        setList(res.todos)
      })
  }



  const handleTab = (e) => {

    setCurrentTab(e.target.id);
  }

  // function handleChange(e) {
  //   console.log('e,handleChange', e.target.velue)
  //   setItem(e.target.value)
  // }
  function handleAdd() {
    // add item
    const _url = "https://todoo.5xcamp.us/todos";
    fetch(_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token
      },
      body: JSON.stringify({
        "todo": {
          content: item
        }
      })
    })
      .then(res => {
        console.log('res', res)
        return res.json()
      })
      .then(res => {
        const newList = res
        // setList(item)
        getTodo()
        setList([...list, {
          content: res.content,
          id: res.id,
          completed_at: null //Response 並沒有給這項屬性，自己加上
        }])
        setItem('')
        console.log('new', list)
      })

    // const newList = [...list, { id: String(list.length + 1), name: item, isComplete: false, }]
    // console.log('list', newList)
    // setList(newList)
    // setItem('')
  }


  useEffect(() => {
    getTodo()
  }, [])


  return (
    <>
      <div className="conatiner todoListPage vhContainer">
        <div className="todoList_Content">
          <div className="inputBox">
            <input type="text" placeholder="Please input todo " onChange={(e) => setItem(e.target.value)} value={item} />
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
