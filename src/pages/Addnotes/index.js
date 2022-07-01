import React from "react";

import {
  Row,
  Column,
  Image,
  Stack,
  Text,
  Input,
  List,
  Line,
  Button,
} from "components";

const AddnotesPage = () => {
  return (
    <>
      <Row className="bg-bluegray_100 font-sourcesanspro items-center mx-[auto] w-[100%]">
        <aside className="items-center lg:pb-[15px] xl:pb-[17px] pb-[20px] 3xl:pb-[24px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[7%]">
          <Column className="">
            <Image
              src={"images/img_group_8.svg"}
              className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
              alt="Group"
            />
            <Image
              src={"images/img_frame407_5.svg"}
              className="3xl:h-[1075px] lg:h-[697px] xl:h-[797px] h-[895px] 2xl:h-[896px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] object-contain w-[100%]"
              alt="Frame407"
            />
          </Column>
        </aside>
        <Column className="items-center lg:pb-[21px] xl:pb-[24px] pb-[27px] 3xl:pb-[32px] w-[93%]">
          <Stack className="lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] w-[100%]">
            <div className="absolute bg-white_A700 border border-indigo_50 border-solid lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] inset-[0] w-[100%]"></div>
            <Stack className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] inset-[0] justify-center m-[auto] w-[98%]">
              <Row className="absolute items-center justify-between pr-[1px] right-[0] w-[89%]">
                <Text className="border border-bluegray_201 border-solid font-normal leading-[normal] not-italic lg:pl-[6px] xl:pl-[7px] pl-[8px] 3xl:pl-[9px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_400 text-left w-[38%]">
                  Search by contact
                </Text>
                <Row className="font-inter items-center justify-between lg:ml-[336px] xl:ml-[384px] ml-[432px] 3xl:ml-[518px] w-[25%]">
                  <Image
                    src={"images/img_group5_5.svg"}
                    className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    alt="Group5"
                  />
                  <Image
                    src={"images/img_group4_5.svg"}
                    className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    alt="Group4"
                  />
                  <Image
                    src={"images/img_group3_9.svg"}
                    className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    alt="Group3"
                  />
                  <Column className="bg-red_600 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] items-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:my-[1px] lg:my-[1px] my-[2px] lg:pb-[3px] xl:pb-[4px] pb-[5px] 3xl:pb-[6px] lg:pt-[6px] xl:pt-[7px] pt-[8px] 3xl:pt-[9px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] rounded-radius50 lg:w-[28px] xl:w-[32px] w-[36px] 3xl:w-[43px]">
                    <Text className="font-bold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 tracking-ls1 w-[auto]">
                      1
                    </Text>
                  </Column>
                  <Column className="bg-amber_100 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] 3xl:pb-[10px] lg:pb-[7px] xl:pb-[8px] pb-[9px] lg:pt-[6px] xl:pt-[7px] pt-[8px] 3xl:pt-[9px] lg:px-[10px] xl:px-[11px] px-[13px] 3xl:px-[15px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
                    <Text className="font-bold lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-amber_500 tracking-ls1 w-[auto]">
                      S
                    </Text>
                  </Column>
                </Row>
              </Row>
              <Row className="absolute border border-bluegray_201 border-solid items-center justify-start left-[0] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[11%]">
                <Image
                  src={"images/img_usercircleout_3.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="usercircleOut"
                />
                <Text className="font-semibold mb-[1px] xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_701 w-[auto]">
                  Contacts
                </Text>
                <Image
                  src={"images/img_angledownoutl_8.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="angledownOutl"
                />
              </Row>
            </Stack>
          </Stack>
          <header className="w-[100%]">
            <Row className="bg-gray_100 border border-indigo_50 border-solid items-center justify-end lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] lg:py-[5px] xl:py-[6px] py-[7.5px] 2xl:py-[7px] 3xl:py-[9px] w-[100%]">
              <Text className="font-normal 3xl:my-[10px] lg:my-[6px] xl:my-[7px] my-[8.5px] 2xl:my-[8px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                Contacts
              </Text>
              <Image
                src={"images/img_angleleftbou_4.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[5px] xl:mb-[6px] mb-[7.5px] 2xl:mb-[7px] 3xl:mb-[9px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] mt-[8.5px] 2xl:mt-[8px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="angleleftbOu"
              />
              <Text className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] 3xl:my-[10px] lg:my-[6px] xl:my-[7px] my-[8.5px] 2xl:my-[8px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_700 w-[auto]">
                Jane Sampleton
              </Text>
              <Row className="items-center justify-center lg:ml-[246px] xl:ml-[281px] ml-[317px] 3xl:ml-[380px] w-[57%]">
                <Input
                  className="bg-transparent border-0 font-normal not-italic p-[0] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 w-[100%]"
                  WrapClassName="2xl:py-[16px] 3xl:pl-[12px] 3xl:py-[19px] bg-white_A700 border border-gray_200 border-solid flex lg:pl-[7px] lg:py-[12px] pl-[10px] pr-[0] py-[16.5px] rounded-radius4 w-[11%] xl:pl-[8px] xl:py-[14px]"
                  name="Email"
                  placeholder="Email"
                  prefix={
                    <Image
                      src={"images/img_vector_116.svg"}
                      className="w-[20px] lg:w-[15px] xl:w-[17px] 3xl:w-[24px] my-[auto]"
                      alt="Vector"
                    />
                  }
                ></Input>
                <List
                  className="gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-2 min-h-[auto] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[30%]"
                  orientation="horizontal"
                >
                  <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-evenly lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[100%]">
                    <Image
                      src={"images/img_phoneoutline.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="phoneOutline"
                    />
                    <Text className="cursor-pointer hover:font-normal font-normal lg:h-[18px] xl:h-[21px] h-[23px] 2xl:h-[24px] 3xl:h-[28px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                      Call
                    </Text>
                    <Image
                      src={"images/img_angledownsoli_6.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="angledownSoli"
                    />
                  </Row>
                  <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-evenly lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[100%]">
                    <Image
                      src={"images/img_commentaltmes.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="commentaltmes"
                    />
                    <Text className="cursor-pointer hover:font-normal font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                      SMS
                    </Text>
                    <Image
                      src={"images/img_angledownsoli_7.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="angledownSoli"
                    />
                  </Row>
                </List>
                <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-center ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[10%]">
                  <Image
                    src={"images/img_addtask1_4.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="addtask1"
                  />
                  <Text className="cursor-pointer hover:font-normal font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                    Task
                  </Text>
                </Row>
                <List
                  className="gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-2 min-h-[auto] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[37%]"
                  orientation="horizontal"
                >
                  <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-evenly lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[100%]">
                    <Image
                      src={"images/img_calenderoutlin.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="calenderOutlin"
                    />
                    <Text className="cursor-pointer hover:font-normal font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                      Meeting
                    </Text>
                    <Image
                      src={"images/img_angledownsoli_8.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="angledownSoli"
                    />
                  </Row>
                  <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-evenly lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[100%]">
                    <Image
                      src={"images/img_dollaraltoutl.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="dollaraltOutl"
                    />
                    <Text className="cursor-pointer hover:font-normal font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                      Add deal
                    </Text>
                    <Image
                      src={"images/img_angledownsoli_9.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="angledownSoli"
                    />
                  </Row>
                </List>
                <Image
                  src={"images/img_frame420_1.svg"}
                  className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain rounded-radius4 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  alt="Frame420"
                />
              </Row>
            </Row>
          </header>
          <Column className="bg-bluegray_50 items-start justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:pb-[224px] xl:pb-[256px] pb-[288px] 3xl:pb-[345px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] rounded-radius4 w-[99%]">
            <Row className="items-start justify-start lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] w-[52%]">
              <Image
                src={"images/img_ellipse10_2.png"}
                className="lg:h-[55px] xl:h-[63px] h-[70px] 2xl:h-[71px] 3xl:h-[85px] object-contain rounded-radius50 w-[auto]"
                alt="Ellipse10"
              />
              <Row className="items-start justify-center lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[40%]">
                <Column className="items-start justify-start w-[74%]">
                  <Column className="items-center w-[100%]">
                    <Row className="items-center justify-evenly w-[100%]">
                      <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_901 w-[auto]">
                        Jane Sampleton
                      </Text>
                      <Image
                        src={"images/img_frame470.svg"}
                        className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] object-contain w-[35%]"
                        alt="Frame470"
                      />
                    </Row>
                  </Column>
                  <Row className="items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[90%]">
                    <Image
                      src={"images/img_locationpoint.svg"}
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                      alt="locationpoint"
                    />
                    <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-blue_800 w-[auto]">
                      Galveston, Texas, US
                    </Text>
                    <Image
                      src={"images/img_frame420_2.svg"}
                      className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] object-contain rounded-radius4 lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                      alt="Frame420"
                    />
                  </Row>
                </Column>
                <Line className="bg-bluegray_100 h-[2px] lg:mb-[13px] xl:mb-[15px] mb-[17px] 3xl:mb-[20px] lg:ml-[12px] xl:ml-[14px] ml-[16.67px] 2xl:ml-[16px] 3xl:ml-[20px] rotate-[-90deg] w-[1%]" />
                <Column className="items-start justify-start lg:mb-[17px] xl:mb-[19px] mb-[22px] 3xl:mb-[26px] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] w-[14%]">
                  <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                    Score
                  </Text>
                  <Text className="font-bold lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] xl:mt-[3px] lg:mt-[3px] mt-[4px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_901 w-[auto]">
                    82
                  </Text>
                </Column>
              </Row>
              <Column className="items-center justify-start lg:mb-[17px] xl:mb-[19px] mb-[22px] 3xl:mb-[26px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] w-[17%]">
                <Row className="items-center justify-evenly w-[97%]">
                  <Text className="font-semibold my-[1px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                    Customer fit
                  </Text>
                  <Image
                    src={"images/img_infocircleout_2.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="infocircleOut"
                  />
                </Row>
                <Image
                  src={"images/img_frame474.svg"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:mt-[3px] lg:mt-[3px] mt-[4px] object-cover w-[100%]"
                  alt="Frame474"
                />
              </Column>
              <Row className="items-center justify-evenly lg:mb-[35px] xl:mb-[40px] mb-[46px] 3xl:mb-[55px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] w-[25%]">
                <Text className="font-semibold my-[1px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 w-[auto]">
                  Show scoring factors
                </Text>
                <Image
                  src={"images/img_infocircleout_3.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="infocircleOut"
                />
              </Row>
            </Row>
            <Column className="items-center lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]">
              <Row className="items-start justify-start lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:pr-[559px] xl:pr-[639px] pr-[719px] 3xl:pr-[863px] w-[100%]">
                <Column className="items-start justify-start w-[31%]">
                  <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                    Job title
                  </Text>
                  <Text className="font-semibold lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]">
                    Educational Specialist
                  </Text>
                  <Text className="font-normal lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                    Accounts
                  </Text>
                  <Text className="font-semibold lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                    Not available
                  </Text>
                  <Text className="font-normal lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                    Emails
                  </Text>
                  <Text className="font-semibold lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 w-[auto]">
                    janesampleton@mail.com
                  </Text>
                  <Column className="items-start justify-start lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[59%]">
                    <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                      Work
                    </Text>
                    <Text className="font-semibold lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 w-[auto]">
                      +123456786777
                    </Text>
                  </Column>
                  <Column className="items-start justify-start lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[45%]">
                    <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                      Sales owner
                    </Text>
                    <Text className="font-semibold lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]">
                      Jemee Tala
                    </Text>
                  </Column>
                  <Column className="items-start justify-start lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[34%]">
                    <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                      Tags
                    </Text>
                    <Column className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]">
                      <Button className="bg-bluegray_600 font-normal not-italic lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] rounded-radius4 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[100%]">
                        Contact
                      </Button>
                    </Column>
                  </Column>
                </Column>
                <Column className="bg-white_A700 items-center justify-start lg:mb-[192px] xl:mb-[220px] mb-[248px] 3xl:mb-[297px] 3xl:ml-[109px] lg:ml-[70px] xl:ml-[80px] ml-[91px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius8 w-[53%]">
                  <Column className="border border-bluegray_50 border-solid items-center justify-start 3xl:pb-[110px] lg:pb-[71px] xl:pb-[81px] pb-[92px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[104px] xl:pr-[119px] pr-[134px] 3xl:pr-[160px] xl:pt-[10px] pt-[12px] 3xl:pt-[14px] lg:pt-[9px] rounded-radius6 w-[90%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                      Type your notes here...
                    </Text>
                  </Column>
                  <Line className="bg-bluegray_50 h-[1px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]" />
                  <Text className="font-semibold lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                    View All notes
                  </Text>
                </Column>
              </Row>
            </Column>
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default AddnotesPage;
