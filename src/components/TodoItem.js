import React, { useState, useEffect } from "react";
import '../all.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TodoItem = (props) => {
  const { list: todoList, currentTab } = props
  const [newList, setNewList] = useState(todoList)
  console.log('allData', todoList, currentTab)

  useEffect(() => {
    if (currentTab == 'all') {
      setNewList(todoList)
      // theList = todoList;
    } else if (currentTab == 'unfinished') {
      let theList = todoList.filter(item => item.isComplete == false);
      setNewList(theList)
    } else if (currentTab == 'finished') {
      let theList = todoList.filter(item => item.isComplete == true)
      setNewList(theList)
    };
  }, [currentTab])



  return (
    <>
      {newList.map((item) => (
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
    </>
  )
}

export default TodoItem
