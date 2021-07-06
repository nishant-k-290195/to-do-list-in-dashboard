import './App.css';
import Main from './components/main/Main';
import { Switch, Route } from "react-router-dom";
import ToDoList from './components/toDoList/ToDoList';
import AccomplishedList from './components/accomplishedList/AccomplishedList'

function App() {
  return (
    <div className='container'>
      <Switch>
        <Route path='/' exact><Main /></Route>
        <Route path='/to-do-list' exact><ToDoList /></Route>
        <Route path='/accomplished-list' exact><AccomplishedList /></Route>
      </Switch>
    </div>
  );
}

export default App;
