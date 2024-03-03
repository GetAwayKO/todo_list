import styles from "./Animation.module.scss";
import React from "react";
const AnimationList = () => {
  const TASKS = [
    { id: 0, content: "Sleep" },
    { id: 1, content: "Eat" },
    { id: 2, content: "Code" },
    { id: 3, content: "Repeat" },
  ];
  let delay = 0;
  return (
    <div className={styles.container}>
      {TASKS.map((item) => {
        return (
          <span style={{ animationDelay: `${(delay += 0.5)}s` }} key={item.id}>
            {item.content}
          </span>
        );
      })}
    </div>
  );
};
export default AnimationList;
