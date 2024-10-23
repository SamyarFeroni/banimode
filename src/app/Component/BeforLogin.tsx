"use client"; // Client Component

import React, { useEffect, useState, useRef } from "react";
import Styles from "./modal.module.css";
import Image from "next/image";
import image3 from "../public/image/Ellipse 1 (1).svg";
import image4 from "../public/image/cross-small, crossed small, delete, remove.svg";
import imageQ from "../public/image/circle-questionmark, faq, help, questionaire.svg";
import imageFlashUp from "../public/image/chevron-up-small copy.svg";
import imageEdit from "../public/image/edit-3.svg";
import imageFlasher from "../public/image/Arrow, Down 1 copy.svg";
import imageFlashDown from "../public/image/chevron-down-small.svg";
import bgCustom from "./HeadTop.module.css";
import imageCheckLogin from "../public/image/bubble-check, comment, feedback.svg";
import imageXLogin from "../public/image/bubble-crossed, comment, feedback.svg";
import imageQ2 from "../public/image/bubble-question, comment, feedback.svg";
import imageAlert from "../public/image/alert-circle.svg";
import imagePay from "../public/image/image 2.png";
import imageOcheckG from "../public/image/Ellipse 55.svg";
import imageOcheckG2 from "../public/image/Ellipse 58 (1).svg";

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
  const [showNewComponent2, setShowNewComponent2] = useState(false);
  const [ModalPay, setModalPay] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(5).fill(null));

  // HandClick for Buttons
  const handleClick = () => {
    setShowNewComponent(true);
  };
  const handleClick2 = () => {
    setShowNewComponent2(true);
  };
  const handleClick3 = () => {
    setModalPay(true);
  };

  //For input number user can only input 11 PhoneNumber
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

  //Function for OTP
  const handleChangeOTP = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;

    // Move to the next input if the current input has a value
    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Move to the previous input if the input is empty and not the first input
    if (value.length === 0 && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  //Focus for input box for PhoneNumber
  const handleFocus = () => {
    setInputFocused(true);
  };
  //Blur for input box for PhoneNumber
  const handleBlur = () => {
    setInputFocused(false);
  };

  //For all Modals sttings
  const toggleModal = () => {
    setModalPay(false);
    setModal(!modal);
    setPhoneNumber("");
    setIsValid(false);
    setErrorMessage("");
    //Timer for Send Code from backend
    if (!modal) {
      setTimeLeft(60);
      setTextColor("#828282");
    }
  };
  const toggleConfirmationModal = () => {
    setConfirmationModal(false);
  };
  //Set timer when modal is open
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

  //Format Timer  minutes: seconds =>>> 00:59
  const formatTimeLeft = () => {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  //If your Phone number is True close the first Modal and opne the sec Modal
  const handleGetConfirmationCode = () => {
    if (isValid) {
      setModal(false);
      setConfirmationModal(true);
    }
  };

  //When the timer is zero restart the timer
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

          <div
            className="flex p-[12px_4px_12px_0] justify-center items-center gap-[6px] self-stretch rounded-[12px] bg-[linear-gradient(268deg,#19B16A_0%,#2B8C51_100%)] cursor-pointer"
            onClick={toggleModal}
          >
            <button className={Styles.btnModal}>وارد کردن شماره موبایل</button>
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
                {/*OTP inputers */}
                <div className="flex relative h-12 p-2 justify-between ml-[10px] mt-[-250px] items-center gap-2 flex-[1_0_0]">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength={1}
                        className="w-16 h-12 rounded-lg border border-gray-300 bg-white text-center text-2xl"
                        ref={(el) => (inputRefs.current[index] = el)} // Set the ref for each input
                        onChange={(e) => handleChangeOTP(e, index)} // Handle input change
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

            {!showNewComponent2 && (
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
                <div
                  className="flex p-[12px_4px_12px_0] justify-center items-center gap-[6px] self-stretch rounded-[12px] border-2 border-[rgba(255,255,255,0.40)] bg-gradient-to-r from-[#19B16A] to-[#2B8C51] cursor-pointer"
                  onClick={handleClick2}
                >
                  <Image
                    src={imageFlasher}
                    alt="Image"
                    width={24}
                    height={24}
                  />{" "}
                  <a
                    className="text-white text-center font-YekanBakhFaNum text-[16px] font-semibold leading-[20px]"
                    dir="rtl"
                  >
                    استفاده از اعتبار
                  </a>
                </div>
              </div>
            )}
            {showNewComponent2 && (
              <div className="flex flex-col items-end p-4 gap-4 self-stretch rounded-xl border border-gray-200 mt-[20px]">
                <div
                  className="flex text-[#101010] text-right font-[Yekan_Bakh_FaNum] text-[14px] font-normal leading-[20px] "
                  dir="rtl"
                >
                  <Image
                    className="mt-[-19px] ml-[10px] relative"
                    src={imageXLogin}
                    alt="Image"
                    width={20}
                    height={20}
                  />{" "}
                  در حال حاظر شما اعتبار خرید از بانی مد را ندارید. برای دریافت
                  اعتبار روی لینک زیر کنید.
                </div>
                <div
                  className="flex p-[12px_4px_12px_0] justify-center items-center gap-[6px] self-stretch rounded-[12px] border-2 border-[rgba(255,255,255,0.40)] bg-gradient-to-r from-[#19B16A] to-[#2B8C51] cursor-pointer"
                  onClick={handleClick3}
                >
                  <Image
                    src={imageFlasher}
                    alt="Image"
                    width={24}
                    height={24}
                  />{" "}
                  <button
                    className="text-white text-center font-YekanBakhFaNum text-[16px] font-semibold leading-[20px]"
                    dir="rtl"
                  >
                    گرفتن اعتبار تارا
                  </button>
                </div>
              </div>
            )}
          </div>
          {showNewComponent2 && (
            <div className="flex flex-col justify-center items-end gap-4 self-stretch p-4 pt-6 pb-6 rounded-2xl bg-white shadow-[0px_2px_16px_rgba(0,_0,_0,_0.06)] w-[800px] ml-[339px] mt-[40px]">
              <div className="flex justify-center items-center gap-2" dir="rtl">
                <Image src={imageQ2} alt="Image" width={24} height={24} />
                <span className="text-center text-[16px] font-semibold leading-[22px] text-[#101010]">
                  چگونه اعتبار می‌گیرم؟
                </span>
              </div>
              <div
                className="self-stretch text-right text-[14px] font-normal leading-[20px] text-[#53565A]"
                dir="rtl"
              >
                با درگاه تارا از بانی مد نقدی خرید کنید و برای خرید بعدیتون تا
                سقف <span className="font-bold"> 15میلیون تومان</span>، اعتبار
                بگیرید.
              </div>
              <div
                className="self-stretch text-[#53565A] text-right font-[Yekan Bakh FaNum] text-[14px] font-normal leading-[20px] mt-[-10px]"
                dir="rtl"
              >
                در جدول زیر می‌تونید ببینید با هر مبلغ خرید، چقدر اعتبار بهتون
                تعلق می‌گیره. 
              </div>

              <div className="border border-gray-200 rounded-lg w-full">
                <div className="flex flex-col">
                  <div className="flex justify-between p-3 border-b border-gray-200">
                    <div className="flex-1 text-center">مبلغ اعتبار تخصیصی</div>
                    <div className="flex-1 text-center">
                      مبلغ خرید از بانی مد
                    </div>
                  </div>
                  <div className="flex justify-between p-3 border-b border-gray-200 bg-gray-200 bg-opacity-60 ">
                    <div className="flex-1 text-center" dir="rtl">
                      تعلق نمی‌گیرد.
                    </div>
                    <div className="flex-1 text-center">تا 2 میلیون</div>
                  </div>
                  <div className="flex justify-between p-3 border-b border-gray-200 bg-gray-200 bg-opacity-60 ">
                    <div className="flex-1 text-center">2 میلیون</div>
                    <div className="flex-1 text-center">بیش از 2 میلیون</div>
                  </div>
                  <div className="flex justify-between p-3 border-b border-gray-200 bg-gray-200 bg-opacity-60 ">
                    <div className="flex-1 text-center">5 میلیون</div>
                    <div className="flex-1 text-center">بیش از 5 میلیون</div>
                  </div>
                  <div className="flex justify-between p-3 border-b border-gray-200 bg-gray-200 bg-opacity-60 ">
                    <div className="flex-1 text-center">10 میلیون</div>
                    <div className="flex-1 text-center">بیش از 10 میلیون</div>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-200 bg-opacity-60 ">
                    <div className="flex-1 text-center">15 میلیون</div>
                    <div className="flex-1 text-center">بیش از 15 میلیون</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1 p-3 border border-gray-200 rounded-lg self-stretch">
                <div className="flex justify-end items-start gap-1" dir="rtl">
                  {" "}
                  <Image
                    src={imageAlert}
                    alt="Image"
                    width={20}
                    height={20}
                  />{" "}
                  <span className="text-[#19B16A] text-right font-YekanBakhFaNum text-sm font-semibold leading-5">
                    توجه
                  </span>{" "}
                </div>
                <div className="text-[#888] text-right font-YekanBakhFaNum text-sm font-normal leading-5">
                  {" "}
                  همه مبالغ نوشته شده به تومان می‌باشند. برای دریافت اعتبارتون،{" "}
                  <span className="text-[#888] font-YekanBakhFaNum text-sm font-semibold leading-5">
                    اپلیکیشن تارا{" "}
                  </span>{" "}
                  رو نصب کنید.
                </div>
              </div>
            </div>
          )}

          {ModalPay && (
            <div
              className={Styles.modal}
              style={{ backgroundColor: "rgba(59, 59, 59, 0.65)" }}
            >
              <div
                className={Styles.overlay}
                onClick={toggleModal}
                style={{ height: "100px" }}
              ></div>
              <div className={Styles.modalContent}>
                <div className="flex justify-between items-center w-full p-4">
                  <div className="flex-1 ml-[-30px] mt-[-30px]">
                    <Image
                      src={image4}
                      alt="Close"
                      width={30}
                      height={30}
                      onClick={toggleModal}
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="flex-1 text-right mr-[-20px] mt-[-30px] relative">
                    {" "}
                    <span className="text-right text-[#101010] font-semibold text-[16px] leading-[20px] font-[Yekan Bakh FaNum]">
                      {" "}
                      مراحل استفاده از اعتبار تارا
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2   flex  ">
                  <div className="p-4  w-[200px] ml-[-10px] mt-[-70px]">
                    {" "}
                    <Image
                      src={imagePay}
                      alt="Image"
                      width={260}
                      height={480}
                    />
                  </div>
                  <div className="p-4  w-[200px] mt-[-70px]">
                    <div className="flex justify-between items-center self-stretch">
                      <div>
                        {" "}
                        <Image
                          src={imageOcheckG2}
                          alt="Image"
                          width={40}
                          height={40}
                        />{" "}
                        <span className="absolute right-[10px] top-[2px] text-white text-right font-[450] text-[12px] leading-[20px] font-[Yekan Bakh VF] mt-[72px] mr-[29.5px]">
                          1
                        </span>
                      </div>
                      <div
                        className="w-[89px] h-[3px]"
                        style={{ background: "#EDEDED" }}
                      ></div>
                      <div>
                        {" "}
                        <Image
                          src={imageOcheckG2}
                          alt="Image"
                          width={40}
                          height={40}
                        />{" "}
                        <span className="absolute right-[10px] top-[2px] text-gray-600 text-right font-[450] text-[12px] leading-[20px] font-[Yekan Bakh VF] mt-[72px] mr-[174px]">
                          3
                        </span>
                      </div>
                      <div
                        className="w-[89px] h-[3px]"
                        style={{
                          background:
                            "linear-gradient(268deg, #19B16A 0%, #2B8C51 100%)",
                        }}
                      ></div>
                      <div>
                        {" "}
                        <Image
                          src={imageOcheckG}
                          alt="Image"
                          width={40}
                          height={40}
                        />{" "}
                        <span className="absolute right-[10px] top-[2px] text-gray-600 text-right font-[450] text-[12px] leading-[20px] font-[Yekan Bakh VF] mt-[72px] mr-[101.5px]">
                          2
                        </span>{" "}
                      </div>
                    </div>
                    <div className="flex h-10 px-4 py-1.5 justify-center items-center gap-2.5 rounded-full w-[100px] ml-[70px] mt-[20px] bg-gray-100">
                      <span className="text-[#101010] text-right font-semibold text-[14px] leading-[20px] custom-font">
                        مرحله اول
                      </span>
                    </div>
                    <div className="text-[#101010] text-right font-normal text-[12px] leading-[20px] custom-font mt-[10px]">
                      احراز هویت در اپلیکیشن تارا 
                    </div>
                    <div className="flex mt-[160px] cursor-pointer w-[180px] h-[40px] p-[12px] justify-center items-center gap-[6px] rounded-[12px] bg-[linear-gradient(268deg,#19B16A_0%,#2B8C51_100%)] ">
                      {" "}
                      <span className="text-white text-center font-semibold text-[16px] leading-[20px]">
                        مرحله بعد
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

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
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BeforLogin;
