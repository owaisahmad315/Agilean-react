import React from 'react'
import {bookItem} from '../data' 



const Book = () => {
  return (
    <div className='h-full xl:h-full   font[Manrope] bg-[#b0c4cd]
     text-[#111] py-10 xl:py-10 px-6'>
        <div className='flex flex-col justify-around  items-center'>
            <p className='uppercase text-[8px] md:text-[12px] 2md:text-[14px] xl:text-[14px] 
            leading-[10px] md:leading-[16px] xl:leading-[19.12px]  font-[700]'>Why choose us</p>
            <h1 className='text-[16px] md:text-[24px] 2md:text-[32px] lg:text-[32px] xl:text-[40px]  mt-2 leading-[24px]
            md:leading-[36px] xl:leading-[48px] tracking-[-0.03em] font-[800]'>SaaS and ERP</h1>
            <p className='mt-3 text-[12px] md:text-[16px] 2md:text-[18px] xl:text-[18px] leading-[18px] md:leading-[24px] xl:leading-[30px] 
            tracking-[-0.02em] font-[400] text-center
            w-[240px] md:w-[320px] xl:w-[446px]'>Design, develop, and support complex, 
            high performing SaaS applications </p>
            <p className='text-[8px] md:text-[12px] 2md:text-[14px] xl:text-[14px] xl:mt-8 font-[700] 
            leading-[10.93px] md:leading-[16px] xl:leading-[19.12px'>Startig at</p>
            <h2 className='mt-3 text-[16px] md:text-[24px] 2md:text-[32px] xl:text-[40px] leading-[25px] md:leading-[36px] xl:leading-[48px] 
             tracking-[-0.03em] font-[800] '>1% Equity</h2>
             <p className='mt-2 text-[12px] md:text-[16px] md2:text-[18px] xl:text-[18px] font-[400]
              leading-[18px] md:leading-[24px] xl:leading-[30px]  tracking-[-0.02em]'>Per month
              with a 6 month commitment</p>
            <div className='flex flex-col md:flex-row xl:flex-row justify-around xl:items-center  items-start'>
                {bookItem.map((item,index) => (
                    <div
                    key={index} 
                    className='flex items-center xl:pt-10  pt-5'>
                    <img src={item.icon} 
                    className="h-[16px] md:h-[35px] xl:h-[70px]  bg-[#111] rounded-full xl:p-5 
                    p-1 w-[16px] md:w-[35px] xl:w-[70px]  object-contain tablet_book-icons" alt="" />
                    <p className='pl-4 md:pr-6 xl:pr-8 text-[10px] md:text-[16px] 2md:text-[20px] xl:text-[20px]  
                    leading-[15px] md:leading-[18px] xl:leading-[24px] tracking-[-0.02em] font-[700]'>{item.text}</p>
                    </div>
                ))}
            </div>
            <button className='h-[37px] md:h-[54px] xl:h-[84px] xl:my-16 mt-8 font-[Roboto] w-[152px] 
            md:w-[250px] xl:w-[574px] bg-[#111] xl:rounded-[18px] rounded-[8px] text-white 
            text-[16px] md:text-[20px] 2md:text-[24px] xl:text-[28px] leading-[18.75px] md:leading-[24px] 
            xl:leading-[32.81px] font-[500]'>Book a call</button>
        </div>
    </div>
  )
}

export default Book