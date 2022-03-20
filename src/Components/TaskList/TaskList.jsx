import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const TaskList = () => {
  const [filtered, setFiltered] = useState("ALL");

  const Tasks = useSelector((state) => state.taskReducer.tasks);
  return (
    <div>
      <button onClick={() => setFiltered("ALL")}>ALL</button>
      <button onClick={() => setFiltered("DONE")}>DONE</button>
      <button onClick={() => setFiltered("UNDONE")}>UNDONE</button>
      {filtered === "DONE"
        ? Tasks.filter((task) => task.done == false).map((task) => (
            <Task task={task} key={task.id} />
          ))
        : filtered === "UNDONE"
        ? Tasks.filter((task) => task.done == true).map((task) => (
            <Task task={task} key={task.id} />
          ))
        : Tasks.map((task) => <Task task={task} key={task.id} />)}
    </div>
  );
};
export default TaskList;
