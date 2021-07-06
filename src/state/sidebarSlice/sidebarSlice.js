// reducer 
export const sidebarStateReducer = (state=false, action) => {
  switch (action.type) {
    case 'SIDEBAR_STATE':
      return !action.payload
    default:
      return state;
  }
}

// action
export const sidebarStateAction = payload => dispatch => {
  return dispatch({
    type: 'SIDEBAR_STATE', 
    payload: payload
  })
  
}
