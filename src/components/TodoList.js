import React, { useState, useEffect } from "react";
import '../all.css'
import TodoItem from "../components/TodoItem"

const TodoList = (props) => {
  const { list, currentTab } = props
  return (
    <>
      <div className="todoList_items" >
        <ul className="todoList_item">
          <TodoItem list={list} currentTab={currentTab} />
        </ul>
      </div>
    </>
  )
}

export default TodoList;
