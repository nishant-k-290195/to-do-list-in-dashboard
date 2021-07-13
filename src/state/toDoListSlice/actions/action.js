export const addItem = payload => dispatch => { 
  return dispatch(
    { 
      type: 'CREATE_ITEM', 
      payload: payload
    }
  )}

export const readItem = payload => async dispatch => {

  return dispatch(
    { 
      type: 'READ_ITEM', 
      payload: payload
    }
  )
}

export const updateItem = payload => async dispatch => { 
  return dispatch(
    { 
      type: 'UPDATE_ITEM', 
      payload: payload
    }
  )
}

export const deleteItem = payload => async dispatch => {
  return dispatch(
    {
      type: 'DELETE_ITEM',
      payload: payload
    }
  )
}

export const loadingItems = payload => dispatch => {
  return dispatch(
    {
      type: 'LOADING_ITEMS',
      payload: payload
    }
  )
}

export const deleteItems = payload => dispatch => {
  return dispatch(
    {
      type: 'DELETE_ITEMS',
      payload: payload
    }
  ) 
}

export const selectItem = payload => dispatch => {
  return dispatch(
    {
      type: 'SELECT_ITEM',
      payload: payload
    }
  )
}

export const selectItems = payload => dispatch => {
  return dispatch(
    {
      type: 'SELECT_ITEMS',
      payload: payload
    }
  ) 
}

