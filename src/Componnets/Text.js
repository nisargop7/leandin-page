import React from "react";

const sizes = {
  texts: "text-[14px] font-medium lg:text-[15px]",
  textmd: "text-[20px] font-medium lg:text-[17px]",
  textlg:
    "text-[30px] font-normal lg:text-[25px] md:text-[28px] sm:text-[26px]",
};

const Text = ({
  children,
  className = "",
  as,
  size = "texts",
  ...restProps
}) => {
  const Component = as || "p";
  return (
    <Component
      className={`text-white-a700 font-karla ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export default Text;
