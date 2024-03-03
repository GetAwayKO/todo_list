import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.list.push({
        id: 0,
        title: action.payload.title,
        description: action.payload.description,
      });
    },
    removeTask: (state, action) => {
      console.log("2");
    },
    editTask: (state, action) => {
      console.log("1");
    },
  },
});

export const { addTask, removeTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
