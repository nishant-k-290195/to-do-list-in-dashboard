import React, { useState } from 'react'
import AddTaskStyles from './AddTask.module.css'
import { GrAdd } from 'react-icons/gr'
import { createItem, updateItem } from '../../api/toDoList'
import { firebaseApp } from '../../firebase';
import {RiSaveFill} from 'react-icons/ri'

const AddTask = ({state, postValue}) => {
  const [newTask, setNewTask] = useState({ title:'', desc:'' })
  const handleChange = (e) => {
    if(state){
      setNewTask(prev => ({title: postValue.title, desc: postValue.desc}))
    }
    else{
      setNewTask(prev => ({ ...prev, [e.target.name]: e.target.value}))
    }
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const uid = firebaseApp.auth().currentUser.uid
    createItem(uid, newTask)
  }

  const handleSave = (e) => {
    e.preventDefault()
    const uid = firebaseApp.auth().currentUser.uid
    updateItem(uid, postValue)
  }

  return (
    <form className={AddTaskStyles.main}>
      <div className={AddTaskStyles.card}>
        <input name='title' type="text" placeholder='Title' onChange={handleChange} value={newTask.title}/>
        <textarea name='desc' type="text" placeholder='Describe...' onChange={handleChange} value={newTask.desc}/>
        <button className={AddTaskStyles.add} onClick={handleAdd}><GrAdd className={AddTaskStyles.icon} /></button>
      </div>
    </form>
  )
}

export default AddTask
