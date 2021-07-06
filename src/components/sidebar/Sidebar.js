import React from 'react'
import SidebarStyles from './Sidebar.module.css'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { ImHome3 } from 'react-icons/im'
import { BsCardChecklist } from 'react-icons/bs'
import { CgPlayListCheck } from 'react-icons/cg'

const Sidebar = () => {

const sidebarState = useSelector(state => state.sidebarReducer)

  return (
    <div className={sidebarState? SidebarStyles.sidebarSectionOpen:SidebarStyles.sidebarSection}>
      <div className={SidebarStyles.container}>
        <Link to='/' className={SidebarStyles.link}>
          <div className={SidebarStyles.menu}>
            <ImHome3 />
            <p className={!sidebarState? SidebarStyles.menuClosed : null}>Dashboard</p>
          </div>
        </Link>
        <div className={SidebarStyles.nav}>
          <Link to='/to-do-list' className={SidebarStyles.link}>
            <div className={SidebarStyles.menu}>
              <BsCardChecklist />
              <p className={!sidebarState? SidebarStyles.menuClosed : null}>To Do List</p>
            </div>
          </Link>
          <Link to='/accomplished-tasks' className={SidebarStyles.link}>
            <div className={SidebarStyles.menu}>
              <CgPlayListCheck />
              <p className={!sidebarState? SidebarStyles.menuClosed : null}>Accomplished Task List</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
