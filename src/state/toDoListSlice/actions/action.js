export const addItem = payload => dispatch => { 
  return dispatch(
    { 
      type: 'ADD_TASK', 
      payload: payload
    }
  )}

export const deleteItem = payload => dispatch => {
  return dispatch(
    {
      type: 'DELETE_TASK',
      payload: payload
    }
  )
}
