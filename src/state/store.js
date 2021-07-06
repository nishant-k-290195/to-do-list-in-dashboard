import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import ThunkMiddleware from 'redux-thunk'
import {toDoListReducer} from '../state/toDoListSlice/reducers/toDoListReducer'
import {sidebarStateReducer} from '../state/sidebarSlice/sidebarSlice'

const reducers = combineReducers({
  toDoListReducer: toDoListReducer,
  sidebarReducer: sidebarStateReducer
})

// const store = createStore(
//   reducers ,
//   {},
//   applyMiddleware(ThunkMiddleware) 
// )

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(ThunkMiddleware)
));

export default store




