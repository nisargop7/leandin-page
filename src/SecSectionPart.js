import React, { Suspense } from "react";
import Img from "./Componnets/Img/Img";
import Heading from "./Componnets/Heading";
import Buttons from "./Componnets/Buttons";

const homelistImage = [
  { firstImage: "/images/image_sec_2.png" },
  { firstImage: "/images/image_sec_3.png" },
  { firstImage: "/images/image_sec_4.png" },
];

const SecSectionPart = () => {
  return (
    <>
      <div className="flex justify-center bg-white-a700 py-[30px] sm:py-4">
        <div className="container-xs flex items-center justify-center gap-[42px] lg:px-5 md:flex-col md:px-5">
          <div className="relative h-[710px] w-full md:hidden">
            <div className="absolute bottom-px left-0 right-0 mx-auto flex flex-1 flex-col items-start rounded-[20px] bg-gradient1">
              <Img
                src="images/image_sec_1.png"
                alt="Profile Image"
                className="h-[628px] w-[86%] rounded-[20px] object-contain movable-animation"
              />
            </div>
            <Img
              src="images/image_sec_1.png"
              alt="Large Portrait"
              className="absolute bottom-0 left-0 top-0 my-auto h-[710px] w-[88%] object-contain movable-animation"
            />
          </div>
          <div className="mb-6 flex w-full flex-col gap-10 self-end">
            <div className="mr-1.5 flex flex-col items-start gap-3.5 md:self-center md:md:flex md:items-center md:justify-center">
              <Buttons className="flex h-[46px] min-₩-[190px] flex-row items-center justify-center rounded-[22px] bg-deep_purple-a200_33 px-6 text-center text-[14px] font-mediun text-b1ack-900 sm:px-4 moveable-button-animation">
                Introduce optpdoce AI
              </Buttons>
              <Heading
                size="textxl"
                as="h2"
                className="w-full font-plusjakartasans text-[60px] font-semibold leading-[72px] text-b1ack-900 lg:text-[51px] md:text-[40px] sm:text-[34px] movable-text-animation"
              >
                <span className="text-b1ack-900 ">Unlocking the Power of&nbsp;</span>
                <span className="bg-gradient2 bg-clip-text text-transparent">
                  AI for a Smarter
                </span>
                <span className="text-b1ack-900">&nbsp;Future</span>
              </Heading>
            </div>
            <div className="mr-[146px] flex gap-3.5 md:mr-0 md:flex-col">
              <Suspense fallback={<div>Loading feed...</div>}>
                {homelistImage.map((d, index) => (
                  <Img
                    key={"imageList" + index}
                    src={d.firstImage}
                    alt="First Image"
                    className="h-[148px] w-[32%] rounded-[10px] object-contain md:w-full movable-image-animation"
                  />
                ))}
              </Suspense>
            </div>
            <div className="mr-1.5 flex items-center gap-[30px] md:mr-0 md:flex-col">
              <Buttons className="flex h-[52px] min-w-[118px] flex-row items-center justify-center rounded-[26px] bg-gradient px-6 text-center text-[20px] font-medium text-white-a700 lg:text-[17px] sm:px-4 moveable-button-animation">
                Try Now
              </Buttons>
              <div className="flex flex-1 items-center gap-2 md:self-stretch sm:flex-col">
                <Img
                  src="images/img_star_1.png"
                  alt="Star Image"
                  className="h-[32px] ₩-[6%] rounded-sm object-contain sm:w-full movable-image-animation"
                />
                <p className="w-[90%] text-[18px] font-normal leading-6 text-black-new lg:text-[15px] sm:w-full movable-text-animation">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecSectionPart;
