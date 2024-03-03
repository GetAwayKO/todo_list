import React from "react";
import styles from "./ToDoList.module.scss";
import TaskList from "./Task";
const ToDoList = () => {
  return (
    <div className={styles.wrapper}>
      <TaskList />
    </div>
  );
};
export default ToDoList;
