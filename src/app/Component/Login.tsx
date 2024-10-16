"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import imageQ from "../public/image/circle-questionmark, faq, help, questionaire.svg";
import imageFlashUp from "../public/image/chevron-up-small copy.svg";
import imageEdit from "../public/image/edit-3.svg";
import imageLogin from "../public/image/bubble-check, comment, feedback.svg";
import imageFlasher from "../public/image/Arrow, Down 1 copy.svg";
import imageFlashDown from "../public/image/chevron-down-small.svg"
import bgCustom from "./HeadTop.module.css"

function DownLog() {
  // State for the phone entry modal

  return (
    <div>
         <div className="flex w-[420px]  p-[24px] flex-col justify-center items-end  rounded-[20px] bg-white shadow-[0px_3px_16px_0px_rgba(0,_0,_0,_0.10)] mt-[200px] ml-[400px] relative">

            <div className="flex justify-between items-center self-stretch">
            <div className="text-[#53565A] text-center font-[Yekan_Bakh_FaNum] text-[14px] font-semibold leading-[20px] flex cursor-pointer"><Image src={imageEdit} alt="Image" width={20} height={20} />تغییر شماره</div>
                <div className="text-[#53565A] text-center font-[Yekan_Bakh_FaNum] text-[14px] font-normal leading-[20px]">با شماره 09211910094 وارد شدی!</div>
            </div>
            <div className="w-[372px] h-[1px] bg-[#EDEDED] relative mt-3"></div>


            <div className="text-[#101010] text-center font-[Yekan_Bakh_FaNum] text-[14px] font-semibold leading-[20px] mt-3" dir="rtl">اعتبار تارا دارم؟</div>
            
            <div className={bgCustom.bggradientcustom}>
                <div className="text-[#101010] text-right font-[Yekan_Bakh_FaNum] text-[14px] font-normal leading-[20px]"dir="rtl">تبریک! شما اعتبار تارا دارید و می‌توانید از بانی‌مد توسط درگاه تارا خرید کنید.</div>
                <div className="flex p-[12px_4px_12px_0] justify-center items-center gap-[6px] self-stretch rounded-[12px] border-2 border-[rgba(255,255,255,0.40)] bg-gradient-to-r from-[#19B16A] to-[#2B8C51] cursor-pointer"><Image src={imageFlasher} alt="Image" width={24} height={24} /> <a className="text-white text-center font-YekanBakhFaNum text-[16px] font-semibold leading-[20px]" dir="rtl">استفاده از اعتبار</a></div>

            </div>
    
      </div>


        <div className="flex w-[800px] p-[16px_24px] flex-col justify-center items-end gap-[16px] rounded-[20px] bg-white shadow-[0px_2px_16px_rgba(0,_0,_0,_0.06)] mt-11 relative ml-[340px]">
            <div className="text-[#101010] text-center font-[Yekan_Bakh_FaNum] text-[16px] font-semibold leading-[22px] flex">سوالات متداول<Image src={imageQ} alt="Image" width={20} height={20} /></div>
            <div className="flex p-3 items-center gap-3 self-stretch rounded-[12px] border border-[#EDEDED] bg-white flex" dir="rtl"><a className="text-[#101010] text-right font-Yekan_Bakh_FaNum text-[12px] font-semibold leading-[20px]">من اعتبار تارا دارم، می‌تونم خریدم از بانی‌مد رو اعتباری انجام بدم و بعد از مزایای این کمپین هم استفاده کنم؟</a><Image className="mr-[160px] cursor-pointer" src={imageFlashDown} alt="Image" width={24} height={24} /></div>
            <div className="flex flex-col p-3 items-start gap-4 self-stretch rounded-[12px] border border-[#EDEDED] bg-white">
                <div className="text-[#101010] text-right font-YekanBakhFaNum text-[12px] font-semibold leading-[20px] flex" dir="rtl"><a className="relative ml-[29px] text-right" dir="rtl">جواب: اگر فقط اعتبار تارا دارید و با اعتبار تارا، از بانی مد خرید کنین، با توجه به جدول تخصیص اعتبار، اعتبار بانی‌مدی هم دریافت می‌کنین. </a><Image className="cursor-pointer" src={imageFlashUp} alt="Image" width={24} height={24} /></div>
                <div className="w-[728px] h-px bg-[#EDEDED]"></div>
                <div className="text-[#888] text-right font-[Yekan_Bakh_FaNum] text-[12px] font-normal leading-[20px] ml-[86px]" dir="rtl">جواب: اگر فقط اعتبار تارا دارید و با اعتبار تارا، از بانی مد خرید کنین، با توجه به جدول تخصیص اعتبار، اعتبار بانی‌مدی هم دریافت می‌کنین. </div>
            </div>
            <div className="flex p-[12px] items-center gap-[12px] self-stretch rounded-[12px] border border-[#EDEDED] bg-white" dir="rtl"><a className="text-[#101010] text-right font-Yekan_Bakh_FaNum text-[12px] font-semibold leading-[20px]">احراز هویت و تعیین اعتبار سنجی برای گرفتن اعتبار چه قدر زمان می‌بره؟ </a><Image className="mr-[336px] cursor-pointer" src={imageFlashDown} alt="Image" width={24} height={24} /></div>
        </div>


    </div>
  );
}

export default DownLog;
