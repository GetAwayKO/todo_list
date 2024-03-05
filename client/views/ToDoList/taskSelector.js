import { createSelector } from "@reduxjs/toolkit";

const selectTaskList = (state) => state.tasks.list;

export const selectFilteredTasks = createSelector(
  [selectTaskList, (state, filterPredicate) => filterPredicate],
  (list, filterPredicate) => {
    return list.filter(filterPredicate);
  }
);
