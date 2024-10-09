import React from 'react'
import Image from 'next/image'
import image1 from '../public/image/PhoneCardLogo.png'
import image2 from '../public/image/banimodeBigLogo.png'
import image3 from '../public/image/Ellipse 1.png'
import image4 from '../public/image/Arrow, Down 1.svg'
function HeadTop() {
  return (
    <div className=' flex flex-col justify-center items-center ml-2  bg-cover bg-center w-[1440px] h-[501px] flex-shrink-0'   style={{ backgroundImage: `url(${image2.src})` }}>
      

        <div className="inline-flex flex-col justify-center items-center gap-3 ml-2 h-screen bg-cover bg-center mt-[160px] ">

            <div className="text-white text-center font-bold text-[28px] p-4" dir="rtl"><h1>نرفــــــــــته برمــــــــــی‌گرده!</h1></div>

            <div className="text-white text-center font-normal text-[16px] p-4"> <h2>از بانی مد نقدی بخر، معادلش اعتبار تارا بگیر</h2></div>

            <div className="text-white text-center font-[600] text-[14px] leading-[22px] font-['Yekan_Bakh_FaNum'] p-4 flex space-x-4">

              <div><a>بدون پیش‌پرداخت</a></div>
              <div><Image src={image3} alt='Image' width={4} height={4}/></div>
              <div><a>بدون سود و کارمزد</a></div>
              <div><Image src={image3} alt='Image' width={4} height={4}/></div>
              <div><a>بازپرداخت در 3 قسط</a></div>

            </div>

            <div className='justify-center items-center '>
              <Image src={image1} alt='Image' width={306.596} height={149.787}/>
            </div>


            <div className='flex w-[420px] p-[24px] flex-col justify-center items-end gap-[24px] rounded-[20px] bg-white shadow-[0px_3px_16px_0px_rgba(0,_0,_0,_0.10)] -mt-[194px]'>
              <div className="text-[#101010] text-center font-['Yekan_Bakh_FaNum'] text-[16px] font-semibold leading-[20px]">اعتبار تارا دارم؟</div>
              <div className="text-[#53565A] text-right font-['Yekan_Bakh_FaNum'] text-[14px] font-normal leading-[20px]"dir="rtl"> <Image src={image3} alt='Image' width={4} height={4}/> جهت بررسی اعتبار تارا ابتدا شماره موبایل خورد را وارد کنید.</div>
              <div className="flex p-[12px_4px_12px_0] justify-center items-center gap-[6px] self-stretch rounded-[12px] bg-[linear-gradient(268deg,#19B16A_0%,#2B8C51_100%)]"><a className="text-white text-center font-['Yekan_Bakh_FaNum'] text-[16px] font-semibold leading-[20px]">وارد کردن شماره موبایل</a></div>
            </div>
        </div>




        <div className='bg-white w-full h-[calc(100vh-501px)]'>
          <div className=''></div>
          <div className=''></div>
        </div>
      
    </div>
  )
}

export default HeadTop
