import React, { useState, useEffect } from "react";
import '../all.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuth } from '../components/Context';

const TodoItem = (props) => {
  const { token } = useAuth();
  const { list: todoList, currentTab, completedNumber } = props
  //TODO 要分辨動後的, 以及原始的 //原始List 的改變
  const [newList, setNewList] = useState(todoList)
  const [completedCount, setCompletedCount] = useState(completedNumber);
  // console.log('com', completedNumber)
  useEffect(() => {
    if (currentTab === 'all') {
      setNewList(todoList)
    } else if (currentTab === 'unfinished') {
      let theList = todoList.filter(item => item.completed_at === null || item.completed_at === false);
      setNewList(theList)
    } else if (currentTab === 'finished') {
      // console.log('new', newList)
      let theList = todoList.filter(item => item.completed_at !== null)
      // console.log('finis', theList)
      setNewList(theList)
    };


  }, [currentTab, todoList])

  const handleisComplete = (index, id) => {

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

        let allList = [...newList]
        console.log('res.completed_at', res.completed_at)
        allList[index].completed_at = res.completed_at
        setNewList(allList)
        let completedArray = allList.filter(item => item.completed_at !== null)
        setCompletedCount(Number(completedArray.length))


        console.log('new', newList)
      })

  }
  //製作刪除
  const handleDelete = (index, id) => {
    const _url = `https://todoo.5xcamp.us/todos/${id}`;
    fetch(_url, {
      method: 'DELETE',
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
        console.log(res)
        let allList = [...newList]
        allList.splice(index, 1)
        setNewList(allList)
        let completedArray = allList.filter(item => item.completed_at !== null)
        setCompletedCount(Number(completedArray.length))
        console.log('new', newList)
      })
  }

  //刪除已完成的全部商品
  const handleDeleteCompleted = () => {
    console.log('delete')
    let ids = []
    let uncompletedList = newList.filter((item) => {
      if (item.completed_at) {
        ids.push(item.id)
      }
      return !item.completed_at
    })

    //執行刪除ids
    console.log('ids', ids)
    const APIs = ids.map(id => 'https://todoo.5xcamp.us/todos/' + id)

    Promise.all(APIs.map(async url => {
      await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'authorization': token
        }
      })
        .then((res) => {
          console.log('deltete isComplete', res)
          return res.json()
        })
        .then(res => {
          console.log(res)
          console.log('uncompletedList', uncompletedList)
          let allList = [...newList]
          // let ids = []
          let filterArray = allList.filter((item) => {
            return !item.completed_at
          })
          setNewList(filterArray)

          setCompletedCount(0)
        })

    }))
  }


  return (
    <>
      {newList.map((item, index, id) => (
        <li key={item.id}>
          <label className="todoList_label">
            <input className="todoList_input" type="checkbox" value="true" checked={item.completed_at !== null ? true : false} onChange={() => handleisComplete(index, item.id)} />
            <span>{item.content}</span>
          </label>
          <a onClick={() => handleDelete(index, item.id)}>
            <FontAwesomeIcon icon={['fa', 'times']} />
          </a>
        </li>
      ))}
      <div class="todoList_statistics">
        <p> {completedCount} 個已完成項目</p>
        <a onClick={handleDeleteCompleted}>清除已完成項目</a>
      </div>
    </>
  )
}

export default TodoItem
