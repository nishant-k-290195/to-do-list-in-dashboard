import React, { useState, useEffect } from 'react'
import toDoListStyles from './ToDoList.module.css'
import { BiEdit } from 'react-icons/bi'
import { IoMdTrash } from 'react-icons/io'
import AddTask from '../addTask/AddTask'
import { fetchToDoList, updateItem, deleteItem, deleteItems } from '../../api/toDoList'
import { useSelector, useDispatch } from 'react-redux'
import { CgMoveRight } from 'react-icons/cg'
import {firebaseApp, toDoListRef} from '../../firebase'
import { ContactPhoneTwoTone, SelectAll } from '@material-ui/icons'
import { selectItems } from '../../state/toDoListSlice/actions/action'
var testArray = []
var fetchedPostArr = []

const ToDoList = () => {
  
  const toDoListArr = useSelector( state => state.toDoListReducer )
  const [toDo, setToDo] = useState([])

  const [checkAllState, setCheckAllState] = useState(false)
  const [view, setView] = useState(false)
  const dispatch = useDispatch()

  const handleEdit = (item, key) => {
    updateItem()
  }

  const handleDelete = (key) => {
    deleteItem()
  }

  const handleDeleteAll = (key) => {
    deleteItems()
  }

  const handleSelectAll = (key) => {
    setCheckAllState(() => !checkAllState)
  }

  useEffect( () =>  {
    const fetchData = async () => {
      try{
        toDoListRef.on('value',  snapshot => {
          setToDo((prevTodo) => [...prevTodo, ...Object.entries(snapshot.val())])
          const fetchedPostObject =  snapshot.val()
          fetchedPostArr = Object.entries(fetchedPostObject)
          setToDo((prevTodo) => [...prevTodo, ...fetchedPostArr])
        })
      }catch(err){
        // console.log(err)
      }
    }
    fetchData()
  }, [])

  return (
    
    <div className={toDoListStyles.container}>

      <AddTask />
      <div>
        <div className={toDoListStyles.listbar}>
          <h3>S.NO.</h3>
              <div className={toDoListStyles.listbar_wrapper}>
                <div className={toDoListStyles.item}>
                  <input className={toDoListStyles.icon} onClick={handleSelectAll} type='checkbox' checked={checkAllState} />
                </div>
                <button className={toDoListStyles.item} type='button' >
                  <CgMoveRight className={toDoListStyles.icon} />
                </button>
                <button className={toDoListStyles.item} type='button' >
                  <IoMdTrash className={toDoListStyles.icon} onClick={ handleDeleteAll } />
                </button>
              </div>
          </div>
        <div className={toDoListStyles.toDolist}>
        {
          toDo.map(([key, value]) => { 
            return(
              <div key={key} className={toDoListStyles.listItem} onClick={() => {setView(!view)}}>
                <div>
                  <h3>{value.content.title}</h3>
                  <p className={view === true ? toDoListStyles.descOpen : toDoListStyles.descClose}>{value.content.desc}</p>
                </div>
                <div className={toDoListStyles.wrapper}>
                  <div className={toDoListStyles.item}>
                    <input 
                      className={toDoListStyles.icon} 
                      type='checkbox' 
                      checked={checkAllState?checkAllState:null}
                    />
                  </div>
                  <button className={toDoListStyles.item} type='button' onClick={() => handleEdit(value, key)}>
                    <BiEdit className={toDoListStyles.icon} />
                  </button>
                  <button className={toDoListStyles.item} type='button' onClick={() => handleDelete(key)}>
                    <IoMdTrash className={toDoListStyles.icon} />
                  </button>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default ToDoList