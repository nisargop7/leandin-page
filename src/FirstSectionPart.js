import React from "react";
import { motion } from "framer-motion";
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
    <motion.div
        className="relative z-[1] mt-[-338px] flex flex-col gap-[50px] px-14 md:px-5 sm:px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="m1-6 flex items-start md:ml-0 md:flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="aicontentcolumn_border mt-[90px] w-[12%] rounded-[78px] p-1 md:w-[30%] md:mt-0 md:flex md:items-center md:justify-center sm:w-[75%] sm:mt-[50px] sm:flex sm:items-center sm:justify-center mx-auto"
            whileHover={{ scale: 1.1 }}
          >
            <Img
              src="images/image_1.png"
              alt="Ai Content Image"
              className="w-full rounded-full object-cover md:h-auto sm:h-auto"
            />
          </motion.div>

          <div className="mb-1.5 flex flex-1 flex-col gap-[50px] self-center md:self-stretch">
            <motion.div
              className="flex flex-col items-center gap-[30px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
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
            </motion.div>
            <motion.div
              className="mx-[78px] flex flex-col gap-5 md:mx-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="relative h-[74px] content-center lg:h-auto md:h-auto">
                <Input
                  name="Search Input"
                  placeholder={`An Astronaut riding a horse on mars, hd`}
                  value={searchBarValue}
                  onChange={(e) => setSearchBarValue(e.target.value)}
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
                    <motion.div
                      key={option.index}
                      whileHover={{ scale: 1.1 }}
                      className={`flex h-[30px] cursor-pointer flex-row items-center ${
                        option.isSelected
                          ? "rounded-[14px] border border-solid border-white-a700_99 bg-white-a700_33 px-2.5"
                          : "rounded-[14px] bg-white-a700_33 px-2.5"
                      } text-[16px] font-medium text-white-a700`}
                      onClick={option.toggle}
                    >
                      <span>{option.label}</span>
                    </motion.div>
                  )}
                </ChipView>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="freepiccolumn_border ml-8 w-[16%] self-end rounded-[102px] px-1.5 py-2 md:w-[30%] md:flex md:items-center md:justify-center sm:w-[75%] sm:mt-[20px] sm:flex sm:items-center sm:justify-center md:self-center md:mt-10"
            whileHover={{ scale: 1.1 }}
          >
            <Img
              src="images/image_2.png"
              alt="Free Pic Image"
              className="h-[274px] w-full rounded-[96px] object-cover lg:h-auto md:h-auto"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* <motion.div
        className="relative z-[1] mt-[-338px] flex flex-col gap-[50px] px-14 md:px-5 sm:px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      > */}
        {/* Previous Content */}
        <motion.div
          className="mx-1.5 flex items-start gap-6 md:mx-0 md:flex-col mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="flex w-full flex-col gap-14 sm:gap-7 md:w-[50%] md:flex md:items-center md:justify-center md:self-center"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Img
              src="images/image_3.png"
              alt="Creative Image"
              className="h-[464px] rounded-[20px] object-cover"
            />
            <motion.div
              className="flex flex-col gap-[30px]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
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

              <motion.div
                className="flex items-center gap-[11px] sm:flex-col sm:gap-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Buttons className="flex h-[52px] min-w-[154px] flex-row items-center justify-center rounded-[26px] bg-gradient px-6 text-center text-[20px] font-medium text-white-a700 lg:text-[17px] sm:px-4">
                  Get Started
                </Buttons>
                <motion.div
                  className="flex flex-row items-center space-x-4 sm:flex-col sm:space-x-0 sm:space-y-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
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
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full self-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col gap-[30px]">
              <motion.div
                className="flex gap-3 md:flex-col"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
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
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Img
                  src="images/image_6.png"
                  alt="Gallery Image Ten"
                  className="h-[382px] rounded-[20px] object-cover mb-[50px] md:w-[32%] md:self-center"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      {/* </motion.div> */}
    </>
  );
};

export default FirstSectionPart;
