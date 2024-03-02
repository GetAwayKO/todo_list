import React from "react";
import styles from "./AppLayout.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
const AppLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header title={"ToDo"} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default AppLayout;
