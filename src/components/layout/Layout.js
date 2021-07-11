import React, {useState} from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'
import App from '../../App';
import LayoutStyles from './Layout.module.css'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import { useSelector, useDispatch } from 'react-redux'
import Footer from '../../components/footer/Footer'
import { firebaseApp } from '../../firebase';
import { loginStateAction, logoutStateAction } from '../../state/loginStateSlice/loginStateSlice';

const Layout = () => {
  const userRegistrationState = useSelector(state => state.userSignReducer)
  const loginState = useSelector(state => state.loginReducer)
  const dispatch = useDispatch()

  firebaseApp.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(loginStateAction(loginState))
    }
    else{
      dispatch(logoutStateAction(loginState))
    }
  })

  if(loginState) {    
    return (
      <div className={LayoutStyles.main_layout}>
        <Navbar />
        <Sidebar />
        <App /> 
      </div>
    )
  }

  else
    {
      return (
        <div className={LayoutStyles.login_layout}>
          { userRegistrationState? <SignIn /> : <SignUp/> }
          <Footer/>
        </div>
      )
    }
}

export default Layout
