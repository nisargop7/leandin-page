import React from "react";
import Buttons from "./Buttons";
import Img from "./Img/Img";

const Header = ({ ...props }) => {
  return (
    <header
      {...props}
      className={`${props.className} top-[30px] right-0 left-0 mx-auto flex-1 absolute`}
    >
      <div className="flex W-full item-center justify-between gap-5 sm:flex-col">
        <a>
          <Img
            src="/images/drawer.png"
            alt="Drawer"
            className="h-[28px] sm:w-full"
          />
        </a>
        <Img
          src="/images/drawerside.png"
          alt="Drawer"
          className="h-[56px] w-[252px] object-contain"
        />
        <div className="flex gap-2.5">
          <Buttons className="flex h-[46px] min-w-[100px] flex-row items-center justify-center rounded-[22px] bg-white-a700 px-[22px] text-center text-[20px] font-medium text-black-900 sm:px-5">
            Log in
          </Buttons>
          <Buttons className="flex h-[46px] min-w-[116px] flex-row items-center justify-center rounded-[22px] bg-gradient px-[22px] text-center text-[20px] font-mediun text-white-a700 sm:px-5">
            Sign Up
          </Buttons>
        </div>
      </div>
    </header>
  );
};

export default Header;
