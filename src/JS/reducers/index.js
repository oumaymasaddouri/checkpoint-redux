import { combineReducers } from "redux";
import taskReducer from "./Task";

const routeReducer = combineReducers({ taskReducer });

export default routeReducer;
