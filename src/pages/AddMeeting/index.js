import React from "react";

import {
  Column,
  Row,
  Image,
  Stack,
  Button,
  Input,
  Text,
  Line,
  Switch,
} from "components";

const AddMeetingPage = () => {
  return (
    <>
      <Column className="bg-gray_900_d8 font-sourcesanspro items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-evenly w-[100%]">
          <aside className="items-center lg:pb-[30px] xl:pb-[34px] pb-[39px] 3xl:pb-[46px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[7%]">
            <Column className="">
              <Image
                src={"images/img_group_2.svg"}
                className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                alt="Group"
              />
              <Image
                src={"images/img_frame407_2.svg"}
                className="3xl:h-[1075px] lg:h-[697px] xl:h-[797px] h-[895px] 2xl:h-[896px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] object-contain w-[100%]"
                alt="Frame407"
              />
            </Column>
          </aside>
          <Stack className="h-[1040px] 2xl:h-[1041px] 3xl:h-[1249px] lg:h-[809px] xl:h-[926px] w-[93%]">
            <Stack className="absolute h-[1040px] 2xl:h-[1041px] 3xl:h-[1249px] lg:h-[809px] xl:h-[926px] inset-[0] w-[100%]">
              <div className="absolute bg-white_A700 border border-indigo_50 border-solid lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] inset-x-[0] top-[0] w-[100%]"></div>
              <Row className="absolute bg-gray_100 border border-indigo_50 border-solid inset-x-[0] items-center justify-start lg:pr-[626px] xl:pr-[717px] pr-[806px] 3xl:pr-[967px] top-[7%] w-[100%]">
                <Button className="bg-white_A700 border border-indigo_50 border-solid font-normal not-italic lg:pb-[15px] xl:pb-[17px] pb-[19.5px] 2xl:pb-[19px] 3xl:pb-[23px] lg:pt-[14px] xl:pt-[16px] pt-[18.5px] 2xl:pt-[18px] 3xl:pt-[22px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 text-center w-[35%]">
                  Activities Dashboard
                </Button>
                <Button className="border border-gray_200 border-solid font-normal mb-[1px] not-italic lg:py-[14px] xl:py-[16px] py-[18.5px] 2xl:py-[18px] 3xl:py-[22px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_700 text-center w-[19%]">
                  Analytics
                </Button>
                <Input
                  className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-bluegray_700 text-bluegray_700 w-[100%]"
                  WrapClassName="2xl:pb-[19px] 2xl:pt-[18px] 3xl:pb-[23px] 3xl:pl-[19px] 3xl:pr-[24px] 3xl:pt-[22px] border border-gray_200 border-solid flex lg:pb-[15px] lg:pl-[12px] lg:pr-[15px] lg:pt-[14px] pb-[19.5px] pl-[16px] pr-[20px] pt-[18.5px] w-[36%] xl:pb-[17px] xl:pl-[14px] xl:pr-[17px] xl:pt-[16px]"
                  name="Sales Dashboard"
                  placeholder="Sales Dashboard"
                  suffix={
                    <Image
                      src={"images/img_vector_58.svg"}
                      className="w-[16.01px] h-[16.01px] lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px] my-[auto]"
                      alt="Vector"
                    />
                  }
                ></Input>
                <Image
                  src={"images/img_frame418.svg"}
                  className="lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] object-contain lg:w-[43px] xl:w-[49px] w-[56px] 3xl:w-[67px]"
                  alt="Frame418"
                />
              </Row>
              <Column className="absolute bg-white_A700 bottom-[0] items-start justify-start lg:pb-[34px] xl:pb-[39px] pb-[44px] 3xl:pb-[52px] lg:pt-[12px] xl:pt-[14px] pt-[16px] 3xl:pt-[19px] right-[1%] rounded-radius8 w-[32%]">
                <Row className="items-start justify-between lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] w-[100%]">
                  <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                    My calender
                  </Text>
                  <Image
                    src={"images/img_settingoutline_2.svg"}
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] lg:ml-[234px] xl:ml-[267px] ml-[301px] 3xl:ml-[361px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    alt="settingOutline"
                  />
                </Row>
                <Line className="bg-bluegray_50 h-[1px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]" />
                <Column className="items-start lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[290px] xl:pr-[332px] pr-[374px] 3xl:pr-[449px] w-[100%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                    Today
                  </Text>
                </Column>
                <Row className="items-start justify-start lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[92%]">
                  <Text className="font-semibold mt-[1px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]">
                    27 Jun
                  </Text>
                  <Image
                    src={"images/img_group61_2.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] object-contain w-[14%]"
                    alt="Group61"
                  />
                  <Text className="font-normal lg:ml-[154px] xl:ml-[177px] ml-[199px] 3xl:ml-[238px] mt-[1px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 w-[auto]">
                    Show today
                  </Text>
                </Row>
                <Row className="items-center justify-between lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[92%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                    08:00
                  </Text>
                  <Line className="bg-bluegray_100 h-[1px] mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[88%]" />
                </Row>
                <Row className="items-center justify-between lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[92%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                    09:00
                  </Text>
                  <Line className="bg-bluegray_100 h-[1px] mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[88%]" />
                </Row>
                <Column className="items-end lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:pl-[51px] xl:pl-[58px] pl-[66px] 3xl:pl-[79px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] w-[100%]">
                  <Line className="bg-red_700 h-[1px] w-[100%]" />
                </Column>
                <Row className="items-center justify-evenly 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] lg:px-[14px] xl:px-[16px] px-[18px] 3xl:px-[21px] w-[100%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                    10:00
                  </Text>
                  <Line className="bg-bluegray_100 h-[1px] mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[88%]" />
                </Row>
                <Row className="items-center justify-between lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[92%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                    11:00
                  </Text>
                  <Line className="bg-bluegray_100 h-[1px] mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[88%]" />
                </Row>
                <Row className="items-center justify-between lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[92%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                    12:00
                  </Text>
                  <Line className="bg-bluegray_100 h-[1px] mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[88%]" />
                </Row>
                <Row className="items-center justify-between lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[92%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                    13:00
                  </Text>
                  <Line className="bg-bluegray_100 h-[1px] mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[88%]" />
                </Row>
                <Row className="items-center justify-between lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[92%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                    14:00
                  </Text>
                  <Line className="bg-bluegray_100 h-[1px] mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[88%]" />
                </Row>
              </Column>
              <Column className="absolute bg-white_A700 h-[max-content] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[65%]">
                <Row className="bg-gray_100 border border-indigo_50 border-solid items-center justify-between lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[100%]">
                  <Text className="font-normal mb-[1px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_901 w-[auto]">
                    Add Meeting
                  </Text>
                  <Image
                    src={"images/img_multiplyoutlin_3.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[566px] xl:ml-[647px] ml-[728px] 3xl:ml-[874px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="multiplyOutlin"
                  />
                </Row>
                <Row className="items-start justify-end lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] w-[100%]">
                  <Column className="items-start justify-start lg:mb-[160px] xl:mb-[183px] mb-[206px] 3xl:mb-[247px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[64%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                      <span className="text-black_900 font-sourcesanspro">
                        Title{" "}
                      </span>
                      <span className="text-red_700 font-sourcesanspro">*</span>
                    </Text>
                    <Input
                      className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                      WrapClassName="2xl:pr-[15px] 3xl:pl-[14px] 3xl:pr-[18px] 3xl:py-[13px] bg-white_A700 border border-bluegray_100 border-solid flex lg:mt-[3px] lg:pl-[9px] lg:pr-[11px] lg:py-[8px] mt-[4px] pl-[12px] pr-[15.34px] py-[11px] rounded-radius4 w-[100%] xl:mt-[3px] xl:pl-[10px] xl:pr-[13px] xl:py-[9px]"
                      name="Enter title of "
                      placeholder="Enter title of meeting"
                      suffix={
                        <Image
                          src={"images/img_vector_59.svg"}
                          className="w-[13.33px] h-[13.33px] lg:w-[10px] lg:h-[11px] xl:w-[11px] xl:h-[12px] 2xl:w-[13px] 2xl:h-[14px] 3xl:w-[16px] 3xl:h-[17px] my-[auto]"
                          alt="Vector"
                        />
                      }
                    ></Input>
                    <Column className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Column className="items-start justify-start w-[23%]">
                          <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                            <span className="text-black_900 font-sourcesanspro">
                              From
                            </span>
                            <span className="text-red_700 font-sourcesanspro">
                              *
                            </span>
                          </Text>
                          <Column className="items-center xl:mt-[3px] lg:mt-[3px] mt-[4px] w-[100%]">
                            <Row className="border border-gray_200 border-solid items-center justify-evenly lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[13px] xl:pr-[15px] pr-[17.66px] 2xl:pr-[17px] 3xl:pr-[21px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 w-[100%]">
                              <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                                06/28/2022
                              </Text>
                              <Image
                                src={"images/img_vector_60.svg"}
                                className="lg:h-[13px] xl:h-[15px] h-[16.67px] 2xl:h-[17px] 3xl:h-[21px] mb-[3.16px] xl:ml-[10px] ml-[12.17px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[3.17px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] object-contain lg:w-[12px] xl:w-[14px] w-[16.67px] 2xl:w-[16px] 3xl:w-[20px]"
                                alt="Vector"
                              />
                            </Row>
                          </Column>
                        </Column>
                        <Row className="border border-gray_200 border-solid items-center justify-center lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[13px] xl:pr-[15px] pr-[17.66px] 2xl:pr-[17px] 3xl:pr-[21px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 w-[23%]">
                          <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                            09:40
                          </Text>
                          <Image
                            src={"images/img_vector_61.svg"}
                            className="lg:h-[13px] xl:h-[15px] h-[16.67px] 2xl:h-[17px] 3xl:h-[21px] mb-[3.16px] lg:ml-[35px] xl:ml-[41px] ml-[46.17px] 2xl:ml-[46px] 3xl:ml-[55px] mt-[3.17px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] object-contain lg:w-[12px] xl:w-[14px] w-[16.67px] 2xl:w-[16px] 3xl:w-[20px]"
                            alt="Vector"
                          />
                        </Row>
                        <Row className="items-end justify-between lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] w-[48%]">
                          <Column className="items-start justify-start w-[48%]">
                            <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                              <span className="text-black_900 font-sourcesanspro">
                                To
                              </span>
                              <span className="text-red_700 font-sourcesanspro">
                                *
                              </span>
                            </Text>
                            <Column className="items-center xl:mt-[3px] lg:mt-[3px] mt-[4px] w-[100%]">
                              <Row className="border border-gray_200 border-solid items-center justify-evenly lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[13px] xl:pr-[15px] pr-[17.66px] 2xl:pr-[17px] 3xl:pr-[21px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 w-[100%]">
                                <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                                  06/28/2022
                                </Text>
                                <Image
                                  src={"images/img_vector_62.svg"}
                                  className="lg:h-[13px] xl:h-[15px] h-[16.67px] 2xl:h-[17px] 3xl:h-[21px] mb-[3.16px] xl:ml-[10px] ml-[12.17px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[3.17px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] object-contain lg:w-[12px] xl:w-[14px] w-[16.67px] 2xl:w-[16px] 3xl:w-[20px]"
                                  alt="Vector"
                                />
                              </Row>
                            </Column>
                          </Column>
                          <Row className="border border-gray_200 border-solid items-center justify-between lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[13px] xl:pr-[15px] pr-[17.66px] 2xl:pr-[17px] 3xl:pr-[21px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 w-[48%]">
                            <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                              09:40
                            </Text>
                            <Image
                              src={"images/img_vector_63.svg"}
                              className="lg:h-[13px] xl:h-[15px] h-[16.67px] 2xl:h-[17px] 3xl:h-[21px] mb-[3.16px] lg:ml-[35px] xl:ml-[41px] ml-[46.17px] 2xl:ml-[46px] 3xl:ml-[55px] mt-[3.17px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] object-contain lg:w-[12px] xl:w-[14px] w-[16.67px] 2xl:w-[16px] 3xl:w-[20px]"
                              alt="Vector"
                            />
                          </Row>
                        </Row>
                      </Row>
                    </Column>
                    <Row className="items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[19%]">
                      <Text className="font-semibold my-[1px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]">
                        All Day
                      </Text>
                      <Switch
                        onColor=""
                        offColor="#eaecf0"
                        onHandleColor=""
                        offHandleColor="#f4f8fd"
                        value={false}
                        className="lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] w-[40%]"
                      />
                    </Row>
                    <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                      Time zone
                    </Text>
                    <Input
                      className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 w-[100%]"
                      WrapClassName="2xl:pr-[21px] 2xl:py-[12px] 3xl:pl-[19px] 3xl:pr-[26px] 3xl:py-[15px] border border-gray_200 border-solid flex lg:mt-[3px] lg:pl-[12px] lg:pr-[16px] lg:py-[9px] mt-[4px] pl-[16px] pr-[21.66px] py-[12.5px] rounded-radius4 w-[100%] xl:mt-[3px] xl:pl-[14px] xl:pr-[19px] xl:py-[11px]"
                      name="(GMT+00:00) UTC"
                      placeholder="(GMT+00:00) UTC"
                      suffix={
                        <Image
                          src={"images/img_vector_64.svg"}
                          className="w-[8.67px] lg:w-[6px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[10px] my-[auto]"
                          alt="Vector"
                        />
                      }
                    ></Input>
                    <Input
                      className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 w-[100%]"
                      WrapClassName="2xl:pr-[22px] 3xl:mt-[19px] 3xl:pl-[19px] 3xl:pr-[27px] 3xl:py-[15px] bg-gray_50 border border-gray_200 border-solid flex lg:mt-[12px] lg:pl-[12px] lg:pr-[17px] lg:py-[10px] mt-[16px] pl-[16px] pr-[22.8px] py-[13px] rounded-radius4 w-[37%] xl:mt-[14px] xl:pl-[14px] xl:pr-[20px] xl:py-[11px]"
                      name="Add video confe"
                      placeholder="Add video conferencing"
                      suffix={
                        <Image
                          src={"images/img_vector_65.svg"}
                          className="w-[10.4px] lg:w-[8px] xl:w-[9px] 2xl:w-[10px] 3xl:w-[12px] my-[auto]"
                          alt="Vector"
                        />
                      }
                    ></Input>
                    <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                      Location
                    </Text>
                    <Input
                      className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                      WrapClassName="2xl:pr-[21px] 2xl:py-[12px] 3xl:pl-[19px] 3xl:pr-[26px] 3xl:py-[15px] border border-gray_200 border-solid flex lg:mt-[3px] lg:pl-[12px] lg:pr-[16px] lg:py-[9px] mt-[4px] pl-[16px] pr-[21.66px] py-[12.5px] rounded-radius4 w-[100%] xl:mt-[3px] xl:pl-[14px] xl:pr-[19px] xl:py-[11px]"
                      name="Enter location "
                      placeholder="Enter location meeting"
                      suffix={
                        <Image
                          src={"images/img_vector_66.svg"}
                          className="w-[8.67px] lg:w-[6px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[10px] my-[auto]"
                          alt="Vector"
                        />
                      }
                    ></Input>
                    <Column className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                      <Column className="items-start justify-start w-[100%]">
                        <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                          Description
                        </Text>
                        <Input
                          className="bg-transparent border-0 font-normal not-italic lg:pb-[30px] xl:pb-[34px] pb-[39px] 3xl:pb-[46px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pt-[12px] xl:pt-[14px] pt-[16px] 3xl:pt-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                          WrapClassName="bg-white_A700 border border-bluegray_100 border-solid lg:mt-[3px] mt-[4px] rounded-radius4 w-[100%] xl:mt-[3px]"
                          name="Start typing th"
                          placeholder="Start typing the details about the meeting"
                        ></Input>
                      </Column>
                    </Column>
                    <Row className="items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[21%]">
                      <Image
                        src={"images/img_pluscirclesol.svg"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="pluscircleSol"
                      />
                      <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 w-[auto]">
                        Add outcome
                      </Text>
                    </Row>
                    <Row className="items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[28%]">
                      <Image
                        src={"images/img_pluscirclesol_1.svg"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="pluscircleSol"
                      />
                      <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 w-[auto]">
                        Add meeting notes
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-gray_100 border border-gray_200 border-solid items-start justify-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:pb-[490px] xl:pb-[560px] pb-[630px] 3xl:pb-[756px] lg:pt-[12px] xl:pt-[14px] pt-[16px] 3xl:pt-[19px] w-[34%]">
                    <Text className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                      Related to
                    </Text>
                    <Button
                      className="2xl:pr-[21px] 2xl:py-[12px] 3xl:ml-[28px] 3xl:pl-[19px] 3xl:pr-[26px] 3xl:py-[15px] bg-white_A700 border border-gray_200 border-solid flex items-center justify-between lg:ml-[18px] lg:mt-[3px] lg:pl-[12px] lg:pr-[16px] lg:py-[9px] ml-[24px] mt-[4px] pl-[16px] pr-[21.66px] py-[12.5px] rounded-radius4 text-center w-[84%] xl:ml-[21px] xl:mt-[3px] xl:pl-[14px] xl:pr-[19px] xl:py-[11px]"
                      rightIcon={
                        <Image
                          src={"images/img_vector_67.svg"}
                          className="w-[8.67px] text-center lg:w-[6px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[10px]"
                          alt="Vector"
                        />
                      }
                    >
                      <div className="bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_200">
                        Link this meeting to..
                      </div>
                    </Button>
                    <Text className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                      Attendees (1)
                    </Text>
                    <Column className="items-center xl:mt-[3px] lg:mt-[3px] mt-[4px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[100%]">
                      <Image
                        src={"images/img_frame418_1.svg"}
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain rounded-radius4 w-[100%]"
                        alt="Frame418"
                      />
                      <Row className="items-center justify-start lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[98%]">
                        <Image
                          src={"images/img_infocircleout.svg"}
                          className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                          alt="infocircleOut"
                        />
                        <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                          Attendees will get an email invitation
                        </Text>
                      </Row>
                    </Column>
                    <Row className="bg-bluegray_50 border border-gray_200 border-solid items-center justify-start lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 w-[59%]">
                      <Column className="bg-amber_100 font-inter lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] items-center 3xl:pl-[11px] lg:pl-[7px] xl:pl-[8px] pl-[9.75px] 2xl:pl-[9px] xl:pr-[10px] pr-[11.25px] 2xl:pr-[11px] 3xl:pr-[13px] lg:pr-[8px] lg:py-[4px] xl:py-[5px] py-[6px] 3xl:py-[7px] rounded-radius50 lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]">
                        <Text className="font-bold lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-amber_500 tracking-ls1 w-[auto]">
                          J
                        </Text>
                      </Column>
                      <Text className="font-normal font-sourcesanspro ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:my-[2px] my-[3.5px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                        Jemee Tala
                      </Text>
                      <Image
                        src={"images/img_multiplyoutlin_4.svg"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[2px] lg:my-[2px] my-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="multiplyOutlin"
                      />
                    </Row>
                  </Column>
                </Row>
                <Row className="bg-gray_100 border border-indigo_50 border-solid items-center justify-center lg:pl-[560px] xl:pl-[640px] pl-[720px] 3xl:pl-[864px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] w-[100%]">
                  <Button className="bg-white_A700 border border-gray_200 border-solid font-normal not-italic xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-center w-[51%]">
                    Cancel
                  </Button>
                  <Button className="bg-bluegray_900 border border-gray_200 border-solid font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[42%]">
                    Save
                  </Button>
                </Row>
              </Column>
            </Stack>
            <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[98%]">
              <header className="w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] w-[41%]">
                    <Text className="absolute border border-bluegray_201 border-solid font-normal leading-[normal] not-italic 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] pl-[9px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] right-[0] rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_400 text-left w-[83%]">
                      Search your CRM...
                    </Text>
                    <Row className="absolute border border-bluegray_201 border-solid items-center justify-start left-[0] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[17%]">
                      <Image
                        src={"images/img_searchoutline_2.svg"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="searchOutline"
                      />
                      <Text className="font-semibold mb-[1px] xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_701 w-[auto]">
                        All
                      </Text>
                      <Image
                        src={"images/img_angledownoutl_4.svg"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="angledownOutl"
                      />
                    </Row>
                  </Stack>
                  <Row className="font-inter items-center justify-between lg:ml-[374px] xl:ml-[427px] ml-[481px] 3xl:ml-[577px] w-[22%]">
                    <Image
                      src={"images/img_group5_2.svg"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Group5"
                    />
                    <Image
                      src={"images/img_group4_2.svg"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Group4"
                    />
                    <Image
                      src={"images/img_group3_4.svg"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Group3"
                    />
                    <Column className="bg-red_600 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] items-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:my-[1px] lg:my-[1px] my-[2px] lg:pb-[3px] xl:pb-[4px] pb-[5px] 3xl:pb-[6px] lg:pt-[6px] xl:pt-[7px] pt-[8px] 3xl:pt-[9px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] rounded-radius50 lg:w-[28px] xl:w-[32px] w-[36px] 3xl:w-[43px]">
                      <Text className="cursor-pointer hover:font-bold font-bold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 tracking-ls1 w-[auto]">
                        1
                      </Text>
                    </Column>
                    <Column className="bg-amber_100 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] 3xl:pb-[10px] lg:pb-[7px] xl:pb-[8px] pb-[9px] lg:pt-[6px] xl:pt-[7px] pt-[8px] 3xl:pt-[9px] lg:px-[10px] xl:px-[11px] px-[13px] 3xl:px-[15px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
                      <Text className="cursor-pointer hover:font-bold font-bold lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-amber_500 hover:text-white_A700 tracking-ls1 w-[auto]">
                        S
                      </Text>
                    </Column>
                  </Row>
                </Row>
              </header>
              <Row className="items-start justify-between 3xl:mt-[105px] lg:mt-[68px] xl:mt-[78px] mt-[88px] w-[100%]">
                <Column className="bg-white_A700 items-start justify-start lg:pb-[271px] xl:pb-[310px] pb-[349px] 3xl:pb-[419px] lg:pt-[25px] xl:pt-[29px] pt-[33px] 3xl:pt-[39px] rounded-radius8 w-[66%]">
                  <Row className="font-inter items-center justify-between lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] w-[94%]">
                    <Text className="font-medium lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_901 w-[auto]">
                      <span className="text-bluegray_901 font-sourcesanspro font-light">
                        Hey
                      </span>
                      <span className="text-bluegray_901 font-sourcesanspro font-normal">
                        {" "}
                      </span>
                      <span className="text-bluegray_901 font-sourcesanspro font-semibold">
                        Jemee!
                      </span>
                    </Text>
                    <Row className="font-sourcesanspro items-center justify-evenly lg:ml-[338px] xl:ml-[386px] ml-[435px] 3xl:ml-[522px] w-[35%]">
                      <Row className="bg-gray_50 border border-gray_200 border-solid items-center justify-start lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[40%]">
                        <Image
                          src={"images/img_addtask1_2.svg"}
                          className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                          alt="addtask1"
                        />
                        <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                          Add task
                        </Text>
                      </Row>
                      <Row className="bg-gray_50 border border-gray_200 border-solid items-center justify-center lg:pl-[13px] xl:pl-[15px] pl-[17.67px] 2xl:pl-[17px] 3xl:pl-[21px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] w-[48%]">
                        <Image
                          src={"images/img_vector_68.svg"}
                          className="lg:h-[13px] xl:h-[15px] h-[16.67px] 2xl:h-[17px] 3xl:h-[21px] mb-[3.16px] mt-[3.17px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] object-contain lg:w-[12px] xl:w-[14px] w-[16.67px] 2xl:w-[16px] 3xl:w-[20px]"
                          alt="Vector"
                        />
                        <Text className="font-normal xl:ml-[10px] ml-[11.66px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                          Add meeting
                        </Text>
                      </Row>
                      <Image
                        src={"images/img_frame419.svg"}
                        className="lg:h-[31px] xl:h-[35px] h-[39px] 2xl:h-[40px] 3xl:h-[47px] object-contain rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] w-[13%]"
                        alt="Frame419"
                      />
                    </Row>
                  </Row>
                  <Column className="font-sourcesanspro items-start lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:pr-[393px] xl:pr-[450px] pr-[506px] 3xl:pr-[607px] w-[100%]">
                    <Row className="items-center justify-start w-[100%]">
                      <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                        Showing all
                      </Text>
                      <Text className="font-normal lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 w-[auto]">
                        All Activities
                      </Text>
                      <Image
                        src={"images/img_trianglesolid_4.svg"}
                        className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] xl:ml-[3px] lg:ml-[3px] ml-[4px] xl:my-[5px] lg:my-[5px] my-[6.5px] 2xl:my-[6px] 3xl:my-[7px] object-contain w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"
                        alt="triangleSolid"
                      />
                      <Text className="font-normal lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                        for
                      </Text>
                      <Row className="items-center justify-evenly ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] w-[29%]">
                        <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 w-[auto]">
                          Today jun 27
                        </Text>
                        <Image
                          src={"images/img_trianglesolid_5.svg"}
                          className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] xl:ml-[3px] lg:ml-[3px] ml-[4px] xl:my-[5px] lg:my-[5px] my-[6.5px] 2xl:my-[6px] 3xl:my-[7px] object-contain w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"
                          alt="triangleSolid"
                        />
                      </Row>
                    </Row>
                  </Column>
                  <Row className="border border-gray_200 border-solid font-sourcesanspro items-center justify-between lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[100%]">
                    <Row className="items-center justify-between w-[47%]">
                      <Text className="font-normal lg:leading-[17px] xl:leading-[20px] leading-[23.00px] 2xl:leading-[23px] 3xl:leading-[27px] not-italic lg:pl-[23px] xl:pl-[26px] pl-[30px] 3xl:pl-[36px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-left w-[21%]">
                        Select all
                      </Text>
                      <Row className="items-center justify-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[16%]">
                        <Image
                          src={"images/img_checkbox_3.svg"}
                          className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                          alt="Checkbox"
                        />
                        <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                          Open
                        </Text>
                      </Row>
                      <Text className="font-normal lg:leading-[17px] xl:leading-[20px] leading-[23.00px] 2xl:leading-[23px] 3xl:leading-[27px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:pl-[23px] xl:pl-[26px] pl-[30px] 3xl:pl-[36px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-left w-[20%]">
                        Overdue
                      </Text>
                      <Text className="font-normal lg:leading-[17px] xl:leading-[20px] leading-[23.00px] 2xl:leading-[23px] 3xl:leading-[27px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:pl-[23px] xl:pl-[26px] pl-[30px] 3xl:pl-[36px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-left w-[24%]">
                        Completed
                      </Text>
                    </Row>
                    <Text className="font-normal lg:ml-[223px] xl:ml-[255px] ml-[287px] 3xl:ml-[344px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 w-[auto]">
                      All tasks and meetings
                    </Text>
                  </Row>
                  <Text className="font-semibold font-sourcesanspro lg:ml-[150px] xl:ml-[172px] ml-[194px] 3xl:ml-[232px] lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_901 w-[auto]">
                    Find your upcoming tasks, meetings and reminders here
                  </Text>
                  <Row className="font-sourcesanspro items-center justify-start lg:ml-[46px] xl:ml-[53px] ml-[60px] 3xl:ml-[72px] lg:mt-[46px] xl:mt-[53px] mt-[60px] 3xl:mt-[72px] w-[86%]">
                    <Column className="items-center mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[52%]">
                      <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]">
                        Bring your emails into CRM
                      </Text>
                      <Text className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                        Select your email provider
                      </Text>
                      <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                        <Row className="bg-gray_50 border border-gray_200 border-solid items-center justify-start lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[19%]">
                          <Image
                            src={"images/img_gmailsvg_2.svg"}
                            className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] xl:my-[3px] lg:my-[3px] my-[4px] object-contain w-[34%]"
                            alt="Gmailsvg"
                          />
                          <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                            Gmail
                          </Text>
                        </Row>
                        <Row className="bg-gray_50 border border-gray_200 border-solid items-center justify-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[25%]">
                          <Stack className="lg:h-[16px] xl:h-[19px] h-[20.49px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] w-[24%]">
                            <Stack className="absolute lg:h-[16px] xl:h-[19px] h-[20.49px] 2xl:h-[21px] 3xl:h-[25px] inset-[0] opacity-op2 w-[100%]">
                              <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                                <Column className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] items-center w-[100%]">
                                  <Image
                                    src={"images/defaultNoData.png"}
                                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] object-cover lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                                    alt="Vector"
                                  />
                                </Column>
                                <Column className="items-end lg:pl-[3px] pl-[4.74px] 2xl:pl-[4px] xl:pl-[4px] 3xl:pl-[5px] pr-[1.99px] 2xl:pr-[1px] xl:pr-[1px] lg:pr-[1px] 3xl:pr-[2px] w-[100%]">
                                  <Image
                                    src={"images/img_rectangle_8.png"}
                                    className="h-[5.25px] xl:h-[5px] lg:h-[5px] 2xl:h-[6px] 3xl:h-[7px] object-contain w-[100%]"
                                    alt="Rectangle"
                                  />
                                </Column>
                              </Column>
                              <Image
                                src={"images/img_vector_69.svg"}
                                className="absolute bottom-[5%] h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] object-contain right-[13%] w-[61%]"
                                alt="Vector"
                              />
                            </Stack>
                            <Stack className="absolute lg:h-[15px] xl:h-[18px] h-[19.18px] 2xl:h-[20px] 3xl:h-[24px] inset-[0] justify-center m-[auto] w-[76%]">
                              <Stack className="absolute lg:h-[15px] xl:h-[18px] h-[19.18px] 2xl:h-[20px] 3xl:h-[24px] inset-[0] w-[100%]">
                                <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                                  <Column className="items-center pr-[1px] w-[100%]">
                                    <Stack className="lg:h-[15px] xl:h-[17px] h-[18.82px] 2xl:h-[19px] 3xl:h-[23px] w-[100%]">
                                      <Image
                                        src={"images/img_vector_70.png"}
                                        className="absolute lg:h-[15px] xl:h-[17px] h-[18.75px] 2xl:h-[19px] 3xl:h-[23px] inset-y-[0] my-[auto] object-contain right-[0] w-[45%]"
                                        alt="Vector"
                                      />
                                      <Image
                                        src={"images/img_vector_71.png"}
                                        className="absolute lg:h-[12px] h-[14.76px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] left-[0] object-contain top-[0] w-[65%]"
                                        alt="Vector"
                                      />
                                      <Image
                                        src={"images/img_vector_72.png"}
                                        className="absolute lg:h-[12px] h-[14.76px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] left-[0] object-contain top-[0] w-[65%]"
                                        alt="Vector"
                                      />
                                    </Stack>
                                  </Column>
                                  <Column className="items-end lg:pl-[1px] pl-[2.53px] 2xl:pl-[2px] xl:pl-[2px] 3xl:pl-[3px] w-[100%]">
                                    <Image
                                      src={"images/img_rectangle_9.png"}
                                      className="h-[4.57px] lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] object-contain w-[100%]"
                                      alt="Rectangle"
                                    />
                                  </Column>
                                </Column>
                                <Image
                                  src={"images/img_vector_73.svg"}
                                  className="absolute bottom-[1%] h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] object-contain right-[1%] w-[81%]"
                                  alt="Vector"
                                />
                              </Stack>
                              <Stack className="absolute bottom-[1%] h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] left-[18%] w-[46%]">
                                <Image
                                  src={"images/img_vector_74.png"}
                                  className="absolute h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-[0] object-cover w-[100%]"
                                  alt="Vector"
                                />
                                <Image
                                  src={"images/img_vector_75.png"}
                                  className="absolute h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-[0] object-cover w-[100%]"
                                  alt="Vector"
                                />
                              </Stack>
                            </Stack>
                          </Stack>
                          <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                            Office 365
                          </Text>
                        </Row>
                        <Row className="bg-gray_50 border border-gray_200 border-solid items-center justify-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[23%]">
                          <Image
                            src={"images/img_outlooklogo_2.svg"}
                            className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                            alt="Outlooklogo"
                          />
                          <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                            Outlook
                          </Text>
                        </Row>
                        <Row className="bg-gray_50 border border-gray_200 border-solid items-center justify-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[21%]">
                          <Image
                            src={"images/img_mail1_2.png"}
                            className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                            alt="mail1"
                          />
                          <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                            Others
                          </Text>
                        </Row>
                      </Row>
                    </Column>
                    <Line className="bg-bluegray_50 h-[1px] lg:ml-[42px] xl:ml-[48px] ml-[54px] 3xl:ml-[64px] rotate-[-90deg] w-[1px]" />
                    <Column className="items-start mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[41px] xl:ml-[47px] ml-[53px] 3xl:ml-[63px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[34%]">
                      <Column className="items-start lg:px-[25px] xl:px-[29px] px-[33px] 3xl:px-[39px] w-[100%]">
                        <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]">
                          Bring your emails into CRM
                        </Text>
                      </Column>
                      <Text className="font-normal lg:ml-[38px] xl:ml-[43px] ml-[49px] 3xl:ml-[58px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                        Select your email provider
                      </Text>
                      <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                        <Row className="bg-gray_50 border border-gray_200 border-solid items-center justify-start lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[55%]">
                          <Image
                            src={"images/img_googlecalendar_2.svg"}
                            className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                            alt="googlecalendar"
                          />
                          <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                            Google Calender
                          </Text>
                        </Row>
                        <Row className="bg-gray_50 border border-gray_200 border-solid items-center justify-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[39%]">
                          <Stack className="lg:h-[16px] xl:h-[19px] h-[20.49px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] w-[24%]">
                            <Stack className="absolute lg:h-[16px] xl:h-[19px] h-[20.49px] 2xl:h-[21px] 3xl:h-[25px] inset-[0] opacity-op2 w-[100%]">
                              <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                                <Column className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] items-center w-[100%]">
                                  <Image
                                    src={"images/defaultNoData.png"}
                                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] object-cover lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                                    alt="Vector"
                                  />
                                </Column>
                                <Column className="items-end lg:pl-[3px] pl-[4.74px] 2xl:pl-[4px] xl:pl-[4px] 3xl:pl-[5px] pr-[1.99px] 2xl:pr-[1px] xl:pr-[1px] lg:pr-[1px] 3xl:pr-[2px] w-[100%]">
                                  <Image
                                    src={"images/img_rectangle_10.png"}
                                    className="h-[5.25px] xl:h-[5px] lg:h-[5px] 2xl:h-[6px] 3xl:h-[7px] object-contain w-[100%]"
                                    alt="Rectangle"
                                  />
                                </Column>
                              </Column>
                              <Image
                                src={"images/img_vector_76.svg"}
                                className="absolute bottom-[5%] h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] object-contain right-[13%] w-[61%]"
                                alt="Vector"
                              />
                            </Stack>
                            <Stack className="absolute lg:h-[15px] xl:h-[18px] h-[19.18px] 2xl:h-[20px] 3xl:h-[24px] inset-[0] justify-center m-[auto] w-[76%]">
                              <Stack className="absolute lg:h-[15px] xl:h-[18px] h-[19.18px] 2xl:h-[20px] 3xl:h-[24px] inset-[0] w-[100%]">
                                <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                                  <Column className="items-center pr-[1px] w-[100%]">
                                    <Stack className="lg:h-[15px] xl:h-[17px] h-[18.82px] 2xl:h-[19px] 3xl:h-[23px] w-[100%]">
                                      <Image
                                        src={"images/img_vector_77.png"}
                                        className="absolute lg:h-[15px] xl:h-[17px] h-[18.75px] 2xl:h-[19px] 3xl:h-[23px] inset-y-[0] my-[auto] object-contain right-[0] w-[45%]"
                                        alt="Vector"
                                      />
                                      <Image
                                        src={"images/img_vector_78.png"}
                                        className="absolute lg:h-[12px] h-[14.76px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] left-[0] object-contain top-[0] w-[65%]"
                                        alt="Vector"
                                      />
                                      <Image
                                        src={"images/img_vector_79.png"}
                                        className="absolute lg:h-[12px] h-[14.76px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] left-[0] object-contain top-[0] w-[65%]"
                                        alt="Vector"
                                      />
                                    </Stack>
                                  </Column>
                                  <Column className="items-end lg:pl-[1px] pl-[2.53px] 2xl:pl-[2px] xl:pl-[2px] 3xl:pl-[3px] w-[100%]">
                                    <Image
                                      src={"images/img_rectangle_11.png"}
                                      className="h-[4.57px] lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] object-contain w-[100%]"
                                      alt="Rectangle"
                                    />
                                  </Column>
                                </Column>
                                <Image
                                  src={"images/img_vector_80.svg"}
                                  className="absolute bottom-[1%] h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] object-contain right-[1%] w-[81%]"
                                  alt="Vector"
                                />
                              </Stack>
                              <Stack className="absolute bottom-[1%] h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] left-[18%] w-[46%]">
                                <Image
                                  src={"images/img_vector_81.png"}
                                  className="absolute h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-[0] object-cover w-[100%]"
                                  alt="Vector"
                                />
                                <Image
                                  src={"images/img_vector_82.png"}
                                  className="absolute h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-[0] object-cover w-[100%]"
                                  alt="Vector"
                                />
                              </Stack>
                            </Stack>
                          </Stack>
                          <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                            Office 365
                          </Text>
                        </Row>
                      </Row>
                    </Column>
                  </Row>
                </Column>
                <Column className="items-center justify-start lg:mb-[495px] xl:mb-[566px] mb-[637px] 3xl:mb-[764px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] w-[33%]">
                  <Stack className="lg:h-[25px] xl:h-[28px] h-[31px] 2xl:h-[32px] 3xl:h-[38px] w-[100%]">
                    <Line className="absolute bg-bluegray_400 bottom-[52%] h-[1px] inset-x-[0] top-[48%] w-[100%]" />
                    <Input
                      className="bg-transparent border-0 font-normal not-italic p-[0] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 w-[100%]"
                      WrapClassName="2xl:pl-[17px] 2xl:py-[11px] 3xl:ml-[133px] 3xl:pl-[21px] 3xl:py-[14px] absolute bg-gray_50 border border-gray_200 border-solid flex left-[26%] lg:ml-[86px] lg:pl-[13px] lg:py-[9px] ml-[111px] pb-[11.66px] pl-[17.55px] pr-[0] pt-[11.67px] rounded-radius4 w-[39%] xl:ml-[98px] xl:pl-[15px] xl:py-[10px]"
                      name="Configure widge"
                      placeholder="Configure widgets"
                      prefix={
                        <Image
                          src={"images/img_vector_83.svg"}
                          className="w-[16.37px] absolute lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px] my-[auto]"
                          alt="Vector"
                        />
                      }
                    ></Input>
                  </Stack>
                  <Column className="bg-white_A700 items-start justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:pb-[32px] xl:pb-[37px] pb-[42px] 3xl:pb-[50px] xl:pt-[10px] pt-[12px] 3xl:pt-[14px] lg:pt-[9px] rounded-radius8 w-[100%]">
                    <Row className="items-center justify-start lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] w-[37%]">
                      <Image
                        src={"images/img_group3_5.svg"}
                        className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                        alt="Group3"
                      />
                      <Text className="font-semibold 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                        Freddy AI Insights
                      </Text>
                    </Row>
                    <Column className="items-center xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]">
                      <Line className="bg-bluegray_50 h-[1px] w-[100%]" />
                      <Text className="font-normal lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                        Freddy doesn’t have any insights for now. But it will
                        soon
                      </Text>
                    </Column>
                  </Column>
                </Column>
              </Row>
            </Column>
          </Stack>
        </Row>
      </Column>
    </>
  );
};

export default AddMeetingPage;
