import React from "react";

import AddContactsModal from "modals/AddContacts";
import {
  Row,
  Stack,
  Image,
  Column,
  Text,
  Button,
  CheckBox,
  List,
} from "components";

const ContactsPage = () => {
  const [isOpenAddContactsModal, setAddContactsModal] = React.useState(false);

  function handleOpenAddContactsModal() {
    setAddContactsModal(true);
  }
  function handleCloseAddContactsModal() {
    setAddContactsModal(false);
  }

  return (
    <>
      <Row className="bg-bluegray_51 font-sourcesanspro items-center mx-[auto] w-[100%]">
        <aside className="bg-bluegray_900 h-[1024px] 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[797px] xl:h-[911px] lg:pb-[388px] xl:pb-[444px] pb-[500px] 3xl:pb-[600px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[7%]">
          <Stack className="">
            <Image
              src={"images/img_group181_2.svg"}
              className="absolute lg:h-[389px] xl:h-[445px] h-[500px] 2xl:h-[501px] 3xl:h-[601px] inset-x-[0] object-contain top-[0] w-[100%]"
              alt="Group181"
            />
          </Stack>
        </aside>
        <Column className="items-center w-[93%]">
          <header className="w-[100%]">
            <Row className="bg-white_A700 border border-indigo_50 border-solid items-center justify-start lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[13px] xl:pr-[15px] pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]">
              <Row className="border border-bluegray_201 border-solid items-center justify-center lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[11%]">
                <Image
                  src={"images/img_searchoutline_4.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="searchOutline"
                />
                <Text className="font-semibold xl:ml-[3px] lg:ml-[3px] ml-[4px] mt-[1px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_701 w-[auto]">
                  Contacts
                </Text>
                <Image
                  src={"images/img_angledownoutl_6.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="angledownOutl"
                />
              </Row>
              <Text className="border border-bluegray_201 border-solid font-normal leading-[normal] not-italic 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] pl-[9px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_400 text-left w-[34%]">
                Search your CRM...
              </Text>
              <Image
                src={"images/img_group185.svg"}
                className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[334px] xl:ml-[382px] ml-[430px] 3xl:ml-[516px] object-contain w-[22%]"
                alt="Group185"
              />
            </Row>
          </header>
          <Row className="bg-gray_100 border border-gray_200 border-solid items-center justify-end lg:pb-[5px] xl:pb-[6px] pb-[7px] 3xl:pb-[8px] lg:pl-[14px] xl:pl-[16px] pl-[18px] 3xl:pl-[21px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] lg:pt-[6px] xl:pt-[7px] pt-[8px] 3xl:pt-[9px] w-[100%]">
            <Text className="font-normal 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
              Contacts
            </Text>
            <Row className="items-start justify-center ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] w-[19%]">
              <Image
                src={"images/img_angleleftbou_2.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="angleleftbOu"
              />
              <Text className="font-normal mb-[1px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_700 w-[auto]">
                My Contacts (10)
              </Text>
              <Text className="font-normal mb-[1px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                Save view as
              </Text>
            </Row>
            <Row className="items-center justify-center lg:ml-[413px] xl:ml-[473px] ml-[532px] 3xl:ml-[638px] w-[34%]">
              <Button
                className="2xl:pr-[14px] 3xl:pl-[9px] 3xl:pr-[17px] 3xl:py-[15px] bg-bluegray_900 border border-gray_200 border-solid flex items-center justify-between lg:pl-[6px] lg:pr-[11px] lg:py-[10px] pl-[8px] pr-[14.8px] py-[13px] rounded-radius4 text-center w-[33%] xl:pl-[7px] xl:pr-[13px] xl:py-[11px]"
                onClick={handleOpenAddContactsModal}
                rightIcon={
                  <Image
                    src={"images/img_vector_106.svg"}
                    className="w-[10.4px] text-center lg:w-[8px] xl:w-[9px] 2xl:w-[10px] 3xl:w-[12px]"
                    alt="Vector"
                  />
                }
              >
                <div className="common-pointer bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700">
                  Import Contatcts
                </div>
              </Button>
              <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-center ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[35%]">
                <Image
                  src={"images/img_webgridaltou_2.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="webgridaltOu"
                />
                <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                  Edit coumns
                </Text>
                <Image
                  src={"images/img_angledownsoli_4.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="angledownSoli"
                />
              </Row>
              <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-evenly ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[27%]">
                <Image
                  src={"images/img_filteroutline_2.svg"}
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
          <Row className="bg-gray_100 border border-gray_200 border-solid items-center justify-start lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] xl:pr-[100px] pr-[113px] 3xl:pr-[135px] lg:pr-[87px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] w-[100%]">
            <CheckBox
              className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[7%]"
              inputClassName="2xl:h-[23px] 3xl:h-[27px] 3xl:w-[26px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[22px] lg:h-[18px] lg:w-[17px] rounded-radius25 w-[22px] xl:h-[20px] xl:w-[19px] mr-[5px]"
              name="Group240"
              label="Name"
            ></CheckBox>
            <Image
              src={"images/img_sortoutline.svg"}
              className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
              alt="sortOutline"
            />
            <Row className="items-center justify-center lg:ml-[157px] xl:ml-[179px] ml-[202px] 3xl:ml-[242px] w-[7%]">
              <Image
                src={"images/img_infocircleout_1.svg"}
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                alt="infocircleOut"
              />
              <Text className="font-semibold xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                Score
              </Text>
              <Image
                src={"images/img_sortoutline_1.svg"}
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                alt="sortOutline"
              />
            </Row>
            <Text className="font-semibold lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
              Open deals amou...
            </Text>
            <Image
              src={"images/img_sortoutline_2.svg"}
              className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
              alt="sortOutline"
            />
            <Text className="font-semibold lg:ml-[20px] xl:ml-[23px] ml-[26.25px] 2xl:ml-[26px] 3xl:ml-[31px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
              last contacted ti...
            </Text>
            <Image
              src={"images/img_sortoutline_3.svg"}
              className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
              alt="sortOutline"
            />
            <Text className="font-semibold lg:ml-[16px] xl:ml-[18px] ml-[21.25px] 2xl:ml-[21px] 3xl:ml-[25px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
              sales owner
            </Text>
            <Image
              src={"images/img_sortoutline_4.svg"}
              className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
              alt="sortOutline"
            />
            <Text className="font-semibold lg:ml-[51px] xl:ml-[58px] ml-[66.25px] 2xl:ml-[66px] 3xl:ml-[79px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
              Emails
            </Text>
            <Image
              src={"images/img_sortoutline_5.svg"}
              className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
              alt="sortOutline"
            />
            <Text className="font-semibold ml-[108.25px] 2xl:ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
              Work
            </Text>
            <Image
              src={"images/img_sortoutline_6.svg"}
              className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
              alt="sortOutline"
            />
          </Row>
          <List
            className="gap-[0] min-h-[auto] w-[100%]"
            orientation="vertical"
          >
            <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
              <Stack className="font-inter lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[12%]">
                <CheckBox
                  className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[54%]"
                  inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                  name="Group241"
                  label="R"
                ></CheckBox>
                <Row className="absolute font-sourcesanspro items-center justify-between right-[0] w-[65%]">
                  <div className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                  <Column className="items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[48%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                      Riya D
                    </Text>
                    <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      Lead
                    </Text>
                  </Column>
                </Row>
              </Stack>
              <Text className="font-semibold font-sourcesanspro lg:ml-[122px] xl:ml-[140px] ml-[158px] 3xl:ml-[189px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                18
              </Text>
              <Image
                src={"images/img_arrowupsolid.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="arrowupSolid"
              />
              <Text className="font-semibold font-sourcesanspro lg:ml-[59px] xl:ml-[67px] ml-[76px] 3xl:ml-[91px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                $0
              </Text>
              <Text className="font-normal font-sourcesanspro lg:ml-[126px] xl:ml-[144px] ml-[162.25px] 2xl:ml-[162px] 3xl:ml-[194px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                Not Available
              </Text>
              <Text className="font-normal font-sourcesanspro 3xl:ml-[119px] lg:ml-[77px] xl:ml-[88px] ml-[99.25px] 2xl:ml-[99px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                Jemee Tala
              </Text>
              <Text className="font-normal font-sourcesanspro ml-[110.25px] 2xl:ml-[110px] 3xl:ml-[132px] lg:ml-[85px] xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                abc@gmail.com
              </Text>
              <Text className="font-normal font-sourcesanspro lg:ml-[63px] xl:ml-[73px] ml-[82.25px] 2xl:ml-[82px] 3xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                Not Available
              </Text>
              <Image
                src={"images/img_morevertical.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[42px] xl:ml-[48px] ml-[55px] 3xl:ml-[66px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="morevertical"
              />
            </Row>
            <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[20px] xl:py-[23px] py-[26px] 3xl:py-[31px] w-[100%]">
              <Stack className="font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] w-[15%]">
                <CheckBox
                  className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[45%]"
                  inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                  name="Group242"
                  label="R"
                ></CheckBox>
                <Row className="absolute font-sourcesanspro items-center justify-start right-[0] w-[72%]">
                  <div className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                  <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                    Rajavi Tala
                  </Text>
                </Row>
              </Stack>
              <Text className="font-semibold font-sourcesanspro xl:ml-[109px] ml-[123px] 3xl:ml-[147px] lg:ml-[95px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                20
              </Text>
              <Image
                src={"images/img_arrowupsolid_1.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="arrowupSolid"
              />
              <Text className="font-semibold font-sourcesanspro lg:ml-[59px] xl:ml-[67px] ml-[76px] 3xl:ml-[91px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                $0
              </Text>
              <Text className="font-normal font-sourcesanspro lg:ml-[126px] xl:ml-[144px] ml-[162.25px] 2xl:ml-[162px] 3xl:ml-[194px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                Not Available
              </Text>
              <Text className="font-normal font-sourcesanspro 3xl:ml-[119px] lg:ml-[77px] xl:ml-[88px] ml-[99.25px] 2xl:ml-[99px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                Jemee Tala
              </Text>
              <Text className="font-normal font-sourcesanspro ml-[110.25px] 2xl:ml-[110px] 3xl:ml-[132px] lg:ml-[85px] xl:ml-[98px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                abc@gmail.com
              </Text>
              <Text className="font-normal font-sourcesanspro lg:ml-[63px] xl:ml-[73px] ml-[82.25px] 2xl:ml-[82px] 3xl:ml-[98px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                Not Available
              </Text>
              <Image
                src={"images/img_morevertical_1.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[42px] xl:ml-[48px] ml-[55px] 3xl:ml-[66px] my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="morevertical"
              />
            </Row>
            <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pb-[21px] xl:pb-[24px] pb-[27px] 3xl:pb-[32px] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:pt-[19px] xl:pt-[22px] pt-[25px] 3xl:pt-[30px] w-[100%]">
              <Stack className="font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] w-[15%]">
                <CheckBox
                  className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[43%]"
                  inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                  name="Group243"
                  label="J"
                ></CheckBox>
                <Row className="absolute font-sourcesanspro items-center justify-start right-[0] w-[72%]">
                  <div className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                  <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                    Jayesh Tala
                  </Text>
                </Row>
              </Stack>
              <Text className="font-semibold font-sourcesanspro mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] xl:ml-[104px] ml-[117px] 3xl:ml-[140px] lg:ml-[91px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                32
              </Text>
              <Image
                src={"images/img_arrowupsolid_2.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] xl:ml-[3px] lg:ml-[3px] ml-[4px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="arrowupSolid"
              />
              <Text className="font-semibold font-sourcesanspro mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] lg:ml-[59px] xl:ml-[67px] ml-[76px] 3xl:ml-[91px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                $0
              </Text>
              <Text className="font-normal font-sourcesanspro mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] lg:ml-[126px] xl:ml-[144px] ml-[162.25px] 2xl:ml-[162px] 3xl:ml-[194px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                Not Available
              </Text>
              <Text className="font-normal font-sourcesanspro mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] 3xl:ml-[119px] lg:ml-[77px] xl:ml-[88px] ml-[99.25px] 2xl:ml-[99px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                Jemee Tala
              </Text>
              <Text className="font-normal font-sourcesanspro mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] ml-[110.25px] 2xl:ml-[110px] 3xl:ml-[132px] lg:ml-[85px] xl:ml-[98px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                abc@gmail.com
              </Text>
              <Text className="font-normal font-sourcesanspro mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] lg:ml-[63px] xl:ml-[73px] ml-[82.25px] 2xl:ml-[82px] 3xl:ml-[98px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                Not Available
              </Text>
              <Image
                src={"images/img_morevertical_2.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[42px] xl:ml-[48px] ml-[55px] 3xl:ml-[66px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="morevertical"
              />
            </Row>
            <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] w-[100%]">
              <Image
                src={"images/img_checkbox_5.svg"}
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:my-[21px] xl:my-[24px] my-[27px] 3xl:my-[32px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                alt="Checkbox"
              />
              <Image
                src={"images/img_ellipse11.png"}
                className="lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:my-[10px] xl:my-[12px] my-[14px] 3xl:my-[16px] object-contain rounded-radius50 w-[auto]"
                alt="Ellipse11"
              />
              <Column className="items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[10%]">
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                  Jane Sampleton
                </Text>
                <Text className="font-semibold xl:mt-[3px] lg:mt-[3px] mt-[4px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_901 w-[auto]">
                  Sales Manager
                </Text>
                <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                  Widgetz.io
                </Text>
              </Column>
              <Text className="font-semibold lg:ml-[63px] xl:ml-[72px] ml-[81px] 3xl:ml-[97px] lg:my-[20px] xl:my-[23px] my-[26px] 3xl:my-[31px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                23
              </Text>
              <Image
                src={"images/img_arrowupsolid_3.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:my-[19px] xl:my-[22px] my-[25px] 3xl:my-[30px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="arrowupSolid"
              />
              <Text className="font-semibold lg:ml-[59px] xl:ml-[67px] ml-[76px] 3xl:ml-[91px] lg:my-[20px] xl:my-[23px] my-[26px] 3xl:my-[31px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                $7000
              </Text>
              <Row className="items-center justify-center lg:ml-[109px] xl:ml-[125px] ml-[141.25px] 2xl:ml-[141px] 3xl:ml-[169px] lg:my-[20px] xl:my-[23px] my-[26px] 3xl:my-[31px] w-[35%]">
                <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                  13 days ago
                </Text>
                <Text className="font-normal ml-[108.25px] 2xl:ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                  Jemee Tala
                </Text>
                <Text className="font-normal ml-[110.25px] 2xl:ml-[110px] 3xl:ml-[132px] lg:ml-[85px] xl:ml-[98px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                  abc@gmail.com
                </Text>
              </Row>
              <Text className="font-normal lg:ml-[63px] xl:ml-[73px] ml-[82.25px] 2xl:ml-[82px] 3xl:ml-[98px] lg:my-[20px] xl:my-[23px] my-[26px] 3xl:my-[31px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                1234567890
              </Text>
              <Image
                src={"images/img_morevertical_3.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[49px] xl:ml-[56px] ml-[63px] 3xl:ml-[75px] lg:my-[19px] xl:my-[22px] my-[25px] 3xl:my-[30px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="morevertical"
              />
            </Row>
            <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
              <Stack className="font-inter lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[12%]">
                <CheckBox
                  className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[54%]"
                  inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                  name="Group244"
                  label="R"
                ></CheckBox>
                <Row className="absolute font-sourcesanspro items-center justify-between right-[0] w-[65%]">
                  <div className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                  <Column className="items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[48%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                      Riya D
                    </Text>
                    <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      Lead
                    </Text>
                  </Column>
                </Row>
              </Stack>
              <Text className="font-semibold font-sourcesanspro lg:ml-[122px] xl:ml-[140px] ml-[158px] 3xl:ml-[189px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                18
              </Text>
              <Image
                src={"images/img_arrowupsolid_4.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="arrowupSolid"
              />
              <Text className="font-semibold font-sourcesanspro lg:ml-[59px] xl:ml-[67px] ml-[76px] 3xl:ml-[91px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                $0
              </Text>
              <Text className="font-normal font-sourcesanspro lg:ml-[126px] xl:ml-[144px] ml-[162.25px] 2xl:ml-[162px] 3xl:ml-[194px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                Not Available
              </Text>
              <Text className="font-normal font-sourcesanspro 3xl:ml-[119px] lg:ml-[77px] xl:ml-[88px] ml-[99.25px] 2xl:ml-[99px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                Jemee Tala
              </Text>
              <Text className="font-normal font-sourcesanspro ml-[110.25px] 2xl:ml-[110px] 3xl:ml-[132px] lg:ml-[85px] xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                abc@gmail.com
              </Text>
              <Text className="font-normal font-sourcesanspro lg:ml-[63px] xl:ml-[73px] ml-[82.25px] 2xl:ml-[82px] 3xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                Not Available
              </Text>
              <Image
                src={"images/img_morevertical_4.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[42px] xl:ml-[48px] ml-[55px] 3xl:ml-[66px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="morevertical"
              />
            </Row>
            <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
              <Stack className="font-inter lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[12%]">
                <CheckBox
                  className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[54%]"
                  inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                  name="Group245"
                  label="R"
                ></CheckBox>
                <Row className="absolute font-sourcesanspro items-center justify-between right-[0] w-[65%]">
                  <div className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                  <Column className="items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[48%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                      Riya D
                    </Text>
                    <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      Lead
                    </Text>
                  </Column>
                </Row>
              </Stack>
              <Text className="font-semibold font-sourcesanspro lg:ml-[122px] xl:ml-[140px] ml-[158px] 3xl:ml-[189px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                18
              </Text>
              <Image
                src={"images/img_arrowupsolid_5.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="arrowupSolid"
              />
              <Text className="font-semibold font-sourcesanspro lg:ml-[59px] xl:ml-[67px] ml-[76px] 3xl:ml-[91px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                $0
              </Text>
              <Text className="font-normal font-sourcesanspro lg:ml-[126px] xl:ml-[144px] ml-[162.25px] 2xl:ml-[162px] 3xl:ml-[194px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                Not Available
              </Text>
              <Text className="font-normal font-sourcesanspro 3xl:ml-[119px] lg:ml-[77px] xl:ml-[88px] ml-[99.25px] 2xl:ml-[99px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                Jemee Tala
              </Text>
              <Text className="font-normal font-sourcesanspro ml-[110.25px] 2xl:ml-[110px] 3xl:ml-[132px] lg:ml-[85px] xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                abc@gmail.com
              </Text>
              <Text className="font-normal font-sourcesanspro lg:ml-[63px] xl:ml-[73px] ml-[82.25px] 2xl:ml-[82px] 3xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                Not Available
              </Text>
              <Image
                src={"images/img_morevertical_5.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[42px] xl:ml-[48px] ml-[55px] 3xl:ml-[66px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="morevertical"
              />
            </Row>
            <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
              <Stack className="font-inter lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[12%]">
                <CheckBox
                  className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[54%]"
                  inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                  name="Group246"
                  label="R"
                ></CheckBox>
                <Row className="absolute font-sourcesanspro items-center justify-between right-[0] w-[65%]">
                  <div className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                  <Column className="items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[48%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                      Riya D
                    </Text>
                    <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      Lead
                    </Text>
                  </Column>
                </Row>
              </Stack>
              <Text className="font-semibold font-sourcesanspro lg:ml-[122px] xl:ml-[140px] ml-[158px] 3xl:ml-[189px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                18
              </Text>
              <Image
                src={"images/img_arrowupsolid_6.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="arrowupSolid"
              />
              <Text className="font-semibold font-sourcesanspro lg:ml-[59px] xl:ml-[67px] ml-[76px] 3xl:ml-[91px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                $0
              </Text>
              <Text className="font-normal font-sourcesanspro lg:ml-[126px] xl:ml-[144px] ml-[162.25px] 2xl:ml-[162px] 3xl:ml-[194px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                Not Available
              </Text>
              <Text className="font-normal font-sourcesanspro 3xl:ml-[119px] lg:ml-[77px] xl:ml-[88px] ml-[99.25px] 2xl:ml-[99px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                Jemee Tala
              </Text>
              <Text className="font-normal font-sourcesanspro ml-[110.25px] 2xl:ml-[110px] 3xl:ml-[132px] lg:ml-[85px] xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                abc@gmail.com
              </Text>
              <Text className="font-normal font-sourcesanspro lg:ml-[63px] xl:ml-[73px] ml-[82.25px] 2xl:ml-[82px] 3xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                Not Available
              </Text>
              <Image
                src={"images/img_morevertical_6.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[42px] xl:ml-[48px] ml-[55px] 3xl:ml-[66px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="morevertical"
              />
            </Row>
            <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
              <Stack className="font-inter lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[12%]">
                <CheckBox
                  className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[54%]"
                  inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                  name="Group247"
                  label="R"
                ></CheckBox>
                <Row className="absolute font-sourcesanspro items-center justify-between right-[0] w-[65%]">
                  <div className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                  <Column className="items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[48%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                      Riya D
                    </Text>
                    <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      Lead
                    </Text>
                  </Column>
                </Row>
              </Stack>
              <Text className="font-semibold font-sourcesanspro lg:ml-[122px] xl:ml-[140px] ml-[158px] 3xl:ml-[189px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                18
              </Text>
              <Image
                src={"images/img_arrowupsolid_7.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="arrowupSolid"
              />
              <Text className="font-semibold font-sourcesanspro lg:ml-[59px] xl:ml-[67px] ml-[76px] 3xl:ml-[91px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                $0
              </Text>
              <Text className="font-normal font-sourcesanspro lg:ml-[126px] xl:ml-[144px] ml-[162.25px] 2xl:ml-[162px] 3xl:ml-[194px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                Not Available
              </Text>
              <Text className="font-normal font-sourcesanspro 3xl:ml-[119px] lg:ml-[77px] xl:ml-[88px] ml-[99.25px] 2xl:ml-[99px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                Jemee Tala
              </Text>
              <Text className="font-normal font-sourcesanspro ml-[110.25px] 2xl:ml-[110px] 3xl:ml-[132px] lg:ml-[85px] xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                abc@gmail.com
              </Text>
              <Text className="font-normal font-sourcesanspro lg:ml-[63px] xl:ml-[73px] ml-[82.25px] 2xl:ml-[82px] 3xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                Not Available
              </Text>
              <Image
                src={"images/img_morevertical_7.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[42px] xl:ml-[48px] ml-[55px] 3xl:ml-[66px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="morevertical"
              />
            </Row>
            <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
              <Stack className="font-inter lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[12%]">
                <CheckBox
                  className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[54%]"
                  inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                  name="Group248"
                  label="R"
                ></CheckBox>
                <Row className="absolute font-sourcesanspro items-center justify-between right-[0] w-[65%]">
                  <div className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                  <Column className="items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[48%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                      Riya D
                    </Text>
                    <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      Lead
                    </Text>
                  </Column>
                </Row>
              </Stack>
              <Text className="font-semibold font-sourcesanspro lg:ml-[122px] xl:ml-[140px] ml-[158px] 3xl:ml-[189px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                18
              </Text>
              <Image
                src={"images/img_arrowupsolid_8.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="arrowupSolid"
              />
              <Text className="font-semibold font-sourcesanspro lg:ml-[59px] xl:ml-[67px] ml-[76px] 3xl:ml-[91px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                $0
              </Text>
              <Text className="font-normal font-sourcesanspro lg:ml-[126px] xl:ml-[144px] ml-[162.25px] 2xl:ml-[162px] 3xl:ml-[194px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                Not Available
              </Text>
              <Text className="font-normal font-sourcesanspro 3xl:ml-[119px] lg:ml-[77px] xl:ml-[88px] ml-[99.25px] 2xl:ml-[99px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                Jemee Tala
              </Text>
              <Text className="font-normal font-sourcesanspro ml-[110.25px] 2xl:ml-[110px] 3xl:ml-[132px] lg:ml-[85px] xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                abc@gmail.com
              </Text>
              <Text className="font-normal font-sourcesanspro lg:ml-[63px] xl:ml-[73px] ml-[82.25px] 2xl:ml-[82px] 3xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                Not Available
              </Text>
              <Image
                src={"images/img_morevertical_8.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[42px] xl:ml-[48px] ml-[55px] 3xl:ml-[66px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="morevertical"
              />
            </Row>
          </List>
        </Column>
      </Row>

      {isOpenAddContactsModal ? (
        <AddContactsModal
          isOpen={isOpenAddContactsModal}
          onRequestClose={handleCloseAddContactsModal}
        />
      ) : null}
    </>
  );
};

export default ContactsPage;
