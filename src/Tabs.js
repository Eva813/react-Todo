import React, { useState, useEffect } from "react";
import './all.css'

const Tabs = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => {
    setActiveIndex(index)
  }
  const checkActive = (index, className) => activeIndex === index ? className : "";

  //check index to show active
  useEffect(() => {
    const tab = document.querySelector('.todoList_tab');
    console.log('tab', tab)
    const aTags = tab.querySelectorAll('a');
    console.log('aTags', aTags)
    aTags.forEach((item, index) => {
      console.log('item', item, index)
      if (index + 1 === activeIndex) {

      }
    })

  }, [activeIndex])

  return (
    <>
      <div className="todoList_list">
        <ul className="todoList_tab">
          <li><a href="#" className={checkActive(1, "active")} onClick={() => handleClick(1)}>全部</a></li>
          <li><a href="#" className={checkActive(2, "active")} onClick={() => handleClick(2)}>待完成</a></li>
          <li><a href="#" className={checkActive(3, "active")} onClick={() => handleClick(3)}>已完成</a></li>
        </ul>
        <div className="todoList_items">
          <div className={checkActive(1, "active")}>
            <ul className="todoList_item">
              <li>
                I AM ONE
              </li>
            </ul>
          </div>
          <div className={checkActive(2, "active")}>
            <ul className="todoList_item">
              <li>
                I AM Two
              </li>
            </ul>
          </div>
          <div className={checkActive(3, "active")}>
            <ul className="todoList_item">
              <li>
                I AM THree
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tabs;
