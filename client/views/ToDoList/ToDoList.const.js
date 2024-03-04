export const FILTER = {
  All: {
    name: "All",
    filter: () => {
      return true;
    },
  },
  Uncompleted: {
    name: "Uncompleted",
    filter: (item) => {
      return item.status === false;
    },
  },
  Completed: {
    name: "Completed",
    filter: (item) => {
      return item.status === true;
    },
  },
};
export const OPTIONS = [
  FILTER.All.name,
  FILTER.Uncompleted.name,
  FILTER.Completed.name,
];
