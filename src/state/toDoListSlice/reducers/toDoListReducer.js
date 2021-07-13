const initialState = []

export const toDoListReducer = (state=initialState, {type, payload}) => {
  switch (type) {

    // CRUD OPERATIONS
    case 'CREATE_ITEM':
      return [...state, payload]
      
    case 'READ_ITEM':
      return [payload]

    case 'UPDATE_ITEM':
      return [...state, state.splice(1, payload.key, payload.item)]

    case 'DELETE_ITEM':
      return {...state, toDoList:state.toDoList.splice(payload)}

    case 'DELETE_ITEMS':
      state = []
      return state

    case 'SELECT_ITEM':
      const select_key = payload
      return state[select_key]

    case 'SELECT_ITEMS':
      return state[select_key]

    default:
      return state
  }
}
