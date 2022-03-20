import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../JS/actions/Task";

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleAdd = () => {
    if (text) {
      dispatch(addTask({ id: Math.random(), text: text, done: false }));
      setText("");
    } else {
      alert("you should put something");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};

export default AddTask;
