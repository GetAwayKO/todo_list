import React, { useState } from "react";
import styles from "./ToDoList.module.scss";
import TaskList from "./Task";
import Selector from "../../components/selector/Selector";
import { FILTER, OPTIONS } from "./ToDoList.const";

const ToDoList = () => {
  const [filterOption, setFilterOption] = useState(OPTIONS[0]);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>TO DO LIST</h2>
      <div className={styles.containerSelect}>
        <Selector
          value={filterOption}
          onChange={(e) => {
            setFilterOption(e.target.value);
          }}
          options={OPTIONS}
        />
      </div>
      <TaskList filter={FILTER[filterOption].filter} />
    </div>
  );
};
export default ToDoList;
