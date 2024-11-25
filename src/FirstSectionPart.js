import React from "react";
import Img from "./Componnets/Img/Img";
import Heading from "./Componnets/Heading";
import Text from "./Componnets/Text";
import Buttons from "./Componnets/Buttons";
import Input from "./Componnets/Input";
import ChipView from "./Componnets/ChipView";

const FirstSectionPart = () => {
  const [chipOptions, setChipOptions] = React.useState(() => [
    { value: 1, label: `Creative` },
    { value: 2, label: `Sport` },
    { value: 3, label: `Animation` },
    { value: 4, label: `Fantasy` },
  ]);
  const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <>
      <div className="relative z-[1] mt-[-338px] flex flex-col gap-[50px] px-14 md:px-5 sm:px-4">
        <div className="m1-6 flex items-start md:ml-0 md:flex-col">
          <div className="aicontentcolumn_border mt-[90px] w-[12%] rounded-[78px] p-1 md:w-[30%] md:mt-0 md:flex md:items-center md:justify-center sm:w-[75%] sm:mt-[50px] sm:flex sm:items-center sm:justify-center mx-auto">
            <Img
              src="images/image_1.png"
              alt="Ai Content Image"
              className="w-full rounded-full object-cover md:h-auto sm:h-auto"
            />
          </div>

          <div className="mb-1.5 flex flex-1 flex-col gap-[50px] self-center md:self-stretch">
            <div className="flex flex-col items-center gap-[30px]">
              <Heading
                size="headingmd"
                as="h1"
                className="w-[95%] self-end text-center font-plusjakartasans text-[70px] font-semibold leading-[70px] text-white-a700 lg:text-[48px] md:text-[48px]"
              >
                <span className="text-white-a700">
                  <>
                    Best AI Content Platform
                    <br />
                  </>
                </span>
                <span className="bg-gradient bg-clip-text text-transparent">
                  {" "}
                  Image Generate{" "}
                </span>
              </Heading>
              <Text
                as="p"
                className="w-[58%] text-center text-[18px] font-normal leading-[26px] text-white-a700 lg:w-full lg:text-[15px] md:w-full"
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Text>
            </div>
            <div className="mx-[78px] flex flex-col gap-5 md:mx-0">
              <div className="relative h-[74px] content-center lg:h-auto md:h-auto">
                <Input
                  name="Search Input"
                  placeholder={`An Astronaut riding a horse on mars, hd`}
                  value={searchBarValue}
                  onChange={(e) => setSearchBarValue(e.target.value)}
                  // suffix=fsearchBarValue?.length > 0 ? <CloseSVG onClick={() => setSearchBarValue("")} /> : null]
                  className="ml-auto flex h-[55px] w-[92%] items-center rounded-[36px] bg-blue_gray-900 px-[26px] text-[18px] font-medium text-white-a700_99 sm:px-4"
                />
                <Buttons className="absolute bottom-0 right-[11px] h-[40px] top-0 my-auto flex min-w-[176px] flex-row items-center justify-center rounded-[26px] bg-gradient px-6 text-center text-[20px] font-medium text-white-a700 lg:text-[17px] sm:px-4">
                  Generate Now
                </Buttons>
              </div>
              <div className="flex items-center justify-center">
                <Text
                  size="textmd"
                  as="p"
                  className="self-end font-plusjakartasans text-[20px] font-medium text-white-a700 lg:text-[17px] md:mr-5"
                >
                  Popular tags:
                </Text>
                <ChipView
                  options={chipOptions}
                  setOptions={setChipOptions}
                  values={selectedChipOptions}
                  setValues={setSelectedChipOptions}
                  className="flex flex-wrap gap-2.5"
                >
                  {(option) => (
                    <React.Fragment key={option.index}>
                      {option.isSelected ? (
                        <div className="flex h-[30px] cursor-pointer flex-row items-center whitespace-pre-wrap rounded-[14px] border border-solid border-white-a700_99 bg-white-a700_33 px-2.5 text-[16px] font-medium text-white-a700">
                          <span>{option.label}</span>
                        </div>
                      ) : (
                        <div
                          onClick={option.toggle}
                          className="flex h-[30px] cursor-pointer flex-row items-center rounded-[14px] bg-white-a700_33 px-2.5 text-[16px] font-medium text-white-a700"
                        >
                          <span>{option.label}</span>
                        </div>
                      )}
                    </React.Fragment>
                  )}
                </ChipView>
              </div>
            </div>
          </div>

          <div className="freepiccolumn_border ml-8 w-[16%] self-end rounded-[102px] px-1.5 py-2 md:w-[30%] md:flex md:items-center md:justify-center sm:w-[75%] sm:mt-[20px] sm:flex sm:items-center sm:justify-center md:self-center md:mt-10">
            <Img
              src="images/image_2.png"
              alt="Free Pic Image"
              className="h-[274px] w-full rounded-[96px] object-cover lg:h-auto md:h-auto"
            />
          </div>
        </div>
        <div className="mx-1.5 flex items-start gap-6 md:mx-0 md:flex-col">
          <div className="flex w-full flex-col gap-14 sm:gap-7 md:w-[50%] md:flex md:items-center md:justify-center md:self-center">
            <Img
              src="images/image_3.png"
              alt="Creative Image"
              className="h-[464px] rounded-[20px] object-cover"
            />
            <div className="flex flex-col gap-[30px]">
              <Text
                size="textmd"
                as="p"
                className="w-[84%] text-[20px] font-normal leading-[26px] text-white-a700 lg:w-full lg:text-[17px] md:w-full"
              >
                <span className="text-white-a700">
                  We're passionate about empowering creatives with the tools
                  they need to&nbsp;
                </span>
                <span className="bg-gradient bg-clip-text text-transparent">
                  bring their vision to life that's why we've developed
                </span>
              </Text>

              <div className="flex items-center gap-[11px] sm:flex-col sm:gap-4">
                <Buttons className="flex h-[52px] min-w-[154px] flex-row items-center justify-center rounded-[26px] bg-gradient px-6 text-center text-[20px] font-medium text-white-a700 lg:text-[17px] sm:px-4">
                  Get Started
                </Buttons>
                <div className="flex flex-row items-center space-x-4 sm:flex-col sm:space-x-0 sm:space-y-2">
                  <Heading
                    as="h2"
                    className="text-[30px] font-bold text-white-a700 lg:text-[25px] md:text-[24px] sm:text-[22px]"
                  >
                    100k+
                  </Heading>
                  <Text
                    size="textmd"
                    as="p"
                    className="text-[20px] font-normal text-white-a700 lg:text-[17px]"
                  >
                    Happy Customer
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full self-center">
            <div className="flex flex-col gap-[30px]">
              <div className="flex gap-3 md:flex-col">
                <Img
                  src="images/image_4.png"
                  alt="Gallery Image Six"
                  className="h-[308px] rounded-[20px] object-contain md:w-full"
                />
                <Img
                  src="images/image_5.png"
                  alt="Gallery Image Eight"
                  className="h-[308px] rounded-[20px] object-contain md:w-full"
                />
              </div>
              <Img
                src="images/image_6.png"
                alt="Gallery Image Ten"
                className="h-[382px] rounded-[20px] object-cover mb-[50px] md:w-[32%] md:self-center"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstSectionPart;
