import React, { useState } from "react";
import styles from "./ToDoList.module.scss";
import TaskList from "./Task";
import Selector from "../../components/selector/Selector";
const ToDoList = () => {
  const FILTER = {
    all: {
      name: "All",
      filter: () => {
        return true;
      },
    },
    uncompleted: {
      name: "Uncompleted",
      filter: (item) => {
        return item.status === false;
      },
    },
    completed: {
      name: "Completed",
      filter: (item) => {
        return item.status === true;
      },
    },
  };
  const OPTIONS = [FILTER.all, FILTER.uncompleted, FILTER.completed];

  const [filterOption, setFilterOption] = useState(FILTER.all);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>TO DO LIST</h2>
      <div className={styles.containerSelect}>
        <Selector
          onSelect={(e) => setFilterOption(e.target.value)}
          options={OPTIONS}
        />
      </div>
      <TaskList filter={filterOption.filter} />
    </div>
  );
};
export default ToDoList;
