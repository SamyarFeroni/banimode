"use client"; // Add this line to make this a Client Component

import React, { useEffect, useState } from "react";
import Styles from "./modal.module.css";
import Image from "next/image";
import image3 from "../public/image/Ellipse 1 (1).svg";
import image4 from "../public/image/cross-small, crossed small, delete, remove.png";
import imageQ from "../public/image/circle-questionmark, faq, help, questionaire.svg";
import imageFlashUp from "../public/image/chevron-up-small copy.svg";
import imageEdit from "../public/image/edit-3.svg";
import imageFlasher from "../public/image/Arrow, Down 1 copy.svg";
import imageFlashDown from "../public/image/chevron-down-small.svg";
import bgCustom from "./HeadTop.module.css";
import imageCheckLogin from "../public/image/bubble-check, comment, feedback.svg";

function BeforLogin() {
  const [modal, setModal] = useState(false); 
  const [confirmationModal, setConfirmationModal] = useState(false); 
  const [phoneNumber, setPhoneNumber] = useState<string>(""); 
  const [isValid, setIsValid] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>(""); 
  const [timeLeft, setTimeLeft] = useState(60);
  const [inputFocused, setInputFocused] = useState<boolean>(false); 
  const [textColor, setTextColor] = useState<string>("#828282"); 

  const [showNewComponent, setShowNewComponent] = useState(false); 

  const [AccordionOpen, setAccordionOpen] = useState(false);
  const [AccordionOpen2, setAccordionOpen2] = useState(false);
  const [AccordionOpen3, setAccordionOpen3] = useState(false);


  const handleClick = () => {
    setShowNewComponent(true);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneNumber(value);

    if (value.length === 11 && /^\d+$/.test(value)) {
      setIsValid(true); 
      setErrorMessage("");
    } else {
      setIsValid(false);
      setErrorMessage(value.length > 0 ? "شماره موبایل نادرست است." : "");
    }
  };

  const handleFocus = () => {
    setInputFocused(true);
  };

  const handleBlur = () => {
    setInputFocused(false); 
  };

  const toggleModal = () => {
    setModal(!modal);
    setPhoneNumber("");
    setIsValid(false);
    setErrorMessage("");

    if (!modal) {
      setTimeLeft(60);
      setTextColor("#828282");
    }
  };

  const toggleConfirmationModal = () => {
    setConfirmationModal(false); 
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (modal || confirmationModal) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            setTextColor("#000000"); 
            return 0;
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [modal, confirmationModal]);

  const formatTimeLeft = () => {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleGetConfirmationCode = () => {
    if (isValid) {
      setModal(false); 
      setConfirmationModal(true); 
    }
  };

  const handleResendCode = () => {
    setTimeLeft(60);
    setTextColor("#828282");
  };

  return (
    <div className=" re">
      {!showNewComponent && (
        <div className="flex w-[420px] p-[24px] flex-col justify-center items-end gap-[24px] rounded-[20px] bg-white shadow-[0px_3px_16px_0px_rgba(0,_0,_0,_0.10)] -mt-[66px] ml-[539px] relative">
          <div className="text-[#101010] text-center font-['Yekan_Bakh_FaNum'] text-[16px] font-semibold leading-[20px] ">
            اعتبار تارا دارم؟
          </div>
          <div
            className="text-[#53565A] text-right font-['Yekan_Bakh_FaNum'] text-[14px] font-normal leading-[20px]"
            dir="rtl"
          >
            <Image src={image3} alt="Image" width={4} height={4} />
            جهت بررسی اعتبار تارا ابتدا شماره موبایل خود را وارد کنید.
          </div>

          <div className="flex p-[12px_4px_12px_0] justify-center items-center gap-[6px] self-stretch rounded-[12px] bg-[linear-gradient(268deg,#19B16A_0%,#2B8C51_100%)]">
            <button className={Styles.btnModal} onClick={toggleModal}>
              وارد کردن شماره موبایل
            </button>
          </div>

      
          {modal && (
            <div
              className={Styles.modal}
              style={{ backgroundColor: "rgba(59, 59, 59, 0.65)" }}
            >
              <div className={Styles.overlay} onClick={toggleModal}></div>
              <div className={Styles.modalContent}>
                <div className="flex items-center justify-between">
                  <div
                    className="mr-[250px] cursor-pointer"
                    onClick={toggleModal}
                  >
                    <Image src={image4} alt="Close" width={24} height={24} />
                  </div>
                  <div className="self-stretch text-[#0C0C0C] text-right text-[16px] font-semibold leading-[20px]">
                    ورود یا ثبت نام
                  </div>
                </div>
                <div
                  className="ml-[180px] relative top-[-60px] text-[#0C0C0C] text-center text-[16px] font-normal leading-[20px]"
                  dir="rtl"
                >
                  شماره موبایل خود را وارد کنید.
                </div>
                <input
                  className={`relative mt-[-110px] flex h-[48px] p-[16px_12px] justify-end items-center self-stretch rounded-[8px] bg-white border outline-none transition-colors duration-300 ${
                    inputFocused
                      ? isValid
                        ? "border-green-500"
                        : "border-red-500"
                      : "border-gray-300"
                  }`}
                  dir="rtl"
                  placeholder="شماره موبایل مثل؛ ۰۹۱۲۳۴۵۶۷۸۹"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />

                {errorMessage && (
                  <div
                    className="text-red-600 text-right font-YekanBakhFaNum text-xs leading-5 relative ml-[250px] mt-[-60px]"
                    dir="rtl"
                  >
                    {errorMessage}
                  </div>
                )}

                <div
                  className="relative top-[60px] ml-[120px] text-[#888] text-right text-[12px] leading-[20px]"
                  dir="rtl"
                >
                  ورود شما به معنای پذیرش{" "}
                  <strong className="text-[#101010] font-[Yekan_Bakh_VF] text-[12px] font-[325] leading-[20px] cursor-pointer">
                    شرایط و قوانین بانی‌مد
                  </strong>
                  است.
                </div>
                <button
                  className={`flex h-[48px] p-[12px_0] justify-center items-center gap-[6px] self-stretch rounded-[12px] ${
                    isValid
                      ? "bg-[linear-gradient(268deg,#19B16A_0%,#2B8C51_100%)]"
                      : "bg-[#F0F0F0]"
                  }`}
                  disabled={!isValid}
                  onClick={handleGetConfirmationCode}
                >
                  <a
                    className={`text-[#888] text-center font-[Yekan_Bakh_FaNum] text-[14px] font-semibold leading-[20px] cursor-pointer ${
                      isValid ? "text-[#fafafa]" : "text-[#888]"
                    }`}
                  >
                    دریافت کد تایید
                  </a>
                </button>
              </div>
            </div>
          )}

          {confirmationModal && (
            <div
              className={Styles.modal}
              style={{ backgroundColor: "rgba(59, 59, 59, 0.65)" }}
            >
              <div
                className={Styles.overlay}
                onClick={toggleConfirmationModal}
              ></div>
              <div
                className={Styles.modalContent}
                style={{ height: "405px", overflowY: "auto" }}
              >
                <div className="flex items-center justify-between">
                  <div
                    className="mr-[250px] cursor-pointer w-fit"
                    onClick={toggleConfirmationModal}
                  >
                    <Image src={image4} alt="Close" width={24} height={24} />
                  </div>
                  <div className="self-stretch text-[#0C0C0C] text-right text-[16px] font-semibold leading-[20px] relative ml-[-20px]">
                    کد تایید ارسال شد
                  </div>
                </div>
                <div
                  className="ml-[33px] relative top-[-60px] text-[#0C0C0C] text-center text-[16px] font-normal leading-[20px]"
                  dir="rtl"
                >
                  کد تایید ۵ رقمی ارسالی به {phoneNumber} را وارد کنید
                </div>
                <div className="flex relative h-12 p-2 justify-between ml-[10px] mt-[-250px] items-center gap-2 flex-[1_0_0]">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength={1}
                        className="w-16 h-12 rounded-lg border border-gray-300 bg-white text-center text-2xl"
                      />
                    ))}
                </div>
                <div className="flex justify-between items-center self-stretch mt-[-70px]">
                  <div
                    className="text-[#19B16A] text-right font-YekanBakhFaNum text-sm font-semibold leading-5 relative mt-[-200px] cursor-pointer"
                    onClick={toggleConfirmationModal}
                  >
                    ویرایش شماره
                  </div>
                  <div className="flex p-1 px-1 flex-col justify-center items-center rounded-[40px] bg-[#F0F0F0] relative mt-[-200px]">
                    <a
                      className="text-[#828282] font-YekanBakhFaNum text-sm font-semibold leading-5 cursor-pointer"
                      onClick={timeLeft === 0 ? handleResendCode : undefined}
                      style={{ color: textColor }}
                    >
                      {timeLeft > 0
                        ? `دریافت مجدد کد (${formatTimeLeft()})`
                        : "دریافت مجدد کد"}
                    </a>
                  </div>
                </div>
                <button
                  className={`flex h-[48px] p-[12px_0] justify-center items-center gap-[6px] self-stretch rounded-[12px] bg-[linear-gradient(268deg,#19B16A_0%,#2B8C51_100%)]`}
                  onClick={handleClick}
                >
                  <a
                    className={`text-white text-center font-YekanBakhFaNum text-sm font-semibold leading-5`}
                  >
                    ورود
                  </a>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      {showNewComponent && (
        <div className="">
          <div className="flex w-[420px]  p-[24px] flex-col justify-center items-end  rounded-[20px] bg-white shadow-[0px_3px_16px_0px_rgba(0,_0,_0,_0.10)] mt-[-65px] ml-[540px] relative">
            <div className="flex justify-between items-center self-stretch">
              <div className="text-[#53565A] text-center font-[Yekan_Bakh_FaNum] text-[14px] font-semibold leading-[20px] flex cursor-pointer">
                <Image src={imageEdit} alt="Image" width={20} height={20} />
                تغییر شماره
              </div>
              <div className="text-[#53565A] text-center font-[Yekan_Bakh_FaNum] text-[14px] font-normal leading-[20px]">
                با شماره {phoneNumber} وارد شدی!
              </div>
            </div>
            <div className="w-[372px] h-[1px] bg-[#EDEDED] relative mt-3"></div>

            <div
              className="text-[#101010] text-center font-[Yekan_Bakh_FaNum] text-[14px] font-semibold leading-[20px] mt-3"
              dir="rtl"
            >
              اعتبار تارا دارم؟
            </div>

            <div className={bgCustom.bggradientcustom}>
              <div
                className="flex text-[#101010] text-right font-[Yekan_Bakh_FaNum] text-[14px] font-normal leading-[20px] "
                dir="rtl"
              >
                <Image
                  className="mt-[-19px] ml-[10px] relative"
                  src={imageCheckLogin}
                  alt="Image"
                  width={20}
                  height={20}
                />{" "}
                تبریک! شما اعتبار تارا دارید و می‌توانید از بانی‌مد توسط درگاه
                تارا خرید کنید.
              </div>
              <div className="flex p-[12px_4px_12px_0] justify-center items-center gap-[6px] self-stretch rounded-[12px] border-2 border-[rgba(255,255,255,0.40)] bg-gradient-to-r from-[#19B16A] to-[#2B8C51] cursor-pointer">
                <Image src={imageFlasher} alt="Image" width={24} height={24} />{" "}
                <a
                  className="text-white text-center font-YekanBakhFaNum text-[16px] font-semibold leading-[20px]"
                  dir="rtl"
                >
                  استفاده از اعتبار
                </a>
              </div>
            </div>
          </div>

          <div className="flex w-[800px] p-[16px_24px] flex-col justify-center items-end gap-[16px] rounded-[20px] bg-white shadow-[0px_2px_16px_rgba(0,_0,_0,_0.06)] mt-11 relative ml-[340px]">
            <div className="text-[#101010] text-center font-[Yekan_Bakh_FaNum] text-[16px] font-semibold leading-[22px] flex">
              سوالات متداول
              <Image src={imageQ} alt="Image" width={20} height={20} />
            </div>




            <button
              className={`flex flex-col p-3 items-start self-stretch rounded-[12px] border border-[#EDEDED] bg-white gap-[1px] transition-all duration-300 ease-in-out`}
              onClick={() => setAccordionOpen(!AccordionOpen)}
            >
              <div
                className="text-[#101010] text-right font-YekanBakhFaNum text-[12px] font-semibold leading-[20px] flex"
                dir="rtl"
              >
                <span className="relative ml-[174px] text-right" dir="rtl">
                  من اعتبار تارا دارم، می‌تونم خریدم از بانی‌مد رو اعتباری انجام
                  بدم و بعد از مزایای این کمپین هم استفاده کنم؟
                </span>
                {AccordionOpen ? (
                  <Image
                    className="cursor-pointer"
                    src={imageFlashUp}
                    alt="Image"
                    width={24}
                    height={24}
                  />
                ) : (
                  <Image
                    className="cursor-pointer"
                    src={imageFlashDown}
                    alt="Image"
                    width={24}
                    height={24}
                  />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  AccordionOpen
                    ? "max-h-[200px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="w-[728px] h-px bg-[#EDEDED]"></div>
                <div
                  className="text-[#888] text-right font-[Yekan_Bakh_FaNum] text-[12px] font-normal leading-[20px] ml-[86px]"
                  dir="rtl"
                >
                  جواب: اگر فقط اعتبار تارا دارید و با اعتبار تارا، از بانی مد
                  خرید کنین، با توجه به جدول تخصیص اعتبار، اعتبار بانی‌مدی هم
                  دریافت می‌کنین.
                </div>
              </div>
            </button>

            <button
              className={`flex flex-col p-3 items-start self-stretch rounded-[12px] border border-[#EDEDED] bg-white gap-[1px] transition-all duration-300 ease-in-out`}
              onClick={() => setAccordionOpen2(!AccordionOpen2)}
            >
              <div
                className="text-[#101010] text-right font-YekanBakhFaNum text-[12px] font-semibold leading-[20px] flex"
                dir="rtl"
              >
                <span className="relative ml-[174px] text-right" dir="rtl">
                  من اعتبار تارا دارم، می‌تونم خریدم از بانی‌مد رو اعتباری انجام
                  بدم و بعد از مزایای این کمپین هم استفاده کنم؟
                </span>
                {AccordionOpen2 ? (
                  <Image
                    className="cursor-pointer"
                    src={imageFlashUp}
                    alt="Image"
                    width={24}
                    height={24}
                  />
                ) : (
                  <Image
                    className="cursor-pointer"
                    src={imageFlashDown}
                    alt="Image"
                    width={24}
                    height={24}
                  />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  AccordionOpen2
                    ? "max-h-[200px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="w-[728px] h-px bg-[#EDEDED]"></div>
                <div
                  className="text-[#888] text-right font-[Yekan_Bakh_FaNum] text-[12px] font-normal leading-[20px] ml-[86px]"
                  dir="rtl"
                >
                  جواب: اگر فقط اعتبار تارا دارید و با اعتبار تارا، از بانی مد
                  خرید کنین، با توجه به جدول تخصیص اعتبار، اعتبار بانی‌مدی هم
                  دریافت می‌کنین.
                </div>
              </div>
            </button>

            <button
              className={`flex flex-col p-3 items-start self-stretch rounded-[12px] border border-[#EDEDED] bg-white gap-[1px] transition-all duration-300 ease-in-out`}
              onClick={() => setAccordionOpen3(!AccordionOpen3)}
            >
              <div
                className="text-[#101010] text-right font-YekanBakhFaNum text-[12px] font-semibold leading-[20px] flex"
                dir="rtl"
              >
                <span className="relative ml-[174px] text-right" dir="rtl">
                  من اعتبار تارا دارم، می‌تونم خریدم از بانی‌مد رو اعتباری انجام
                  بدم و بعد از مزایای این کمپین هم استفاده کنم؟
                </span>
                {AccordionOpen3 ? (
                  <Image
                    className="cursor-pointer"
                    src={imageFlashUp}
                    alt="Image"
                    width={24}
                    height={24}
                  />
                ) : (
                  <Image
                    className="cursor-pointer"
                    src={imageFlashDown}
                    alt="Image"
                    width={24}
                    height={24}
                  />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  AccordionOpen3
                    ? "max-h-[200px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="w-[728px] h-px bg-[#EDEDED]"></div>
                <div
                  className="text-[#888] text-right font-[Yekan_Bakh_FaNum] text-[12px] font-normal leading-[20px] ml-[86px]"
                  dir="rtl"
                >
                  جواب: اگر فقط اعتبار تارا دارید و با اعتبار تارا، از بانی مد
                  خرید کنین، با توجه به جدول تخصیص اعتبار، اعتبار بانی‌مدی هم
                  دریافت می‌کنین.
                </div>
              </div>
            </button>


          </div>
        </div>
      )}
    </div>
  );
}

export default BeforLogin;
