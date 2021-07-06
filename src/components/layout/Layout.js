import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'
import App from '../../App';
import LayoutStyles from './Layout.module.css'

const Layout = () => {

  return (
    <div className={LayoutStyles.layout}>
      <Navbar />
      <Sidebar />
      <App />
    </div>
  )
}

export default Layout
