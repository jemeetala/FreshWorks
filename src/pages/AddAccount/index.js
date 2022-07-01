import React from "react";

import {
  Column,
  Row,
  Image,
  Stack,
  Text,
  Button,
  List,
  CheckBox,
  Input,
  Line,
} from "components";

const AddAccountPage = () => {
  return (
    <>
      <Column className="bg-gray_900_d8 font-sourcesanspro items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-evenly w-[100%]">
          <aside className="items-center lg:pb-[30px] xl:pb-[34px] pb-[39px] 3xl:pb-[46px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[7%]">
            <Column className="">
              <Image
                src={"images/img_group.svg"}
                className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                alt="Group"
              />
              <Image
                src={"images/img_frame407.svg"}
                className="3xl:h-[1075px] lg:h-[697px] xl:h-[797px] h-[895px] 2xl:h-[896px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] object-contain w-[100%]"
                alt="Frame407"
              />
            </Column>
          </aside>
          <Stack className="h-[1024px] 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[797px] xl:h-[911px] w-[93%]">
            <Stack className="absolute h-[1024px] 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[797px] xl:h-[911px] inset-[0] w-[100%]">
              <div className="absolute bg-white_A700 border border-indigo_50 border-solid lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] inset-x-[0] top-[0] w-[100%]"></div>
              <header className="absolute top-[7%] w-[100%]">
                <Row className="bg-gray_100 border border-indigo_50 border-solid items-center justify-end lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] lg:py-[5px] xl:py-[6px] py-[7.5px] 2xl:py-[7px] 3xl:py-[9px] w-[100%]">
                  <Text className="font-normal 3xl:my-[10px] lg:my-[6px] xl:my-[7px] my-[8.5px] 2xl:my-[8px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                    Accounts
                  </Text>
                  <Row className="items-center justify-center ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[32%]">
                    <Image
                      src={"images/img_angleleftbou.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[5px] xl:mb-[6px] mb-[7.5px] 2xl:mb-[7px] 3xl:mb-[9px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] mt-[8.5px] 2xl:mt-[8px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="angleleftbOu"
                    />
                    <Text className="cursor-pointer hover:font-normal font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] 3xl:my-[10px] lg:my-[6px] xl:my-[7px] my-[8.5px] 2xl:my-[8px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_700 w-[auto]">
                      My Accounts (03)
                    </Text>
                    <Row className="bg-indigo_51 border border-blue_800 border-solid items-center justify-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:pl-[14px] xl:pl-[16px] pl-[18px] 3xl:pl-[21px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] 3xl:py-[10px] lg:py-[6px] xl:py-[7px] py-[8.5px] 2xl:py-[8px] rounded-radius4 w-[33%]">
                      <Image
                        src={"images/img_vector.svg"}
                        className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:my-[2px] my-[3.5px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] object-contain w-[19%]"
                        alt="Vector"
                      />
                      <Text className="cursor-pointer hover:font-normal font-normal xl:ml-[10px] ml-[11.99px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 hover:text-bluegray_700 w-[auto]">
                        My Accounts
                      </Text>
                    </Row>
                    <Row className="bg-indigo_51 border border-blue_800 border-solid items-center justify-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:pl-[14px] xl:pl-[16px] pl-[18px] 3xl:pl-[21px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] 3xl:py-[10px] lg:py-[6px] xl:py-[7px] py-[8.5px] 2xl:py-[8px] rounded-radius4 w-[19%]">
                      <Image
                        src={"images/img_vector_1.svg"}
                        className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:my-[2px] my-[3.5px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] object-contain w-[43%]"
                        alt="Vector"
                      />
                      <Text className="cursor-pointer hover:font-normal font-normal xl:ml-[10px] ml-[11.99px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 hover:text-bluegray_700 w-[auto]">
                        All
                      </Text>
                    </Row>
                  </Row>
                  <Row className="items-center justify-center lg:ml-[262px] xl:ml-[300px] ml-[338px] 3xl:ml-[405px] w-[36%]">
                    <Row className="bg-bluegray_900 border border-gray_200 border-solid items-center justify-start lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[17px] xl:pr-[20px] pr-[22.8px] 2xl:pr-[22px] 3xl:pr-[27px] 3xl:py-[10px] lg:py-[6px] xl:py-[7px] py-[8.5px] 2xl:py-[8px] rounded-radius4 w-[30%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
                        Add account
                      </Text>
                      <Image
                        src={"images/img_vector_2.svg"}
                        className="lg:h-[5px] h-[6.2px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:ml-[13px] xl:ml-[14px] ml-[16.8px] 2xl:ml-[16px] 3xl:ml-[20px] 3xl:my-[10px] lg:my-[6px] xl:my-[7px] my-[8.4px] 2xl:my-[8px] object-contain w-[10%]"
                        alt="Vector"
                      />
                    </Row>
                    <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-center ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 w-[37%]">
                      <Image
                        src={"images/img_webgridaltou.svg"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="webgridaltOu"
                      />
                      <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                        Edit coumns
                      </Text>
                      <Image
                        src={"images/img_angledownsoli.svg"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="angledownSoli"
                      />
                    </Row>
                    <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-center ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 w-[29%]">
                      <Image
                        src={"images/img_filteroutline.svg"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="filterOutline"
                      />
                      <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                        Filters
                      </Text>
                      <Text className="bg-blue_800 font-bold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[1px] lg:my-[1px] my-[2px] xl:pl-[3px] pl-[4px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] lg:px-[3px] py-[0] rounded-radius8 xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                        01
                      </Text>
                    </Row>
                  </Row>
                </Row>
              </header>
              <Column className="absolute items-start justify-start top-[12%] w-[100%]">
                <Column className="items-center w-[100%]">
                  <Row className="items-center justify-evenly w-[100%]">
                    <Stack className="lg:h-[265px] xl:h-[303px] h-[340px] 2xl:h-[341px] 3xl:h-[409px] w-[24%]">
                      <Stack className="absolute lg:h-[265px] xl:h-[303px] h-[340px] 2xl:h-[341px] 3xl:h-[409px] inset-[0] w-[100%]">
                        <Row className="absolute inset-[0] items-center justify-evenly w-[100%]">
                          <Image
                            src={"images/img_column.svg"}
                            className="lg:h-[265px] xl:h-[303px] h-[340px] 2xl:h-[341px] 3xl:h-[409px] object-contain w-[20%]"
                            alt="Column"
                          />
                          <Column className="items-start w-[80%]">
                            <Button
                              className="2xl:py-[15px] 3xl:pl-[67px] 3xl:py-[18px] bg-gray_100 border border-gray_200 border-solid flex items-center justify-between lg:pl-[43px] lg:py-[12px] pb-[15.49px] pl-[56px] pr-[0] pt-[15.5px] text-center w-[100%] xl:pl-[49px] xl:py-[13px]"
                              leftIcon={
                                <Image
                                  src={"images/img_vector_3.svg"}
                                  className="w-[10.01px] text-center lg:w-[7px] xl:w-[8px] 2xl:w-[10px] 3xl:w-[12px]"
                                  alt="Vector"
                                />
                              }
                            >
                              <div className="bg-transparent">""</div>
                            </Button>
                            <Column className="items-center w-[100%]">
                              <List
                                className="gap-[0] min-h-[auto] w-[100%]"
                                orientation="vertical"
                              >
                                <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-start my-[0] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] 3xl:pr-[109px] lg:pr-[71px] xl:pr-[81px] pr-[91.5px] 2xl:pr-[91px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                                  <div className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                                  <Column className="items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[66%]">
                                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                                      Jemee
                                    </Text>
                                    <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                                      Jemee Tala
                                    </Text>
                                  </Column>
                                </Row>
                                <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-start my-[0] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] 3xl:pr-[109px] lg:pr-[71px] xl:pr-[81px] pr-[91.5px] 2xl:pr-[91px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                                  <div className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                                  <Column className="items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[66%]">
                                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                                      Widgezts.io
                                    </Text>
                                    <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                                      Jemee Tala
                                    </Text>
                                  </Column>
                                </Row>
                                <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-start my-[0] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] 3xl:pr-[109px] lg:pr-[71px] xl:pr-[81px] pr-[91.5px] 2xl:pr-[91px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                                  <div className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                                  <Column className="items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[66%]">
                                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                                      Lead
                                    </Text>
                                    <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                                      Jemee Tala
                                    </Text>
                                  </Column>
                                </Row>
                              </List>
                            </Column>
                          </Column>
                        </Row>
                        <CheckBox
                          className="absolute font-semibold left-[7%] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 top-[4%] uppercase w-[28%]"
                          inputClassName="2xl:h-[23px] 3xl:h-[27px] 3xl:w-[26px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[22px] lg:h-[18px] lg:w-[17px] rounded-radius25 w-[22px] xl:h-[20px] xl:w-[19px] mr-[5px]"
                          name="Group66"
                          label="Name"
                        ></CheckBox>
                      </Stack>
                      <Column className="absolute bottom-[11%] font-inter items-center justify-start left-[7%] w-[29%]">
                        <CheckBox
                          className="font-bold lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[98%]"
                          inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                          name="Group67"
                          label="Je"
                        ></CheckBox>
                        <CheckBox
                          className="font-bold lg:mt-[55px] xl:mt-[63px] mt-[71px] 3xl:mt-[85px] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[100%]"
                          inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                          name="Group68"
                          label="Wi"
                        ></CheckBox>
                        <CheckBox
                          className="font-bold lg:mt-[55px] xl:mt-[63px] mt-[71px] 3xl:mt-[85px] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[98%]"
                          inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                          name="Group69"
                          label="Le"
                        ></CheckBox>
                      </Column>
                    </Stack>
                    <Column className="items-start w-[12%]">
                      <Column className="items-center w-[100%]">
                        <Row className="bg-gray_100 border border-gray_200 border-solid items-center justify-evenly xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[5px] xl:pr-[6px] pr-[7.59px] 2xl:pr-[7px] 3xl:pr-[9px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] w-[100%]">
                          <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                            Open deals amou...
                          </Text>
                          <Image
                            src={"images/img_vector_4.svg"}
                            className="lg:h-[12px] xl:h-[14px] h-[15.01px] 2xl:h-[16px] 3xl:h-[19px] mb-[3.49px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] mt-[3.5px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] object-contain w-[7%]"
                            alt="Vector"
                          />
                        </Row>
                      </Column>
                      <Input
                        className="bg-transparent border-0 font-semibold xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 w-[100%]"
                        WrapClassName="bg-white_A700 border border-gray_200 border-solid w-[100%]"
                        name="Group18"
                        placeholder="$200"
                      ></Input>
                      <Input
                        className="bg-transparent border-0 font-semibold xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 w-[100%]"
                        WrapClassName="bg-white_A700 border border-gray_200 border-solid w-[100%]"
                        name="Group17"
                        placeholder="--"
                      ></Input>
                      <Input
                        className="bg-transparent border-0 font-semibold xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 w-[100%]"
                        WrapClassName="bg-white_A700 border border-gray_200 border-solid w-[100%]"
                        name="Group16"
                        placeholder="--"
                      ></Input>
                    </Column>
                    <Column className="items-start w-[12%]">
                      <Column className="items-center w-[100%]">
                        <Row className="bg-gray_100 border border-gray_200 border-solid items-center justify-end xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] pr-[2.59px] 2xl:pr-[2px] xl:pr-[2px] lg:pr-[2px] 3xl:pr-[3px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] w-[100%]">
                          <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                            last contacted ti...
                          </Text>
                          <Image
                            src={"images/img_vector_5.svg"}
                            className="lg:h-[12px] xl:h-[14px] h-[15.01px] 2xl:h-[16px] 3xl:h-[19px] mb-[3.49px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] mt-[3.5px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] object-contain w-[7%]"
                            alt="Vector"
                          />
                        </Row>
                      </Column>
                      <Input
                        className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 w-[100%]"
                        WrapClassName="bg-white_A700 border border-gray_200 border-solid w-[100%]"
                        name="Group22"
                        placeholder="Not Available"
                      ></Input>
                      <Input
                        className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 w-[100%]"
                        WrapClassName="bg-white_A700 border border-gray_200 border-solid w-[100%]"
                        name="Group21"
                        placeholder="13 days ago"
                      ></Input>
                      <Input
                        className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 w-[100%]"
                        WrapClassName="bg-white_A700 border border-gray_200 border-solid w-[100%]"
                        name="Group20"
                        placeholder="Not Available"
                      ></Input>
                    </Column>
                    <Stack className="lg:h-[265px] xl:h-[303px] h-[340px] 2xl:h-[341px] 3xl:h-[409px] ml-[0] w-[25%]">
                      <Column className="absolute items-start justify-start left-[0] w-[50%]">
                        <Input
                          className="bg-transparent border-0 font-semibold xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 uppercase w-[100%]"
                          WrapClassName="bg-gray_100 border border-gray_200 border-solid w-[100%]"
                          name="Group27"
                          placeholder="Related contacts"
                        ></Input>
                        <Input
                          className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 w-[100%]"
                          WrapClassName="bg-white_A700 border border-gray_200 border-solid w-[100%]"
                          name="Group26"
                          placeholder="--"
                        ></Input>
                        <Column className="font-inter items-center w-[100%]">
                          <Column className="bg-white_A700 border border-gray_200 border-solid items-center justify-start xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] pr-[107.6px] 2xl:pr-[107px] 3xl:pr-[129px] lg:pr-[83px] xl:pr-[95px] lg:py-[20px] xl:py-[23px] py-[26px] 3xl:py-[31px] w-[100%]">
                            <Image
                              src={"images/img_ellipse10.png"}
                              className="lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] mr-[0] object-contain rounded-radius50 w-[auto]"
                              alt="Ellipse10"
                            />
                          </Column>
                          <Column className="bg-white_A700 border border-gray_200 border-solid items-center justify-start xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] pr-[107.6px] 2xl:pr-[107px] 3xl:pr-[129px] lg:pr-[83px] xl:pr-[95px] lg:py-[20px] xl:py-[23px] py-[26px] 3xl:py-[31px] w-[100%]">
                            <Column className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center justify-start mr-[0] pb-[9.8px] lg:pl-[11px] xl:pl-[13px] pl-[14.95px] 2xl:pl-[14px] 3xl:pl-[17px] lg:pr-[13px] xl:pr-[15px] pr-[17.05px] 2xl:pr-[17px] 3xl:pr-[20px] pt-[9.2px] 3xl:py-[11px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]">
                              <Text className="font-bold lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                                J
                              </Text>
                            </Column>
                          </Column>
                        </Column>
                      </Column>
                      <Column className="absolute items-start justify-start right-[0] w-[50%]">
                        <Button
                          className="2xl:pr-[47px] 3xl:pl-[14px] 3xl:pr-[57px] 3xl:py-[19px] bg-gray_100 border border-gray_200 border-solid flex items-center justify-between lg:pl-[9px] lg:pr-[37px] lg:py-[12px] pl-[12px] pr-[47.59px] py-[16px] text-center w-[100%] xl:pl-[10px] xl:pr-[42px] xl:py-[14px]"
                          rightIcon={
                            <Image
                              src={"images/img_vector_6.svg"}
                              className="w-[10.01px] text-center lg:w-[7px] xl:w-[8px] 2xl:w-[10px] 3xl:w-[12px]"
                              alt="Vector"
                            />
                          }
                        >
                          <div className="bg-transparent font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase">
                            sales owner
                          </div>
                        </Button>
                        <Input
                          className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 w-[100%]"
                          WrapClassName="bg-white_A700 border border-gray_200 border-solid w-[100%]"
                          name="Group30"
                          placeholder="Jemee Tala"
                        ></Input>
                        <Input
                          className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 w-[100%]"
                          WrapClassName="bg-white_A700 border border-gray_200 border-solid w-[100%]"
                          name="Group29"
                          placeholder="Jemee Tala"
                        ></Input>
                        <Input
                          className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 w-[100%]"
                          WrapClassName="bg-white_A700 border border-gray_200 border-solid w-[100%]"
                          name="Group28"
                          placeholder="Jemee Tala"
                        ></Input>
                      </Column>
                    </Stack>
                    <Column className="items-start w-[12%]">
                      <Button
                        className="2xl:py-[19px] 3xl:pl-[90px] 3xl:py-[23px] bg-gray_100 border border-gray_200 border-solid flex items-center justify-between lg:pl-[58px] lg:py-[15px] pb-[19.49px] pl-[75px] pr-[0] pt-[19.5px] text-center w-[100%] xl:pl-[66px] xl:py-[17px]"
                        leftIcon={
                          <Image
                            src={"images/img_vector_7.svg"}
                            className="w-[10.01px] text-center lg:w-[7px] xl:w-[8px] 2xl:w-[10px] 3xl:w-[12px]"
                            alt="Vector"
                          />
                        }
                      >
                        <div className="bg-transparent font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase">
                          Website
                        </div>
                      </Button>
                      <Input
                        className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-blue_800 text-blue_800 w-[100%]"
                        WrapClassName="bg-white_A700 border border-gray_200 border-solid w-[100%]"
                        name="Group34"
                        placeholder="www.dhiwise.com"
                      ></Input>
                      <Input
                        className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-blue_800 text-blue_800 w-[100%]"
                        WrapClassName="bg-white_A700 border border-gray_200 border-solid w-[100%]"
                        name="Group33"
                        placeholder="widgetz.io"
                      ></Input>
                      <Input
                        className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 w-[100%]"
                        WrapClassName="bg-white_A700 border border-gray_200 border-solid w-[100%]"
                        name="Group32"
                        placeholder="Not Available"
                      ></Input>
                    </Column>
                    <Column className="items-start w-[10%]">
                      <Button
                        className="2xl:py-[19px] 3xl:pl-[70px] 3xl:py-[23px] bg-gray_100 border border-gray_200 border-solid flex items-center justify-between lg:pl-[45px] lg:py-[15px] pb-[19.49px] pl-[59px] pr-[0] pt-[19.5px] text-center w-[100%] xl:pl-[52px] xl:py-[17px]"
                        leftIcon={
                          <Image
                            src={"images/img_vector_8.svg"}
                            className="w-[10.01px] text-center lg:w-[7px] xl:w-[8px] 2xl:w-[10px] 3xl:w-[12px]"
                            alt="Vector"
                          />
                        }
                      >
                        <div className="bg-transparent font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase">
                          Work
                        </div>
                      </Button>
                      <Input
                        className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-blue_800 text-blue_800 w-[100%]"
                        WrapClassName="bg-white_A700 border border-gray_200 border-solid w-[100%]"
                        name="Group38"
                        placeholder="1234567866"
                      ></Input>
                      <Input
                        className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-blue_800 text-blue_800 w-[100%]"
                        WrapClassName="bg-white_A700 border border-gray_200 border-solid w-[100%]"
                        name="Group37"
                        placeholder="2344566766"
                      ></Input>
                      <Input
                        className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 w-[100%]"
                        WrapClassName="bg-white_A700 border border-gray_200 border-solid w-[100%]"
                        name="Group36"
                        placeholder="Not Available"
                      ></Input>
                    </Column>
                    <Image
                      src={"images/img_column_1.svg"}
                      className="lg:h-[265px] xl:h-[303px] h-[340px] 2xl:h-[341px] 3xl:h-[409px] object-contain w-[4%]"
                      alt="Column"
                    />
                  </Row>
                </Column>
                <Input
                  className="bg-transparent border-0 font-normal not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[16px] xl:py-[19px] py-[21.5px] 2xl:py-[21px] 3xl:py-[25px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_700 text-bluegray_700 w-[100%]"
                  WrapClassName="bg-white_A700 border border-gray_200 border-solid w-[100%]"
                  name="Group11"
                  placeholder="Showing 1-3 of 3"
                ></Input>
              </Column>
              <Row className="absolute items-start justify-evenly right-[0] w-[65%]">
                <Image
                  src={"images/img_frame467.svg"}
                  className="lg:h-[50px] xl:h-[57px] h-[64px] 2xl:h-[65px] 3xl:h-[77px] 3xl:mb-[1098px] lg:mb-[711px] xl:mb-[813px] mb-[915px] lg:mt-[35px] xl:mt-[40px] mt-[45px] 3xl:mt-[54px] object-contain rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] lg:w-[49px] xl:w-[56px] w-[64px] 3xl:w-[76px]"
                  alt="Frame467"
                />
                <Column className="bg-white_A700 items-start justify-start w-[93%]">
                  <Input
                    className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-bluegray_901 text-bluegray_901 w-[100%]"
                    WrapClassName="2xl:pb-[19px] 2xl:pt-[18px] 3xl:pb-[23px] 3xl:pl-[19px] 3xl:pr-[24px] 3xl:pt-[22px] bg-gray_100 border border-indigo_50 border-solid flex lg:pb-[15px] lg:pl-[12px] lg:pr-[15px] lg:pt-[14px] pb-[19.5px] pl-[16px] pr-[20px] pt-[18.5px] w-[100%] xl:pb-[17px] xl:pl-[14px] xl:pr-[17px] xl:pt-[16px]"
                    name="Group53"
                    placeholder="Add Account"
                    suffix={
                      <Image
                        src={"images/img_vector_9.svg"}
                        className="w-[16.01px] h-[16.01px] lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px] my-[auto]"
                        alt="Vector"
                      />
                    }
                  ></Input>
                  <Column className="items-center w-[100%]">
                    <Row className="items-start justify-start lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] w-[100%]">
                      <Column className="bg-white_A700 border border-gray_200 border-solid items-start justify-start lg:pb-[607px] xl:pb-[694px] pb-[781px] 3xl:pb-[937px] lg:pt-[12px] xl:pt-[14px] pt-[16px] 3xl:pt-[19px] w-[37%]">
                        <Column className="items-start lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[100%]">
                          <Input
                            className="bg-transparent border-0 font-normal not-italic p-[0] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                            WrapClassName="2xl:pl-[17px] 2xl:py-[15px] 3xl:pl-[21px] 3xl:py-[18px] bg-white_A700 border border-gray_200 border-solid flex lg:pl-[13px] lg:py-[12px] pb-[15.66px] pl-[17.63px] pr-[0] pt-[15.63px] rounded-radius4 w-[100%] xl:pl-[15px] xl:py-[13px]"
                            name="Group54"
                            placeholder="Search for a field"
                            prefix={
                              <Image
                                src={"images/img_vector_10.svg"}
                                className="w-[16.71px] h-[16.71px] lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[20px] 3xl:h-[21px] my-[auto]"
                                alt="Vector"
                              />
                            }
                          ></Input>
                        </Column>
                        <Row className="bg-teal_50 items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:pr-[126px] xl:pr-[145px] pr-[163px] 3xl:pr-[195px] w-[100%]">
                          <Line className="bg-blue_800 h-[2px] rotate-[-90deg] w-[2%]" />
                          <Text className="font-semibold xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] xl:mt-[3px] lg:mt-[3px] mt-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                            Basic Information
                          </Text>
                        </Row>
                      </Column>
                      <Column className="items-start justify-start lg:mb-[382px] xl:mb-[437px] mb-[492px] 3xl:mb-[590px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[61%]">
                        <Input
                          className="bg-transparent border-0 font-normal not-italic lg:pl-[13px] xl:pl-[15px] pl-[17px] 3xl:pl-[20px] lg:py-[14px] xl:py-[16px] py-[18.5px] 2xl:py-[18px] 3xl:py-[22px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-bluegray_901 text-bluegray_901 w-[100%]"
                          WrapClassName="bg-bluegray_50 w-[100%]"
                          name="Group45"
                          placeholder="Basic Information"
                        ></Input>
                        <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                          <span className="text-black_900 font-sourcesanspro">
                            Name{" "}
                          </span>
                          <span className="text-red_700 font-sourcesanspro">
                            *
                          </span>
                        </Text>
                        <Input
                          className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                          WrapClassName="bg-white_A700 border border-bluegray_100 border-solid lg:mt-[3px] mt-[4px] rounded-radius4 w-[100%] xl:mt-[3px]"
                          name="Group46"
                          placeholder="Enter name"
                        ></Input>
                        <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                          Website
                        </Text>
                        <Input
                          className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                          WrapClassName="2xl:pr-[15px] 3xl:pl-[14px] 3xl:pr-[18px] 3xl:py-[13px] bg-white_A700 border border-bluegray_100 border-solid flex lg:mt-[3px] lg:pl-[9px] lg:pr-[11px] lg:py-[8px] mt-[4px] pl-[12px] pr-[15.34px] py-[11px] rounded-radius4 w-[100%] xl:mt-[3px] xl:pl-[10px] xl:pr-[13px] xl:py-[9px]"
                          name="Group64"
                          placeholder="Enter website"
                          suffix={
                            <Image
                              src={"images/img_vector_11.svg"}
                              className="w-[13.33px] h-[13.33px] lg:w-[10px] lg:h-[11px] xl:w-[11px] xl:h-[12px] 2xl:w-[13px] 2xl:h-[14px] 3xl:w-[16px] 3xl:h-[17px] my-[auto]"
                              alt="Vector"
                            />
                          }
                        ></Input>
                        <Column className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                          <Column className="items-start justify-start w-[100%]">
                            <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                              Phone
                            </Text>
                            <Input
                              className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 w-[100%]"
                              WrapClassName="2xl:pr-[21px] 2xl:py-[12px] 3xl:pl-[19px] 3xl:pr-[26px] 3xl:py-[15px] border border-gray_200 border-solid flex lg:mt-[3px] lg:pl-[12px] lg:pr-[16px] lg:py-[9px] mt-[4px] pl-[16px] pr-[21.66px] py-[12.5px] rounded-radius4 w-[100%] xl:mt-[3px] xl:pl-[14px] xl:pr-[19px] xl:py-[11px]"
                              name="Group65"
                              placeholder="Enter phone number"
                              suffix={
                                <Image
                                  src={"images/img_vector_12.svg"}
                                  className="w-[8.67px] lg:w-[6px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[10px] my-[auto]"
                                  alt="Vector"
                                />
                              }
                            ></Input>
                          </Column>
                          <Column className="items-start justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                            <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                              Sales Owner
                            </Text>
                            <Column className="items-center xl:mt-[3px] lg:mt-[3px] mt-[4px] w-[100%]">
                              <Row className="border border-gray_200 border-solid items-center justify-between lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 w-[100%]">
                                <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                                  Jemee Tala
                                </Text>
                                <Image
                                  src={"images/img_frame466.svg"}
                                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[262px] xl:ml-[299px] ml-[337px] 3xl:ml-[404px] my-[1px] object-contain w-[11%]"
                                  alt="Frame466"
                                />
                              </Row>
                            </Column>
                          </Column>
                        </Column>
                      </Column>
                    </Row>
                    <Row className="bg-gray_100 border border-indigo_50 border-solid items-center justify-center lg:pl-[505px] xl:pl-[578px] pl-[650px] 3xl:pl-[780px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] w-[100%]">
                      <Button className="bg-white_A700 border border-gray_200 border-solid font-normal not-italic xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-center w-[51%]">
                        Cancel
                      </Button>
                      <Button className="bg-bluegray_900 border border-gray_200 border-solid font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[42%]">
                        Save
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Row>
            </Stack>
            <Stack className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] inset-x-[0] mx-[auto] top-[2%] w-[98%]">
              <Row className="absolute items-center justify-between pr-[1px] right-[0] w-[89%]">
                <Row className="border border-bluegray_201 border-solid items-center justify-between pb-[1px] lg:pl-[6px] xl:pl-[7px] pl-[8px] 3xl:pl-[9px] pr-[107px] 3xl:pr-[128px] lg:pr-[83px] xl:pr-[95px] pt-[10px] 3xl:pt-[12px] lg:pt-[7px] xl:pt-[8px] rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] w-[38%]">
                  <Text className="font-normal 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_400 w-[auto]">
                    Search by contact
                  </Text>
                  <Image
                    src={"images/img_anglerightbo.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[145px] xl:ml-[166px] ml-[187px] 3xl:ml-[224px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="anglerightbO"
                  />
                </Row>
                <Row className="font-inter items-center justify-between lg:ml-[336px] xl:ml-[384px] ml-[432px] 3xl:ml-[518px] w-[25%]">
                  <Image
                    src={"images/img_group5.svg"}
                    className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    alt="Group5"
                  />
                  <Image
                    src={"images/img_group4.svg"}
                    className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    alt="Group4"
                  />
                  <Image
                    src={"images/img_group3.svg"}
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
                  src={"images/img_usercircleout.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="usercircleOut"
                />
                <Text className="font-semibold mb-[1px] xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_701 w-[auto]">
                  Contacts
                </Text>
                <Image
                  src={"images/img_angledownoutl.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="angledownOutl"
                />
              </Row>
            </Stack>
          </Stack>
        </Row>
      </Column>
    </>
  );
};

export default AddAccountPage;
