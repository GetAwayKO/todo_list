import React from "react";
import PropTypes from "prop-types";
import styles from "./Selector.module.scss";
import classNames from "classnames";

const Selector = ({ className = "", options, ...rest }) => {
  return (
    <select className={classNames(className, styles.selector)} {...rest}>
      {options.map((item, index) => {
        return (
          <option value={item} key={index}>
            {item}
          </option>
        );
      })}
    </select>
  );
};
export default Selector;

Selector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};
