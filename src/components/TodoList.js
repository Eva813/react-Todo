import React from "react";
import '../all.css'
import TodoItem from "../components/TodoItem"

const TodoList = (props) => {
  const { list, currentTab, completedNumber } = props
  return (
    <>
      <div className="todoList_items" >
        <ul className="todoList_item">
          <TodoItem list={list} currentTab={currentTab} completedNumber={completedNumber} />
        </ul>
      </div>
    </>
  )
}

export default TodoList;
