import React from "react";
import styles from "./Home.module.scss";
import LinkButton from "../../components/button/LinkButton";
const Home = () => {
  return (
    <div className={styles.home}>
      <h3>To Do list for your organizing</h3>
      <div className={styles.container}>
        <LinkButton to="/list">Get started</LinkButton>
      </div>
    </div>
  );
};
export default Home;
