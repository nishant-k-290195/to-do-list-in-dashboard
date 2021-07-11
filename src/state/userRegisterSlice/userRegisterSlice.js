// false for sign up page
// REDUCER
export const userRegisterReducer = (state=true, {type, payload}) => {
  switch (type) {
    case 'SIGN_IN':
      return !payload

    case 'SIGN_UP':
      return !payload

    default:
      return state
  }
}

// ACTION CREATOR
export const signInAction = payload => (dispatch) => {
  return dispatch({
    type:'SIGN_IN',
    payload: payload
    
  })
}

export const signUpAction = payload => (dispatch) => {
  return dispatch({
    type:'SIGN_UP',
    payload:payload
  })
}

