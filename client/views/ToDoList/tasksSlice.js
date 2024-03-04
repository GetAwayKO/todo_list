import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.list.push({
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        status: { timestamp: null, mark: false },
      });
    },
    removeTask: (state, action) => {
      state.list = state.list.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
    editTask: (state, action) => {
      let payload = action.payload;
      const editedElement = state.list.findIndex(
        (item) => item.id === action.payload.id
      );
      state.list[editedElement] = {
        ...state.list[editedElement],
        ...payload,
      };
    },
    changeStatus: (state, action) => {
      const index = state.list.findIndex(
        (item) => item.id === action.payload.id
      );
      let status = state.list[index].status;
      state.list[index].status.timestamp = status.timestamp || Date.now();
      state.list[index].status.mark = !status.mark;
    },
  },
});

export const { addTask, removeTask, editTask, changeStatus } =
  tasksSlice.actions;
export default tasksSlice.reducer;
