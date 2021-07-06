import React, { useState } from 'react'
import AddTaskStyles from './AddTask.module.css'
import { addItem } from '../../state/toDoListSlice/actions/action'
import { useDispatch } from "react-redux";
import { GrAdd } from 'react-icons/gr'
const AddTask = () => {
  const [newTask, setNewTask] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setNewTask(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(addItem(newTask))
  }

  return (
    <form>
      <div className={AddTaskStyles.card}>
        <input name='newTask' type="text" placeholder='Title' onChange={handleChange} />
        <textarea name='newTask' type="text" placeholder='Describe...' onChange={handleChange} />
        <button className={AddTaskStyles.add} onClick={handleClick}><GrAdd /></button>
      </div>
    </form>
  )
}

export default AddTask
