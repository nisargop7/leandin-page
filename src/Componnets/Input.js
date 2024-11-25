import React from "react";

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      label = "",
      type = "text",
      prefix,
      suffix,
      onChange,
      resetProps,
    },
    ref
  ) => {
    return (
      <label className={`${className} undefined`}>
        {!!label && label}
        {!!prefix && prefix}{placeholder}
        {/* <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          {...resetProps}
        /> */}
        {!!suffix && suffix}
      </label>
    );
  }
);

export default Input;
