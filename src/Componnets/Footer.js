import React from "react";
import Heading from "./Heading";
import Img from "./Img/Img";
import Text from "./Text";

const Footer = ({ ...props }) => {
  return (
    <footer
      {...props}
      className={`${props.className} flex flex-col items-center mt-[100px]`}
    >
      <div className="container-xs lg:px-5 md:px-5">
        <div className="flex items-center justify-between gap-5 md:flex-col">
          <Img
            src="images/image_footer.png"
            alt="Footer Logo"
            className="h-[116px] w-[450px] object-contain"
          />
          <div className="flex w-[30%] items-center justify-between gap-5- md:w-full sm:flex-col">
            <div className="flex W-[62%] flex-col items-start gap-3 sm:w-full">
              <Heading
                as="h3"
                className="font-plusjakartasans text-[30px] font-semibold text-deep_purple-a200 lg:text-[25px] md:text-[24px] sm:text-[22px]"
              >
                About
              </Heading>
              <ul className="flex flex-col items-start gap-2.5">
                <li>
                  <a href="#" className="lg:text-[15px]">
                    <Text
                      as="p"
                      className="text-[18px] font-normal text-white-a700"
                    >
                      Terms & Conditions
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="lg:text-[15px]">
                    <Text
                      as="p"
                      className="text-[18px] font-normal text-white-a700"
                    >
                      Privacy Policies
                    </Text>
                  </a>
                </li>
                <li>
                  <a
                    href="Careers"
                    target="_blank"
                    rel="noreferrer"
                    className="lg:text-[15px]"
                  >
                    <Text
                      as="p"
                      className="text-[18px] font-normal text-white-a700"
                    >
                      Careers
                    </Text>
                  </a>
                </li>
                <li>
                  <a
                    href="ConatctUs"
                    target="_blank"
                    rel="noreferrer"
                    className="lg:text-[15px]"
                  >
                    <Text
                      as="p"
                      className="text-[18px] font-normal text-white-a700"
                    >
                      Conatct Us
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex W-[62%] flex-col items-start gap-3 sm:w-full">
              <Heading
                as="h3"
                className="font-plusjakartasans text-[30px] font-semibold text-deep_purple-a200 lg:text-[25px] md:text-[24px] sm:text-[22px]"
              >
                Services
              </Heading>
              <ul className="flex flex-col items-start gap-2.5">
                <li>
                  <a href="#" className="lg:text-[15px]">
                    <Text
                      as="p"
                      className="text-[18px] font-normal text-white-a700"
                    >
                      Creative Tools
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="lg:text-[15px]">
                    <Text
                      as="p"
                      className="text-[18px] font-normal text-white-a700"
                    >
                      Privacy Policies
                    </Text>
                  </a>
                </li>
                <li>
                  <a
                    href="Careers"
                    target="_blank"
                    rel="noreferrer"
                    className="lg:text-[15px]"
                  >
                    <Text
                      as="p"
                      className="text-[18px] font-normal text-white-a700"
                    >
                      Design Generator
                    </Text>
                  </a>
                </li>
                <li>
                  <a
                    href="ConatctUs"
                    target="_blank"
                    rel="noreferrer"
                    className="lg:text-[15px]"
                  >
                    <Text
                      as="p"
                      className="text-[18px] font-normal text-white-a700"
                    >
                      Excellent Support
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mr-1 flex w-[16%] flex-col items-start gap-3.5 md:mr-0 md:w-full">
            <Heading
              as="h3"
              className="font-plusjakartasans text-[30px] font-semibold text-deep_purple-a200 lg:text-[25px] md:text-[24px] sm:text-[22px]"
            >
              Address
            </Heading>
            <div className="flex flex-col gap-3 self-stretch">
              <div className="flex items-start gap-3">
                <Img
                  src="images/img_call.png"
                  alt="Phone Icon"
                  className="h-[22px]"
                />
                <Text
                  as="p"
                  className="w-[88%] self-center text-[18px] font-normal leading-[21px] text-white-a700 lg:text-[15px]"
                >
                  551 Swanston Street, Melbourne Victoria 3053 Australia
                </Text>
              </div>
              <div className="flex items-center gap-2.5">
                <Img
                  src="images/img_linkedin.png"
                  alt="Linkedin Icon"
                  className="h-[22px]"
                />
                <Text
                  as="p"
                  className="text-[18px] font-normal text-white-a700 lg:text-[15px]"
                >
                  +91 1234567890
                </Text>
              </div>
              <div className="flex items-center gap-2.5">
                <Img
                  src="images/img_checkmark.png"
                  alt="Email Icon"
                  className="h-[22px]"
                />
                <Text
                  as="p"
                  className="text-[18px] font-normal text-white-a700 1g:text-[15px]"
                >
                  info@optodolce.com
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 h-px w-full self-stretch bg-white-a700_4c" />
      <div className="container-xs my-6 flex item-center justify-center lg:px-5 md:px-5">
        <Text
          as="p"
          className="text-[18px] font-normal text-white-a700 lg:text-[15px]"
        >
          <span>© 2024&nbsp;</span>
          <span>0</span>
          <span>ptodolce</span>
          <span>&nbsp;All Rights Reserved. </span>
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
