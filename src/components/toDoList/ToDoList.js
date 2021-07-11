import React, {useState, useEffect} from 'react'
import toDoListStyles from './ToDoList.module.css'
import { BiEdit } from 'react-icons/bi'
import { IoMdTrash } from 'react-icons/io'
import AddTask from '../addTask/AddTask'
import { readItem, updateItem, deleteItem, deleteItems } from '../../state/toDoListSlice/actions/action'
import { useSelector, useDispatch } from 'react-redux'
import { CgMoveRight } from 'react-icons/cg'
import {db} from '../../firebase'

const ToDoList = () => {
  
  const toDoListArr = useSelector( state => state.toDoListReducer.toDoList )
  const [checkAllState, setCheckAllState] = useState(false)
  const [view, setView] = useState(false)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   db.collection('toDoList').onSnapshot(snapshot => {
  //     // console.log(snapshot.docs.map(doc => doc.data()))
  //     setNewTask(snapshot.docs.map(doc => doc.data().newTask))
  //   })
  // }, [])

  const handleDelete = (key) => {
    dispatch(deleteItem(key))
  }

  const handleSelectAll = (key) => {
    setCheckAllState(() => !checkAllState)
  }

  const handleDeleteAll = (key) => {
    if(checkAllState){
      dispatch(deleteItems(key))
      setCheckAllState(!checkAllState)
    }
  }

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
          toDoListArr.map((element, index) => { 
            return(
              <div key={index} className={toDoListStyles.listItem} onClick={() => {setView(!view); dispatch(readItem(index))}}>
                <div>
                  <h3>{`${index + 1 }.`} {element.title}</h3>
                  <p className={view === true ? toDoListStyles.descOpen: toDoListStyles.descClose}>{element.desc}</p>
                </div>
                <div className={toDoListStyles.wrapper}>
                  <div className={toDoListStyles.item}>
                    <input 
                      className={toDoListStyles.icon} 
                      type='checkbox' 
                      checked={checkAllState?checkAllState:null}
                    />
                  </div>
                  <button className={toDoListStyles.item} type='button' >
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
    </div>
  )
}

export default ToDoList