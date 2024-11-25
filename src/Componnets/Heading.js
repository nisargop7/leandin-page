import React from 'react'

const sizes = {
    textxs : "text-[14px] font-medium",
    textxl : "text-[60px] font-medium lg:text-[51px] md:text-[52px] sm:text-[46px]",
    headingxs : "text-[30px] font-semibold lg:text-[25px] md:text-[28px] sm:text-[26px]",
    haadings : "text-[60px] font-semibold lg:text-[51px] md:text-[52px] sm:text-[46px]",
    haadingmd : "text-[70px] font-semibold lg:text-[70px] md:text-[48px]",
}

const Heading = ({children , className = "", size="", as, ...restProps}) => {
    const Component = as || "h6";
  return (
    <Component className={`text-white-a700 font-plusjakartasans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  )
}

export default Heading
