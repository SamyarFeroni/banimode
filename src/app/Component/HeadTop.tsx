"use client";
import Image from "next/image";
import image1 from "../public/image/PhoneCardLogo.png";
import image2 from "../public/image/banimodeBigLogo.png";
import image3 from "../public/image/Ellipse 1 (1).svg";


const HeadTop = () => {
  return (
    <div
      className="flex flex-col justify-center items-center ml-2 w-[1500px] h-[501px] m-auto"
      style={{
        backgroundImage: `url(${image2.src}), linear-gradient(180deg, #19B16A 0%, #00934C 100%)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        margin: "auto",
      }}
    >
      <div className="inline-flex flex-col justify-center items-center gap-3 ml-2 h-screen bg-cover bg-center mt-[160px]">
        <div
          className="text-white text-center font-bold text-[28px] p-4"
          dir="rtl"
        >
          <h1>نرفــــــــــته برمــــــــــی‌گرده!</h1>
          <div>make by samyar feroni</div>
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

        <div className=" justify-center items-center">
          <Image src={image1} alt="Image" width={306.596} height={149.787} />
        </div>
      </div>
    </div>
  );
};

export default HeadTop;
