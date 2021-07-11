import React, { useState } from 'react'
import { signIn } from '../../api/signIn'
import signInStyles from './SignIn.module.css'
import {signUpAction} from '../../state/userRegisterSlice/userRegisterSlice'
import { useSelector, useDispatch } from 'react-redux'


const SignIn = () => {
  const userRegistrationState = useSelector( state => state.userSignReducer )
  const dispatch = useDispatch()

  const [signInState, setSignInState] = useState({ email:'', password:'' })

  const handleChange = (e) => {
    setSignInState((prev) => ({...prev, [e.target.name]:e.target.value}))
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    const {email, password} = signInState
    signIn(email, password)
  }

  return (
    <div className={signInStyles.container}>
      <input name='email' type="text" placeholder='Email' onChange={handleChange}/>
      <input name='password' type="password" placeholder='Password' onChange={handleChange}/>
      <button onClick={handleSignIn}>Sign In</button>
      <div className={signInStyles.box}>
        <a href='#' >Forgot Password?</a>
        <a href='#' onClick={() => dispatch(signUpAction(userRegistrationState))}>Don't have an account? Sign Up</a>
      </div>
    </div>
  )
}

export default SignIn
