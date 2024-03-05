import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../views/ToDoList/taskSlice";
export default configureStore({
  reducer: { tasks: tasksReducer },
});
