import React, { useState, useEffect } from 'react'
import toDoListStyles from './ToDoList.module.css'
import { BiEdit } from 'react-icons/bi'
import { IoMdTrash } from 'react-icons/io'
import AddTask from '../addTask/AddTask'
import { deleteItem } from '../../api/toDoList'
import {toDoListRef} from '../../firebase'
// import { ContactPhoneTwoTone, SelectAll, ViewWeek } from '@material-ui/icons'
import { selectItems } from '../../state/toDoListSlice/actions/action'

var fetchedPostArr = []

const ToDoList = () => {
  const [toDo, setToDo] = useState([])
  const [view, setView] = useState({key:'', view: false})
  const [edit, setEdit] = useState({state: false, postValue:''})

  const handleView = (key) => {
    setView({key: key, view: !view.view})
  }

  const handleEdit = (id) => {
    // setView(false)
    toDo.forEach(([key, value]) => {
      if(key === id){
        setEdit(() => ({
          state: !edit.state, 
          postValue: value.content
        }))
      }
    })
  }

  const handleDelete = (key) => {
    deleteItem(key)
  }

  useEffect( () =>  {
    const fetchData = async () => {
      try{
        toDoListRef.on('value',  snapshot => {
          const fetchedPostObject =  snapshot.val()
          if(fetchedPostObject !== null){
            fetchedPostArr = Object.entries(fetchedPostObject)
            setToDo((prevTodo) => [...fetchedPostArr])
          }
        })
      }catch(err){
        console.log(err)
      }
    }
    fetchData()
  }, [])
  return (
    <div className={toDoListStyles.container}>
      <AddTask { ...edit }/>
      <div>
        <div className={toDoListStyles.listbar}>
          <h3>S.NO.</h3>
              {/* <div className={toDoListStyles.listbar_wrapper}>
                <div className={toDoListStyles.item}>
                  <input className={toDoListStyles.icon} onClick={handleSelectAll} type='checkbox' checked={checkAllState} />
                </div>
                <button className={toDoListStyles.item} type='button' >
                  <CgMoveRight className={toDoListStyles.icon} />
                </button>
                <button className={toDoListStyles.item} type='button' >
                  <IoMdTrash className={toDoListStyles.icon} onClick={ handleDeleteAll } />
                </button>
              </div> */}
          </div>
        <div className={toDoListStyles.toDolist}>
        {
          toDo.map(([key, value], index) => {
            return (
              <div key={key} className={toDoListStyles.listItem} onClick={() => {handleView(key)}}>
                <div>
                  <h3>{index+1}. {value.content.title}</h3>
                  <p className={view.key === key && view.view === true? toDoListStyles.descOpen : toDoListStyles.descClose}>{value.content.desc}</p>
                </div>
                <div className={toDoListStyles.wrapper}>
                  <div className={toDoListStyles.item}>
                    {/* <input 
                      className={toDoListStyles.icon} 
                      type='checkbox' 
                      checked={checkAllState?checkAllState:null}
                    /> */}
                  </div>
                <button className={toDoListStyles.item} type='button' onClick={() => handleEdit(key)}>
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