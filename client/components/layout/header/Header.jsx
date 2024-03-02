import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
const Header = ({ title }) => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <img src="./logo-32x32.png" />
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.nav}>
        <Link to="/">Home</Link>
      </div>
    </header>
  );
};
export default Header;
