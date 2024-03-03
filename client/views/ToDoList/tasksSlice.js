import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: new Date().toISOString,
        title: action.payload.title,
        description: action.payload.description,
      });
    },
    removeTask: (state, action) => {},
    editTask: (state, action) => {},
  },
});

export const { addTask, removeTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
