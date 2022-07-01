import React from "react";

import { getContacts } from "service/api";
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
  const [apiData, setapiData] = React.useState();
  React.useEffect(() => {
    callApi();
  }, []);
  const [isOpenAddContactsModal, setAddContactsModal] = React.useState(false);

  function callApi() {
    const req = {};
    getContacts(req)
      .then((res) => {
        setapiData(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleOpenAddContactsModal() {
    setAddContactsModal(true);
  }
  function handleCloseAddContactsModal() {
    setAddContactsModal(false);
  }

  return (
    <>
      <Row className="bg-bluegray_51 font-sourcesanspro items-start mx-[auto] w-[100%]">
        <aside className="bg-bluegray_900 h-[1024px] 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[797px] xl:h-[911px] lg:pb-[388px] xl:pb-[444px] pb-[500px] 3xl:pb-[600px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[7%]">
          <Stack className="">
            <Image
              src={"images/img_group181_2.svg"}
              className="absolute lg:h-[389px] xl:h-[445px] h-[500px] 2xl:h-[501px] 3xl:h-[601px] inset-x-[0] object-contain top-[0] w-[100%]"
              alt="Group181"
            />
          </Stack>
        </aside>
        <Column className="items-center justify-start lg:mb-[244px] xl:mb-[279px] mb-[314.22px] 2xl:mb-[314px] 3xl:mb-[377px] xl:mt-[3px] lg:mt-[3px] mt-[4px] w-[93%]">
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
            <Row className="items-center justify-center lg:ml-[455px] xl:ml-[520px] ml-[585px] 3xl:ml-[702px] w-[30%]">
              <Button
                className="common-pointer bg-bluegray_900 border border-gray_200 border-solid font-normal mt-[1px] not-italic xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[25%]"
                onClick={handleOpenAddContactsModal}
              >
                Add Contatcts
              </Button>
              <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-center lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[40%]">
                <Image
                  src={"images/img_webgridaltou_2.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="webgridaltOu"
                />
                <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                  Edit coumns
                </Text>
                <Image
                  src={"images/img_angledownsoli_3.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="angledownSoli"
                />
              </Row>
              <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-evenly ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[30%]">
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
              name="Group234"
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
            {apiData?.contacts?.map((apiDataEle) => {
              return (
                <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-end my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[17px] xl:py-[20px] py-[22.65px] 2xl:py-[22px] 3xl:py-[27px] w-[100%]">
                  <Stack className="font-inter lg:h-[34px] xl:h-[39px] h-[43.48px] 2xl:h-[44px] 3xl:h-[53px] my-[0] w-[12%]">
                    <CheckBox
                      className="absolute font-bold inset-y-[0] left-[0] my-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[54%]"
                      inputClassName="2xl:h-[25px] 2xl:w-[24px] 3xl:h-[30px] 3xl:w-[29px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[24.46px] lg:h-[20px] lg:w-[19px] rounded-radius25 w-[24.46px] xl:h-[22px] xl:w-[21px] mr-[5px]"
                      name="Group235"
                      label="R"
                    ></CheckBox>
                    <Row className="absolute font-sourcesanspro items-center justify-between right-[0] w-[65%]">
                      <div className="bg-amber_100 lg:h-[33px] xl:h-[38px] h-[41.67px] 2xl:h-[42px] 3xl:h-[51px] my-[1px] rounded-radius2084 w-[45%]"></div>
                      <Column className="items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[48%]">
                        <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                          {apiDataEle?.display_name}
                        </Text>
                        <Text className="font-normal lg:mt-[2px] mt-[3.62px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                          Lead
                        </Text>
                      </Column>
                    </Row>
                  </Stack>
                  <Text className="font-semibold font-sourcesanspro mb-[11.78px] lg:ml-[122px] xl:ml-[140px] ml-[158px] 3xl:ml-[189px] mt-[11.77px] xl:my-[10px] 2xl:my-[11px] 3xl:my-[14px] lg:my-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                    {apiDataEle?.lead_score}
                  </Text>
                  <Image
                    src={"images/img_arrowupsolid.svg"}
                    className="lg:h-[17px] xl:h-[20px] h-[21.74px] 2xl:h-[22px] 3xl:h-[27px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[10.87px] 2xl:my-[10px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] object-contain w-[2%]"
                    alt="arrowupSolid"
                  />
                  <Text className="font-semibold font-sourcesanspro mb-[11.78px] lg:ml-[59px] xl:ml-[67px] ml-[76px] 3xl:ml-[91px] mt-[11.77px] xl:my-[10px] 2xl:my-[11px] 3xl:my-[14px] lg:my-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                    {apiDataEle?.open_deals_amount}
                  </Text>
                  <Text className="font-normal font-sourcesanspro mb-[11.78px] lg:ml-[126px] xl:ml-[144px] ml-[162.25px] 2xl:ml-[162px] 3xl:ml-[194px] mt-[11.77px] xl:my-[10px] 2xl:my-[11px] 3xl:my-[14px] lg:my-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                    Not Available
                  </Text>
                  <Text className="font-normal font-sourcesanspro mb-[11.78px] 3xl:ml-[119px] lg:ml-[77px] xl:ml-[88px] ml-[99.25px] 2xl:ml-[99px] mt-[11.77px] xl:my-[10px] 2xl:my-[11px] 3xl:my-[14px] lg:my-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                    {apiDataEle?.display_name}
                  </Text>
                  <Text className="font-normal font-sourcesanspro mb-[11.78px] ml-[110.25px] 2xl:ml-[110px] 3xl:ml-[132px] lg:ml-[85px] xl:ml-[98px] mt-[11.77px] xl:my-[10px] 2xl:my-[11px] 3xl:my-[14px] lg:my-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                    {apiDataEle?.email}
                  </Text>
                  <Text className="font-normal font-sourcesanspro mb-[11.78px] lg:ml-[63px] xl:ml-[73px] ml-[82.25px] 2xl:ml-[82px] 3xl:ml-[98px] mt-[11.77px] xl:my-[10px] 2xl:my-[11px] 3xl:my-[14px] lg:my-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                    {apiDataEle?.mobile_number}
                  </Text>
                  <Image
                    src={"images/img_morevertical.svg"}
                    className="lg:h-[17px] xl:h-[20px] h-[21.74px] 2xl:h-[22px] 3xl:h-[27px] lg:ml-[42px] xl:ml-[48px] ml-[55px] 3xl:ml-[66px] my-[10.87px] 2xl:my-[10px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] object-contain w-[2%]"
                    alt="morevertical"
                  />
                </Row>
              );
            })}
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
