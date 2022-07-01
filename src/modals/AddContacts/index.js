import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Image, Input, Button } from "components";

const AddContactsModal = (props) => {
  return (
    <>
      <ModalProvider
        className="m-[auto] w-[38%]"
        overlayClassName="bg-gray_900_d8 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 items-start justify-start w-[100%]">
            <Row className="bg-gray_100 border border-indigo_50 border-solid items-center justify-between lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]">
              <Text className="font-normal mb-[1px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_901 w-[auto]">
                Add Contact
              </Text>
              <Image
                src={"images/img_multiplyoutlin_5.svg"}
                className="common-pointer lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[312px] xl:ml-[357px] ml-[402px] 3xl:ml-[482px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                onClick={props.onRequestClose}
                alt="multiplyOutlin"
              />
            </Row>
            <Column className="items-start lg:mt-[22px] xl:mt-[25px] mt-[29px] 3xl:mt-[34px] lg:pl-[23px] xl:pl-[26px] pl-[30px] 3xl:pl-[36px] lg:pr-[24px] xl:pr-[28px] pr-[32px] 3xl:pr-[38px] w-[100%]">
              <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                <span className="text-black_900 font-sourcesanspro">
                  First Name{" "}
                </span>
                <span className="text-red_700 font-sourcesanspro">*</span>
              </Text>
              <Input
                className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                WrapClassName="bg-white_A700 border border-bluegray_100 border-solid lg:mt-[3px] mt-[4px] rounded-radius4 w-[100%] xl:mt-[3px]"
                name="Group179"
                placeholder="Enter First Name"
              ></Input>
              <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                <span className="text-black_900 font-sourcesanspro">
                  Last Name{" "}
                </span>
                <span className="text-red_700 font-sourcesanspro">*</span>
              </Text>
              <Input
                className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                WrapClassName="bg-white_A700 border border-bluegray_100 border-solid lg:mt-[3px] mt-[4px] rounded-radius4 w-[100%] xl:mt-[3px]"
                name="Group180"
                placeholder="Enter Last Name"
              ></Input>
            </Column>
            <Column className="items-start justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[89%]">
              <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                Mobile Number
              </Text>
              <Input
                className="bg-transparent border-0 font-normal not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                WrapClassName="border border-gray_200 border-solid lg:mt-[3px] mt-[4px] rounded-radius4 w-[100%] xl:mt-[3px]"
                name="Group181"
                placeholder="Enter mobile number"
              ></Input>
            </Column>
            <Column className="items-start justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[89%]">
              <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                Email
              </Text>
              <Input
                className="bg-transparent border-0 font-normal not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                WrapClassName="border border-gray_200 border-solid lg:mt-[3px] mt-[4px] rounded-radius4 w-[100%] xl:mt-[3px]"
                name="Group182"
                placeholder="Enter mail addres"
              ></Input>
            </Column>
            <Row className="bg-gray_100 items-center justify-center lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] lg:pl-[293px] xl:pl-[335px] pl-[377px] 3xl:pl-[452px] lg:pr-[24px] xl:pr-[28px] pr-[32px] 3xl:pr-[38px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] w-[100%]">
              <Button className="bg-white_A700 border border-gray_200 border-solid font-normal not-italic xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-center w-[51%]">
                Cancel
              </Button>
              <Button className="bg-bluegray_900 border border-gray_200 border-solid font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[42%]">
                Save
              </Button>
            </Row>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default AddContactsModal;
