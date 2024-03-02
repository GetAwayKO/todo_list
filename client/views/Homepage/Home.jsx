import React from "react";
import styles from "./Home.module.scss";
import LinkButton from "../../components/button/LinkButton";
const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.titles}>
        <h2>To-do list for your organizing</h2>
        <h3>It's just a to-do list and nothing more</h3>
      </div>
      <div className={styles.container}>
        <LinkButton to="/list">Get started</LinkButton>
      </div>
    </div>
  );
};
export default Home;
