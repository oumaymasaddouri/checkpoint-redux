import "./App.css";
import AddTask from "./Components/AddTask/AddTask";
import TaskList from "./Components/TaskList/TaskList";

function App() {
  return (
    <div className="App">
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
