import React from "react";

import {
  Row,
  Column,
  Image,
  Stack,
  Text,
  Input,
  Button,
  CheckBox,
} from "components";

const ProductsPage = () => {
  return (
    <>
      <Row className="bg-bluegray_51 font-sourcesanspro items-center mx-[auto] w-[100%]">
        <aside className="items-center lg:pb-[15px] xl:pb-[17px] pb-[20px] 3xl:pb-[24px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[7%]">
          <Column className="">
            <Image
              src={"images/img_group_1.svg"}
              className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
              alt="Group"
            />
            <Image
              src={"images/img_frame407_1.svg"}
              className="3xl:h-[1075px] lg:h-[697px] xl:h-[797px] h-[895px] 2xl:h-[896px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] object-contain w-[100%]"
              alt="Frame407"
            />
          </Column>
        </aside>
        <Column className="items-start lg:pb-[539px] xl:pb-[617px] pb-[694px] 3xl:pb-[833px] w-[93%]">
          <Column className="items-center w-[100%]">
            <Stack className="lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] w-[100%]">
              <div className="absolute bg-white_A700 border border-indigo_50 border-solid lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] inset-[0] w-[100%]"></div>
              <Stack className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] inset-[0] justify-center m-[auto] w-[98%]">
                <Row className="absolute items-center justify-between pr-[1px] right-[0] w-[89%]">
                  <Text className="border border-bluegray_201 border-solid font-normal leading-[normal] not-italic lg:pl-[6px] xl:pl-[7px] pl-[8px] 3xl:pl-[9px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_400 text-left w-[38%]">
                    Search by contact
                  </Text>
                  <Row className="font-inter items-center justify-between lg:ml-[336px] xl:ml-[384px] ml-[432px] 3xl:ml-[518px] w-[25%]">
                    <Image
                      src={"images/img_group5_1.svg"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Group5"
                    />
                    <Image
                      src={"images/img_group4_1.svg"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Group4"
                    />
                    <Image
                      src={"images/img_group3_2.svg"}
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
                    src={"images/img_usercircleout_1.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="usercircleOut"
                  />
                  <Text className="font-semibold mb-[1px] xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_701 w-[auto]">
                    Contacts
                  </Text>
                  <Image
                    src={"images/img_angledownoutl_2.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="angledownOutl"
                  />
                </Row>
              </Stack>
            </Stack>
            <header className="w-[100%]">
              <Row className="bg-gray_100 border border-indigo_50 border-solid items-center justify-end lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] lg:py-[5px] xl:py-[6px] py-[7.5px] 2xl:py-[7px] 3xl:py-[9px] w-[100%]">
                <Text className="font-normal 3xl:my-[10px] lg:my-[6px] xl:my-[7px] my-[8.5px] 2xl:my-[8px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                  Products
                </Text>
                <Image
                  src={"images/img_angleleftbou_1.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[5px] xl:mb-[6px] mb-[7.5px] 2xl:mb-[7px] 3xl:mb-[9px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] mt-[8.5px] 2xl:mt-[8px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="angleleftbOu"
                />
                <Text className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] 3xl:my-[10px] lg:my-[6px] xl:my-[7px] my-[8.5px] 2xl:my-[8px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_700 w-[auto]">
                  All Products (1)
                </Text>
                <Row className="items-center justify-center lg:ml-[327px] xl:ml-[374px] ml-[421px] 3xl:ml-[505px] w-[50%]">
                  <Input
                    className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                    WrapClassName="2xl:pr-[14px] 3xl:pl-[9px] 3xl:pr-[17px] 3xl:py-[15px] bg-bluegray_900 border border-gray_200 border-solid flex lg:pl-[6px] lg:pr-[11px] lg:py-[10px] pl-[8px] pr-[14.8px] py-[13px] rounded-radius4 w-[19%] xl:pl-[7px] xl:pr-[13px] xl:py-[11px]"
                    name="Add product"
                    placeholder="Add product"
                    suffix={
                      <Image
                        src={"images/img_vector_35.svg"}
                        className="w-[10.4px] lg:w-[8px] xl:w-[9px] 2xl:w-[10px] 3xl:w-[12px] my-[auto]"
                        alt="Vector"
                      />
                    }
                  ></Input>
                  <Input
                    className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 w-[100%]"
                    WrapClassName="2xl:pr-[14px] 3xl:ml-[12px] 3xl:pl-[9px] 3xl:pr-[17px] 3xl:py-[15px] bg-white_A700 border border-gray_200 border-solid flex lg:ml-[7px] lg:pl-[6px] lg:pr-[11px] lg:py-[10px] ml-[10px] pl-[8px] pr-[14.8px] py-[13px] rounded-radius4 w-[21%] xl:ml-[8px] xl:pl-[7px] xl:pr-[13px] xl:py-[11px]"
                    name="Add categories"
                    placeholder="Add categories"
                    suffix={
                      <Image
                        src={"images/img_vector_36.svg"}
                        className="w-[10.4px] lg:w-[8px] xl:w-[9px] 2xl:w-[10px] 3xl:w-[12px] my-[auto]"
                        alt="Vector"
                      />
                    }
                  ></Input>
                  <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-center ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[24%]">
                    <Image
                      src={"images/img_webgridaltou_1.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="webgridaltOu"
                    />
                    <Text className="hover:bg-blue_800 cursor-pointer hover:font-bold font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 hover:text-white_A700 w-[auto]">
                      Edit coumns
                    </Text>
                    <Image
                      src={"images/img_angledownsoli_3.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="angledownSoli"
                    />
                  </Row>
                  <Image
                    src={"images/img_frame420.svg"}
                    className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain rounded-radius4 w-[11%]"
                    alt="Frame420"
                  />
                  <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-evenly ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[18%]">
                    <Image
                      src={"images/img_filteroutline_1.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="filterOutline"
                    />
                    <Text className="hover:bg-blue_800 cursor-pointer hover:font-bold font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 hover:text-white_A700 w-[auto]">
                      Filters
                    </Text>
                    <Text className="bg-blue_800 cursor-pointer hover:font-bold font-bold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[1px] lg:my-[1px] my-[2px] xl:pl-[3px] pl-[4px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] lg:px-[3px] py-[0] rounded-radius8 xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                      01
                    </Text>
                  </Row>
                </Row>
              </Row>
            </header>
            <Row className="items-center justify-evenly w-[100%]">
              <Stack className="lg:h-[112px] xl:h-[129px] h-[144px] 2xl:h-[145px] 3xl:h-[173px] w-[25%]">
                <Stack className="absolute font-sourcesanspro lg:h-[112px] xl:h-[129px] h-[144px] 2xl:h-[145px] 3xl:h-[173px] inset-[0] w-[100%]">
                  <Row className="absolute inset-[0] items-center justify-evenly w-[100%]">
                    <Image
                      src={"images/img_column_2.svg"}
                      className="lg:h-[112px] xl:h-[129px] h-[144px] 2xl:h-[145px] 3xl:h-[173px] object-contain w-[20%]"
                      alt="Column"
                    />
                    <Column className="items-start w-[80%]">
                      <Button
                        className="2xl:py-[15px] 3xl:pl-[67px] 3xl:py-[18px] bg-gray_100 border border-gray_200 border-solid flex items-center justify-between lg:pl-[43px] lg:py-[12px] pb-[15.49px] pl-[56px] pr-[0] pt-[15.5px] text-center w-[100%] xl:pl-[49px] xl:py-[13px]"
                        leftIcon={
                          <Image
                            src={"images/img_vector_37.svg"}
                            className="w-[10.01px] text-center lg:w-[7px] xl:w-[8px] 2xl:w-[10px] 3xl:w-[12px]"
                            alt="Vector"
                          />
                        }
                      >
                        <div className="bg-transparent">""</div>
                      </Button>
                      <Column className="items-center w-[100%]">
                        <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-start xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] 3xl:pr-[117px] lg:pr-[75px] xl:pr-[86px] pr-[97.5px] 2xl:pr-[97px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
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
                      </Column>
                    </Column>
                  </Row>
                  <CheckBox
                    className="absolute font-semibold left-[7%] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 top-[8%] uppercase w-[27%]"
                    inputClassName="2xl:h-[23px] 3xl:h-[27px] 3xl:w-[26px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[22px] lg:h-[18px] lg:w-[17px] rounded-radius25 w-[22px] xl:h-[20px] xl:w-[19px] mr-[5px]"
                    name="Group112"
                    label="Name"
                  ></CheckBox>
                </Stack>
                <CheckBox
                  className="absolute bottom-[25%] font-bold font-inter left-[7%] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[28%]"
                  inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                  name="Group113"
                  label="Je"
                ></CheckBox>
              </Stack>
              <Column className="items-start w-[9%]">
                <Button
                  className="2xl:pr-[46px] 3xl:pl-[14px] 3xl:pr-[55px] 3xl:py-[19px] bg-gray_100 border border-gray_200 border-solid flex items-center justify-between lg:pl-[9px] lg:pr-[35px] lg:py-[12px] pl-[12px] pr-[45.99px] py-[16px] text-center w-[100%] xl:pl-[10px] xl:pr-[40px] xl:py-[14px]"
                  rightIcon={
                    <Image
                      src={"images/img_vector_38.svg"}
                      className="w-[10.01px] text-center lg:w-[7px] xl:w-[8px] 2xl:w-[10px] 3xl:w-[12px]"
                      alt="Vector"
                    />
                  }
                >
                  <div className="bg-transparent font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase">
                    Active
                  </div>
                </Button>
                <Input
                  className="bg-transparent border-0 font-semibold xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 w-[100%]"
                  WrapClassName="bg-white_A700 border border-gray_200 border-solid w-[100%]"
                  name="Yes"
                  placeholder="Yes"
                ></Input>
              </Column>
              <Column className="items-start w-[20%]">
                <Button
                  className="2xl:pr-[88px] 3xl:pl-[14px] 3xl:pr-[105px] 3xl:py-[19px] bg-gray_100 border border-gray_200 border-solid flex items-center justify-between lg:pl-[9px] lg:pr-[68px] lg:py-[12px] pl-[12px] pr-[87.99px] py-[16px] text-center w-[100%] xl:pl-[10px] xl:pr-[78px] xl:py-[14px]"
                  rightIcon={
                    <Image
                      src={"images/img_vector_39.svg"}
                      className="w-[10.01px] text-center lg:w-[7px] xl:w-[8px] 2xl:w-[10px] 3xl:w-[12px]"
                      alt="Vector"
                    />
                  }
                >
                  <div className="bg-transparent font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase">
                    Base currency amount
                  </div>
                </Button>
                <Input
                  className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 w-[100%]"
                  WrapClassName="bg-white_A700 border border-gray_200 border-solid w-[100%]"
                  name="--"
                  placeholder="--"
                ></Input>
              </Column>
              <Column className="items-start w-[11%]">
                <Input
                  className="bg-transparent border-0 font-semibold xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 uppercase w-[100%]"
                  WrapClassName="bg-gray_100 border border-gray_200 border-solid w-[100%]"
                  name="category"
                  placeholder="category"
                ></Input>
                <Input
                  className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 w-[100%]"
                  WrapClassName="bg-white_A700 border border-gray_200 border-solid w-[100%]"
                  name="Hardware"
                  placeholder="Hardware"
                ></Input>
              </Column>
              <Column className="items-start w-[14%]">
                <Button
                  className="2xl:py-[19px] 3xl:pl-[112px] 3xl:py-[23px] bg-gray_100 border border-gray_200 border-solid flex items-center justify-between lg:pl-[73px] lg:py-[15px] pb-[19.49px] pl-[94px] pr-[0] pt-[19.5px] text-center w-[100%] xl:pl-[83px] xl:py-[17px]"
                  leftIcon={
                    <Image
                      src={"images/img_vector_40.svg"}
                      className="w-[10.01px] text-center lg:w-[7px] xl:w-[8px] 2xl:w-[10px] 3xl:w-[12px]"
                      alt="Vector"
                    />
                  }
                >
                  <div className="bg-transparent font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase">
                    created at
                  </div>
                </Button>
                <Input
                  className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 w-[100%]"
                  WrapClassName="bg-white_A700 border border-gray_200 border-solid w-[100%]"
                  name="A few seconds a"
                  placeholder="A few seconds ago"
                ></Input>
              </Column>
              <Column className="items-start w-[16%]">
                <Button
                  className="2xl:py-[19px] 3xl:pl-[112px] 3xl:py-[23px] bg-gray_100 border border-gray_200 border-solid flex items-center justify-between lg:pl-[73px] lg:py-[15px] pb-[19.49px] pl-[94px] pr-[0] pt-[19.5px] text-center w-[100%] xl:pl-[83px] xl:py-[17px]"
                  leftIcon={
                    <Image
                      src={"images/img_vector_41.svg"}
                      className="w-[10.01px] text-center lg:w-[7px] xl:w-[8px] 2xl:w-[10px] 3xl:w-[12px]"
                      alt="Vector"
                    />
                  }
                >
                  <div className="bg-transparent font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase">
                    created by
                  </div>
                </Button>
                <Input
                  className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 w-[100%]"
                  WrapClassName="bg-white_A700 border border-gray_200 border-solid w-[100%]"
                  name="Jemee Tala"
                  placeholder="Jemee Tala"
                ></Input>
              </Column>
              <Image
                src={"images/img_column_3.svg"}
                className="lg:h-[112px] xl:h-[129px] h-[144px] 2xl:h-[145px] 3xl:h-[173px] object-contain w-[4%]"
                alt="Column"
              />
            </Row>
          </Column>
          <Input
            className="bg-transparent border-0 font-normal not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[16px] xl:py-[19px] py-[21.5px] 2xl:py-[21px] 3xl:py-[25px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_700 text-bluegray_700 w-[100%]"
            WrapClassName="bg-white_A700 border border-gray_200 border-solid w-[100%]"
            name="Showing 1-3 of "
            placeholder="Showing 1-3 of 3"
          ></Input>
        </Column>
      </Row>
    </>
  );
};

export default ProductsPage;
