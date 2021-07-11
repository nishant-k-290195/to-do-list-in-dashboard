import React from 'react'
import { Link } from "react-router-dom";
import MainStyles from './Main.module.css'

const Main = () => {
  return (
    <div className={MainStyles.container}>
      <div className={MainStyles.card}>
        <Link to='to-do-list'>To Do List</Link>
      </div>
      <div className={MainStyles.card}>
        <Link to='accomplished-list'>Accomplished Task</Link>
      </div>
    </div>
  )
}

export default Main
