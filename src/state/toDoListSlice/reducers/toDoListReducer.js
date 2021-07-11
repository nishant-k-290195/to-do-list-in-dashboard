const initialState = {
  toDoList: [],
  loading: false
}

export const toDoListReducer = (state=initialState, {type, payload}) => {
  switch (type) {

    // CRUD OPERATIONS
    case 'CREATE_ITEM':
      return {
        ...state, 
        toDoList: [...state.toDoList, payload],
      }
      
    case 'READ_ITEM':
      return {
        ...state,
        toDoList: payload,
        loading: false
      }

    case 'UPDATE_ITEM':
      return {
        ...state
      }

    case 'DELETE_ITEM':
      return {
        ...state,
        toDoList: state.toDoList.filter((element, index) => index !== payload )
      }

    case 'LOADING_ITEMS':
      return {
        ...state,
        loading: true
      }

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
