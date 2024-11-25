import React from "react";
import Heading from "./Componnets/Heading";
import Buttons from "./Componnets/Buttons";
import Img from "./Componnets/Img/Img";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

const ThirdSectionPart = () => {
  return (
    <>
      <div className="mt-[100px]">
        <Tabs
          className="flex flex-col items-center gap-[34px] self-stretch"
          selectedTabClassName="!text-white-a700"
          selectedTabPanelClassName="!relative tab-panel--selected"
        >
          <div className="container-xs flex flex-col items-center px-14 lg:px-5 md:px-5">
            <div className="ml-[30px] flex w-[86%] flex-col items-center gap-2.5 lg:w-full md:ml-0 md:w-full">
              <div className="flex flex-col items-center gap-5">
                <Buttons className="flex h-[52px] min-w-[118px] items-center justify-center rounded-[26px] bg-deep_purple-a200_33 px-6 text-center text-[16px] font-medium text-white-a700 lg:text-[17px] sm:px-4">
                  Go to our AI gallery
                </Buttons>

                <Heading
                  size="headings"
                  as="h3"
                  className="font-plusjakartasans text-[45px] font-semibold text-white-a700 lg:text-[51px] md:text-[40px] sm:text-[34px]"
                >
                  <span className="text-white-a700">Create anything with</span>
                  <span className="bg-gradient bg-clip-text text-transparent">
                    &nbsp;Optpdoce AI
                  </span>
                </Heading>
              </div>
              <TabList
                className="mx-[232px] flex flex-wrap justify-center gap-8 md:mx-0"
                selectedTabClassName=""
                selectedTabPanelClassName="tab-panel--selected"
              >
                <Tab className="text-[25px] font-normal text-white-a700_66 lg:text-[25px] md:text-[24px] sm:text-[22px]">
                  All
                </Tab>
                <Tab className="text-[25px] font-normal text-white-a700 lg:text-[25px] md:text-[24px] sm:text-[22px]">
                  |
                </Tab>
                <Tab className="text-[25px] font-normal text-white-a700 lg:text-[25px] md:text-[24px] sm:text-[22px]">
                  Cartoon
                </Tab>
                <Tab className="text-[25px] font-normal text-white-a700 lg:text-[25px] md:text-[24px] sm:text-[22px]">
                  |
                </Tab>
                <Tab className="text-[25px] font-normal text-white-a700 lg:text-[25px] md:text-[24px] sm:text-[22px]">
                  Realistic
                </Tab>
                <Tab className="text-[25px] font-normal text-white-a700 lg:text-[25px] md:text-[24px] sm:text-[22px]">
                  |
                </Tab>
                <Tab className="text-[25px] font-normal text-white-a700 lg:text-[25px] md:text-[24px] sm:text-[22px]">
                  3D
                </Tab>
              </TabList>
            </div>
          </div>
          <div className="flex w-[82%] flex-col items-center gap-[50px] lg:w-full lg:px-5 md:w-full md:px-5">
            {[...Array(7)].map((_, index) => (
              <TabPanel
                key={`tab-panel${index}`}
                className="absolute justify-center self-stretch"
              >
                <div className="w-full self-stretch">
                  <div className="flex gap-6 md:flex-col">
                    <Img
                      src="images/image_third_1.png"
                      alt="Featured Image"
                      className="h-[562px] w-[24%] rounded-[20px] object-contain md:w-full"
                    />
                    <div className="flex flex-1 flex-col gap-[30px] md:self-stretch">
                      <div className="flex gap-6 md:flex-col">
                        <Img
                          src="images/image_third_2.png"
                          alt="Left Image"
                          className="h-[266px] w-[48%] rounded-[20px] object-contain md:w-full"
                        />
                        <Img
                          src="images/image_third_3.png"
                          alt="Right Image"
                          className="h-[266px] w-[48%] rounded-[20px] object-contain md:w-full"
                        />
                      </div>
                      <Img
                        src="images/image_third_4.png"
                        alt="Tall Image"
                        className="h-[266px] rounded-[20px] object-cover"
                      />
                    </div>
                    <Img
                      src="images/image_third_5.png"
                      alt="Bottom Image"
                      className="h-[562px] ₩-[24%] rounded-[20px] object-contain md:w-full"
                    />
                  </div>
                </div>
              </TabPanel>
            ))}
            <div className="container-xs my-6 flex item-center justify-center lg:pr-8 md:px-5 sm:px-4">
              <Buttons className="flex h-[52px] min-w-[118px] flex-row items-center justify-center rounded-[26px] bg-gradient px-6 text-center text-[20px] font-medium text-white-a700 lg:text-[17px] sm:px-4">
                Go to our AI gallery
              </Buttons>
            </div>
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default ThirdSectionPart;
