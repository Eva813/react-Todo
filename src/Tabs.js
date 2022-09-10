import React, { useState, useEffect, useRef } from "react";
import './all.css'
import TodoList from './components/TodoList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRoutes, Outlet, Link } from "react-router-dom"
import { useAuth } from './components/Context';



const initialList = [
  {
    id: '1',
    content: 'Reading',
    completed_at: null
  },
  {
    id: '2',
    content: 'Shopping',
    completed_at: null
  },
  {
    id: '3',
    content: 'See the doctor',
    completed_at: null
  },
];

const Tabs = () => {
  const { token } = useAuth();
  const [list, setList] = useState(initialList);
  const [delList, setDelList] = useState(list);
  const [item, setItem] = useState('');
  const [currentTab, setCurrentTab] = useState('all');

  const [uncompletedNumber, setUncompletedNumber] = useState(0);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value; //assign the value of ref to the argument
    }, [value]); //this code will run when the value of 'value' changes
    return ref.current; //in the end, return the current ref value.
  }
  const prevCount = usePrevious(list)


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
        console.log('res.tod', res.todos)
        let newArray = res.todos.filter(item => item.completed_at == null)
        console.log('newArray', newArray.length)
        setUncompletedNumber(Number(newArray.length))
      })
  }

  const handleTab = (e) => {
    setCurrentTab(e.target.id);
  }

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
        console.log('prevCount', prevCount)
      })
  }

  ///每次get todo變動去renew
  useEffect(() => {

    // let newArray = list.filter(item => item.completed_at !== null)
    // setCompletedNumber(newArray.length)
    getTodo()
  }, [prevCount !== list])
  // if (prevProps.params.id !== this.props.params.id)
  useEffect(() => {
    getTodo()
    setDelList(list)

    console.log('init', delList)
    console.log('prevCount', prevCount)
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
            <TodoList list={list} currentTab={currentTab} uncompletedNumber={uncompletedNumber} setUncompletedNumber={setUncompletedNumber} />
          </div>
        </div>
      </div>

    </>
  )
}

export default Tabs;
