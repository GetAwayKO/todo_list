import React from "react";
import styles from "./Checkbox.module.scss";
import PropTypes from "prop-types";

const Checkbox = ({ children, ...props }) => {
  return (
    <div className={styles.formCheckContainer}>
      <input type="checkbox" {...props} />
      <label>{children}</label>
    </div>
  );
};
export default Checkbox;
Checkbox.propTypes = {
  children: PropTypes.node,
};
