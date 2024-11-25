import React from "react";
import Img from "./Componnets/Img/Img";
import Heading from "./Componnets/Heading";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import Text from "./Componnets/Text";
import Buttons from "./Componnets/Buttons";

const accordionData = [
  { questionText: "What is an optpdoce text-to-voice platform? " },
  {
    questionText: (
      <>
        How does an ThinkAi text-to-voice
        <br />
        platform work?
      </>
    ),
  },
  {
    questionText: (
      <>
        Can I customize the voice of the
        <br />
        generated speech?
      </>
    ),
  },
];

const FourSectionPart = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-center bg-white-a700 py-[100px] shadow-xs lg:py-8 md:py-5 sm:py-4">
          <div className="container-xs flex items-center justify-between gap-5 lg:px-5 md:flex-col md:px-5">
            <Img
              src="images/image_four_1.png"
              alt="Free Image"
              className="h-[600px] w-[42%] rounded-[30px] object-contain md:h-[400px] img-hover"  // Added hover class for image
            />
            <div className="flex w-[52%] flex-col items-start gap-[30px]">
              <Buttons className="flex h-[46px] min-w-[190px] flex-row items-center justify-center rounded-[22px] bg-deep_purple-a200_33 px-6 text-center text-[14px] font-medium text-b1ack-900 sm:px-4 md:self-center md:flex md:items-center md:justify-center md:mt-0 button-hover">
                Creative Approach
              </Buttons>
              <div className="flex flex-col items-start gap-7 self-stretch">
                <Heading
                  size="headings"
                  as="h3"
                  className="font-plusjakartasans text-[60px] font-semibold text-b1ack-900 lg:text-[51px] md:text-[40px] sm:text-[34px]"
                >
                  <span className="text-b1ack-900">Questions?&nbsp;</span>
                  <span className="bg-gradient bg-clip-text text-transparent">
                    <>
                      We have
                      <br />
                      Answers.
                    </>
                  </span>
                </Heading>
                <Accordion className="flex flex-col gap-10 self-stretch">
                  {accordionData.map((d, i) => (
                    <AccordionItem uuid={i} key={`FAQ List${i}`}>
                      <AccordionItemHeading className="w-full">
                        <AccordionItemButton className="accordion-item-header"> {/* Added hover class here */}
                          <AccordionItemState>
                            {(props) => (
                              <>
                                <div className="flex items-center justify-between px-3.5 sm:flex-col sm:items-start sm:gap-3">
                                  <Text
                                    as="p"
                                    className="text-[25px] font-medium leading-[38px] text-b1ack-900 lg:text-[25px] md:text-[24px] sm:text-[22px] accordion-text-hover"  // Added hover class for text
                                  >
                                    {d.questionText}
                                  </Text>
                                  <Img
                                    src="images/image_plus.png"
                                    alt="Expand Icon"
                                    className="h-[14px] w-[14px] object-contain"
                                  />
                                </div>
                              </>
                            )}
                          </AccordionItemState>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div>Nisarg Here</div>
                      </AccordionItemPanel>
                      <div className="h-px w-full rotate-[0deg] bg-black-900" />
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourSectionPart;
