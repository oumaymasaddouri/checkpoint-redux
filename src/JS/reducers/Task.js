import {
  ADD_TASK,
  CHECK_TASK,
  DELETE_TASK,
  EDIT_TASK,
} from "../actionTypes/Task";

const initialState = {
  tasks: [
    {
      id: Math.random(),
      text: "task1",
      done: false,
    },
    {
      id: Math.random(),
      text: "task2",
      done: false,
    },
    {
      id: Math.random(),
      text: "task3",
      done: false,
    },
  ],
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, payload] };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== payload),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === payload.id ? { ...task, text: payload.newText } : task
        ),
      };
    case CHECK_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === payload ? { ...task, done: !task.done } : task
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;
