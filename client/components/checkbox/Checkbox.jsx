import React from "react";
import styles from "./Checkbox.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

const Checkbox = ({ className, ...props }) => {
  return (
    <input
      className={classNames(className, styles.checkbox)}
      type="checkbox"
      {...props}
    />
  );
};
export default Checkbox;

Checkbox.propTypes = {
  className: PropTypes.string,
};
