import React from "react";
import styles from "./AppLayout.module.scss";
import Header from "./header/Header";
const AppLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header title={"ToDo"}></Header>
      <main>{children}</main>
    </div>
  );
};
export default AppLayout;
