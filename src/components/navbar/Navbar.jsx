import React from 'react';
import NavbarStyles from './Navbar.module.css'
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi'
import { useSelector, useDispatch } from 'react-redux';
import { sidebarStateAction } from '../../state/sidebarSlice/sidebarSlice'
import profileImg from '../../assets/profileImg.jpeg'

const Navbar = () => {
  const sidebarState = useSelector(state => state.sidebarReducer)
  const dispatch = useDispatch()
  const handleSidebar = () => {
    dispatch(sidebarStateAction(sidebarState))
  }
  return (
    <div className={NavbarStyles.navbarSection}>
      <div className={NavbarStyles.container}>
        <div className={NavbarStyles.nav}>
          <i onClick={ () => handleSidebar() }><GiHamburgerMenu className={NavbarStyles.icon}/></i>
          <nav className={NavbarStyles.menu}>
            <Link to='/to-do-list' className={NavbarStyles.link}>To Do List</Link>
            <Link to='/accomplished-tasks' className={NavbarStyles.link}>Accomplished Task List</Link>
          </nav>
        </div>
        <Link to='/' className={NavbarStyles.logo}><img src={profileImg} alt="profileImg" /></Link>
      </div>
    </div>
  )
}

export default Navbar
