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
      sortList(state);
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
      state.list[index].status.timestamp = state.list[index].status.timestamp
        ? null
        : Date.now();
      state.list[index].status.mark = !status.mark;
      sortList(state);
    },
  },
});

export const { addTask, removeTask, editTask, changeStatus } =
  tasksSlice.actions;
export default tasksSlice.reducer;

function sortList(state) {
  state.list = state.list
    .filter((item) => !item.status.mark)
    .sort((a, b) => a.id - b.id)
    .concat(
      state.list
        .filter((item) => item.status.mark)
        .sort((a, b) => a.status.timestamp - b.status.timestamp)
    );
}
