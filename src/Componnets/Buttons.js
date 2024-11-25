import React from "react";

const Buttons = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  ...restProps
}) => {
  return (
    <button className={`${className}`} {...restProps}>
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export default Buttons;
