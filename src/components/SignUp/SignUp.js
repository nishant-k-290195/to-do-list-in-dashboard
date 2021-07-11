import React, {useState, useEffect} from 'react'
import {userRef} from '../../../src/firebase'
import {signUp} from '../../api/signUp'
import { useSelector, useDispatch } from 'react-redux'
import {signInAction} from '../../state/userRegisterSlice/userRegisterSlice'
import signUpStyles from './SignUp.module.css'

const SignUp = () => {
  const userRegistrationState = useSelector( state => state.userSignReducer )
  const [signUpState, setSignUpState] = useState({fName:'', lName:'', email:'', password:''})
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setSignUpState({
      ...signUpState, 
      [e.target.name]: e.target.value
    })
  }

  const handleSignUp = (e)=> {
    e.preventDefault()
    const {email, password, fName, lName} = signUpState
    signUp(email, password, fName, lName)
    console.log(email)
  }

  return (
    <form className={signUpStyles.container} >
      <div className={signUpStyles.box}>
        <input name='fName' type="text" placeholder='First Name' onChange={handleChange}/>
        <input name='lName' type="text" placeholder='Last Name' onChange={handleChange}/>
      </div>
      <input name='email' type="text" placeholder='Email' onChange={handleChange}/>
      <input name='password' type="password" placeholder='Password' onChange={handleChange}/>
      <button onClick={handleSignUp}>Sign Up</button>
      <a href="#" onClick={() => dispatch(signInAction(userRegistrationState))}>Already have an account? Sign in</a>
    </form>
  )
}

export default SignUp
