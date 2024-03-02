import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
const LinkButton = ({ children, className, ...rest }) => {
  return (
    <Link className={classNames(className, styles.button)} {...rest}>
      {children}
    </Link>
  );
};
export default LinkButton;
