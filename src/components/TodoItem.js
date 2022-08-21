import React, { useState, useEffect } from "react";
import '../all.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TodoItem = (props) => {
  const { list: todoList, currentTab } = props
  const [newList, setNewList] = useState(todoList)
  // const [check, setCheck] = useState('false')
  console.log('allData', todoList, currentTab)

  useEffect(() => {
    console.log('all', todoList)
    if (currentTab == 'all') {
      setNewList(todoList)
    } else if (currentTab == 'unfinished') {
      let theList = todoList.filter(item => item.isComplete == false);
      setNewList(theList)
    } else if (currentTab == 'finished') {
      let theList = todoList.filter(item => item.isComplete == true)
      setNewList(theList)
    };
  }, [currentTab, todoList])

  const handleisComplete = (index) => {
    let allList = [...todoList]
    console.log('allList', allList, index)
    console.log('allList[index].isComplete', allList[index])
    allList[index].isComplete = !allList[index].isComplete
    setNewList(allList)
  }

  return (
    <>
      {newList.map((item, index) => (
        <li key={item.id}>
          <label className="todoList_label">
            <input className="todoList_input" type="checkbox" value="true" checked={item.isComplete} onChange={() => handleisComplete(index)} />
            <span>{item.name}</span>
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
