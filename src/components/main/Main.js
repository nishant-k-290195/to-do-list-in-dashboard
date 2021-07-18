import React from 'react'
import { Link } from "react-router-dom";
import MainStyles from './Main.module.css'

const Main = () => {
  return (
    <div className={MainStyles.container}>
      <iframe  
        className={MainStyles.video}
        src="https://www.youtube.com/embed/0sJeBiUCIt4" 
        title="video" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      />
      {/* <div className={MainStyles.card}>
        <Link to='to-do-list'>To Do List</Link>
      </div>
      <div className={MainStyles.card}>
        <Link to='accomplished-list'>Accomplished Task</Link>
      </div> */}
    </div>
  )
}

export default Main
