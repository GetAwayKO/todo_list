import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../views/ToDoList/tasksSlice";
export default configureStore({
  reducer: { tasks: tasksReducer },
});
