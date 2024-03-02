import React from "react";
import cn from "classnames";
const Button = ({ className, children, ...rest }) => {
  return (
    <button className={cn(className, styles.button)} {...rest}>
      {children}
    </button>
  );
};
export default Button;
