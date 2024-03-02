import React from "react";
import styles from "./Header.module.scss";
const Header = ({ title }) => {
  return (
    <header className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
    </header>
  );
};
export default Header;
