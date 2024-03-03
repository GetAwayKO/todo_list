import React from "react";
import cn from "classnames";
import styles from "./Button.module.scss";
const Button = ({ className = " ", children, ...rest }) => {
  return (
    <button className={cn(className, styles.button)} {...rest}>
      {children}
    </button>
  );
};
export default Button;
