"use client";
import React, { useEffect, useState } from "react";
import Styles from "./modal.module.css";
import Image from "next/image";
import image1 from "../public/image/PhoneCardLogo.png";
import image2 from "../public/image/banimodeBigLogo.png";
import image3 from "../public/image/Ellipse 1 (1).svg";
import image4 from "../public/image/cross-small, crossed small, delete, remove.png";
import DownLog from "./Login"



const HeadTop = () => {
  
  const [modal, setModal] = useState(false); // State for the phone entry modal
  const [confirmationModal, setConfirmationModal] = useState(false); // State for the confirmation modal
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [inputFocused, setInputFocused] = useState<boolean>(false); // State to track input focus
  const [textColor, setTextColor] = useState<string>("#828282");
  const [showNewComponent, setShowNewComponent] = useState(false);

  const handleClick = () => {
    setShowNewComponent(true);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneNumber(value);

    // Validate the input to check if it is exactly 11 digits
    if (value.length === 11 && /^\d+$/.test(value)) {
      setIsValid(true); // Mark as valid if 11 digits
      setErrorMessage("");
    } else {
      setIsValid(false); // Mark as invalid otherwise
      setErrorMessage(value.length > 0 ? "شماره موبایل نادرست است." : "");
    }
  };

  const handleFocus = () => {
    setInputFocused(true); // Set focus state
  };

  const handleBlur = () => {
    setInputFocused(false); // Reset focus state
  };

  const toggleModal = () => {
    setModal(!modal);
    setPhoneNumber("");
    setIsValid(false);
    setErrorMessage("");

    if (!modal) {
      setTimeLeft(60); // Reset timer when modal opens
      setTextColor("#828282");
    }
  };

  const toggleConfirmationModal = () => {
    setConfirmationModal(false); // Close confirmation modal
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (modal || confirmationModal) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            setTextColor("#000000"); // تغییر رنگ متن به مشکی
            return 0;
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [modal, confirmationModal]);

  const formatTimeLeft = () => {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleGetConfirmationCode = () => {
    if (isValid) {
      setModal(false); // Close phone entry modal
      setConfirmationModal(true); // Show confirmation modal
    }
  };
  const handleResendCode = () => {
    setTimeLeft(60); // ریست کردن زمان به 60 ثانیه
    setTextColor("#828282");
  };

  return (
    <div
      className="flex flex-col justify-center items-center ml-2 w-[1500px] h-[501px] m-auto  "
      style={{
        backgroundImage: `url(${image2.src}), linear-gradient(180deg, #19B16A 0%, #00934C 100%)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        margin: "auto",
      }}
    >
      <div className="inline-flex flex-col justify-center items-center gap-3 ml-2 h-screen bg-cover bg-center mt-[160px]  ">
        <div
          className="text-white text-center font-bold text-[28px] p-4"
          dir="rtl"
        >
          <h1>نرفــــــــــته برمــــــــــی‌گرده!</h1>
        </div>

        <div className="text-white text-center font-normal text-[16px] p-4">
          <h2>از بانی مد نقدی بخر، معادلش اعتبار تارا بگیر</h2>
        </div>

        <div className="text-white flex p-[4px_16px] items-center gap-2 self-stretch rounded-[20px] bg-[rgba(255,255,255,0.08)] backdrop-blur-[2px]">
          <div>
            <a>بدون پیش‌پرداخت</a>
          </div>
          <div>
            <Image src={image3} alt="Image" width={4} height={4} />
          </div>
          <div>
            <a>بدون سود و کارمزد</a>
          </div>
          <div>
            <Image src={image3} alt="Image" width={4} height={4} />
          </div>
          <div>
            <a>بازپرداخت در 3 قسط</a>
          </div>
        </div>

        <div className="justify-center items-center ">
          <Image src={image1} alt="Image" width={306.596} height={149.787} />
        </div>
      </div>
      {!showNewComponent && (
        <div className="flex w-[420px] p-[24px] flex-col justify-center items-end gap-[24px] rounded-[20px] bg-white shadow-[0px_3px_16px_0px_rgba(0,_0,_0,_0.10)] -mt-[183px]">
        <div className="text-[#101010] text-center font-['Yekan_Bakh_FaNum'] text-[16px] font-semibold leading-[20px]">
          اعتبار تارا دارم؟
        </div>
        <div className="text-[#53565A] text-right font-['Yekan_Bakh_FaNum'] text-[14px] font-normal leading-[20px]" dir="rtl">
          <Image src={image3} alt="Image" width={4} height={4} />
          جهت بررسی اعتبار تارا ابتدا شماره موبایل خود را وارد کنید.
        </div>

        <div className="flex p-[12px_4px_12px_0] justify-center items-center gap-[6px] self-stretch rounded-[12px] bg-[linear-gradient(268deg,#19B16A_0%,#2B8C51_100%)]">
          <button className={Styles.btnModal} onClick={toggleModal}>
            وارد کردن شماره موبایل
          </button>
        </div>








   


        {/* Modal for Phone Entry */}
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
        {/* Confirmation Modal */}
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
      <div>
        
        {showNewComponent && <DownLog/>} 
      </div>




    </div>
  );
};

export default HeadTop;
