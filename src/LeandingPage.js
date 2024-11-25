import React from "react";
import Img from "./Componnets/Img/Img";
import Header from "./Componnets/Header";
import FirstSectionPart from "./FirstSectionPart";
import SecSectionPart from "./SecSectionPart";
import ThirdSectionPart from "./ThirdSectionPart";
import FourSectionPart from "./FourSectionPart";
import Footer from "./Componnets/Footer";

const LeandingPage = () => {
  return (
    <>
      <div className="flex w-full flex-col gap-[140px] bg-black-900 lg:gap-[140px] md:gap-[105px] sm:gap-[70px]">
        <div className="mx-16 md:mx-0">
          <div>
            <div
              className="relative h-[544px] bg-cover bg-no-repeat px-[74px] lg:px-8 md:px-5 sm:px-4"
              style={{ backgroundImage: `url('/images/sechalfcircle.png')` }}
            >
              <Img
                src="/images/firsthalfcircle.png"
                alt="Decorative half-circle"
                className="absolute top-0 left-0 right-0 mx-auto h-[200px] w-[60%] object-contain"
              />
              <Header />
            </div>
            <FirstSectionPart />
          </div>
        </div>
      </div>
      <div className="mb-5">
        <SecSectionPart />
      </div>
      <div className="flex w-full flex-col gap-[140px] bg-black-900 lg:gap-[140px] md:gap-[105px] sm:gap-[70px]">
        <ThirdSectionPart />
      </div>
      <div>
        <FourSectionPart />
      </div>
      <div className="flex w-full flex-col gap-[140px] bg-black-900 lg:gap-[140px] md:gap-[105px] sm:gap-[70px]">
        <Footer />
      </div>
    </>
  );
};

export default LeandingPage;
