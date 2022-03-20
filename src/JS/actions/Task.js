import {
  ADD_TASK,
  CHECK_TASK,
  DELETE_TASK,
  EDIT_TASK,
} from "../actionTypes/Task";

export const addTask = (newTask) => {
  return { type: ADD_TASK, payload: newTask };
};

export const deleteTask = (id) => {
  return { type: DELETE_TASK, payload: id };
};

export const editTask = (id, newText) => {
  return { type: EDIT_TASK, payload: { id, newText } };
};

export const checkTask = (id) => {
  return { type: CHECK_TASK, payload: id };
};
