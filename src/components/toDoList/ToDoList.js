import React from 'react'
import toDoListStyles from './ToDoList.module.css'
import { BiEdit } from 'react-icons/bi'
import { IoMdTrash } from 'react-icons/io'
import AddTask from '../addTask/AddTask'
import { deleteItem } from '../../state/toDoListSlice/actions/action'
import { useSelector, useDispatch } from 'react-redux'

const ToDoList = () => {
  const toDoListArr = useSelector( state => state.toDoListReducer )
  const dispatch = useDispatch()

  const handleDelete = (key) => {
    dispatch(deleteItem(key))
  }

  return (
    <div className={toDoListStyles.container}>
      <AddTask />
      <div>
      {
        toDoListArr.map((element, index) => { 
          return(
            <div key={index} className={toDoListStyles.listItem}>
              <h3>{`${index + 1 }.`} {element}</h3>
              <div className={toDoListStyles.wrapper}>
                <div className={toDoListStyles.item}>
                  <input className={toDoListStyles.icon} type='checkbox' />
                </div>
                <button className={toDoListStyles.item} >
                  <BiEdit className={toDoListStyles.icon} />
                </button>
                <button className={toDoListStyles.item} type='button' onClick={() => handleDelete(index)}>
                  <IoMdTrash className={toDoListStyles.icon} />
                </button>
              </div>
            </div>
          )})
      }
      </div>
    </div>
  )
}

export default ToDoList