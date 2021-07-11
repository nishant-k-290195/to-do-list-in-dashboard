import React, { useState, useEffect } from 'react'
import AddTaskStyles from './AddTask.module.css'
import { addItem } from '../../state/toDoListSlice/actions/action'
import { useDispatch } from "react-redux";
import { GrAdd } from 'react-icons/gr'

const AddTask = () => {
  const [newTask, setNewTask] = useState({ title:'', desc:'' })
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setNewTask(prev => ({ ...prev, [e.target.name]: e.target.value} ))
  }

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(addItem(newTask))
  }

  return (
    <form className={AddTaskStyles.main}>
      <div className={AddTaskStyles.card}>
        <input name='title' type="text" placeholder='Title' onChange={handleChange} />
        <textarea name='desc' type="text" placeholder='Describe...' onChange={handleChange} />
        <button className={AddTaskStyles.add} onClick={handleClick}><GrAdd /></button>
      </div>
    </form>
  )
}

export default AddTask
