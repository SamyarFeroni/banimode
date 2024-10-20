import React from "react";
import Image from "next/image";
import image4 from "../public/image/Monogram.svg";
import image5 from "../public/image/white-logo 1.svg";

function HeadDown() {
  return (
    <div>
      <div className=" mt-[160px] ml-[20px]">
        <div className="flex justify-center items-center gap-4 self-stretch mt-auto ">
          <div>
            {" "}
            <Image src={image4} alt="Image" width={25.875} height={24} />
          </div>
          <div className="text-[#888]">|</div>
          <div>
            <Image src={image5} alt="Image" width={24} height={24} />{" "}
          </div>
        </div>

        <div className="text-[#888] text-center font-[Poppins] text-[12px] font-normal leading-[1.4]">
          © Copyright 2024 Banimode.com
        </div>
      </div>
    </div>
  );
}

export default HeadDown;
