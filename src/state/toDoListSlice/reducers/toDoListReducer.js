export const toDoListReducer = (state=['Nishant'], action) => {
  switch (action.type) {
    case 'ADD_TASK':
        return [...state, action.payload]
    case 'DELETE_TASK':
      return state.filter((element, index) => index !==action.payload )
    default:
      return state
  }
}
