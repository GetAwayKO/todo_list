import React from "react";
import styles from "./Header.module.scss";
const Header = ({ title }) => {
  return (
    <header className={styles.container}>
      <img src="./logo-32x32.png" />
      <h1 className={styles.title}>{title}</h1>
    </header>
  );
};
export default Header;
