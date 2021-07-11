
// reducer 
export const loginStateReducer = (state=false, {type, payload}) => {
  switch (type) {
    case 'LOGGED_IN':
      return true
    case 'LOGGED_OUT':
      return false
    default:
      return state
  }
}

// action creator 
export const loginStateAction = payload => dispatch => dispatch({
  type: 'LOGGED_IN'
})

export const logoutStateAction = payload => dispatch => dispatch({
  type: 'LOGGED_OUT'
})
