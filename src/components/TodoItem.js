import React, { useState, useEffect } from "react";
import '../all.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuth } from '../components/Context';

const TodoItem = (props) => {
  const { token } = useAuth();
  const { list: todoList, currentTab } = props
  const [newList, setNewList] = useState(todoList)
  console.log('allData', todoList, currentTab)

  useEffect(() => {
    console.log('all', todoList)
    if (currentTab == 'all') {
      setNewList(todoList)
    } else if (currentTab == 'unfinished') {
      let theList = todoList.filter(item => item.completed_at === null || item.completed_at === false);
      setNewList(theList)
    } else if (currentTab == 'finished') {
      let theList = todoList.filter(item => item.completed_at !== null)
      setNewList(theList)
    };
  }, [currentTab, todoList])

  const handleisComplete = (index, id) => {

    // console.log('allList', allList, index)
    // console.log('allList[index].isComplete', allList[index])
    // console.log('allList[index].completed_at == null', allList[index].completed_at === null)
    // if (allList[index].completed_at === null) allList[index].completed_at = true
    // else allList[index].completed_at = !allList[index].completed_at
    // setNewList(allList)

    console.log('iii', index, id)
    const _url = `https://todoo.5xcamp.us/todos/${id}/toggle`;
    fetch(_url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token
      }
    })
      .then(res => {
        console.log('reshandleisComplete', res)
        return res.json()
      })
      .then(res => {

        let allList = [...todoList]
        console.log('res.completed_at', res.completed_at)
        allList[index].completed_at = res.completed_at
        setNewList(allList)
        console.log('new', newList)
      })

  }
  //製作刪除
  // const handleDelete = (id)=>{

  // }

  return (
    <>
      {newList.map((item, index, id) => (
        <li key={item.id}>
          <label className="todoList_label">
            <input className="todoList_input" type="checkbox" value="true" checked={item.completed_at !== null ? true : false} onChange={() => handleisComplete(index, item.id)} />
            <span>{item.content}</span>
          </label>
          <a href="#">
            <FontAwesomeIcon icon={['fa', 'times']} />
          </a>
        </li>
      ))}
    </>
  )
}

export default TodoItem
