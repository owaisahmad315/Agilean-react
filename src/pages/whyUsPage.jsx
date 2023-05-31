import React from 'react'
import { bulb } from '../assets'
import {whyUsItem} from '../dataPage'
import { useParams } from 'react-router-dom'


const WhyUsPage= ({menu}) => {
  const {itemId} = useParams();
  
  const selectedItem = menu.items.find((item => item.id === itemId))

  return (
    <div className='flex flex-col justify-center py-20 
    sm-max:py-5'>   
      <div >
      <div className='px-20 sm-max:px-6'>
      <h2 className='w-[704px] sm-max:w-[175px] h-[144px] sm-max:h-[40px] font-[700] text-[58px]  leading-[72px]
      tracking-[-0.03em] sm-max:text-[16px]  sm-max:leading-[20px] sm-max:mb-5'>
      The most common pitfall in the death cycle are:
      </h2>
      <h1>{selectedItem.name}</h1>
      {/* <ul className='space-y-20 sm-max:space-y-6'>
          <div
          className="flex space-x-5">
          <img src={item?.iconItems?.icon} 
          alt={item.title}
          className="h-[30px] sm-max:h-[13.33px] w-[30px] sm-max:w-[13.33px]" 
          />
          <li className='text-white text-[32px] font-[400] 
          leading-[30px] sm-max:leading-[15px] sm-max:text-[10px] '>
          {item.iconItems?.text}
          </li>
          </div>
      </ul> */}
        </div>
      <div className='flex flex-col items-center justify-around'>
        <img src={bulb}
        alt=""
        className='h-[383px] sm-max:h-[150px] w-[323px] sm-max:w-[150px]' />
        <p className='my-4 sm-max:px-6 font-[400] text-[32px] sm-max:text-[10px] 
        sm-max:text-left leading-[40px] sm-max:leading-[15px] text-[#b0c4cd]'>
        We made these mistakes. They sucked. Until we learned that…
        </p>
      </div>
      <div className='bg-[#ffffff] py-20  flex flex-col items-center justify-around  w-full
      sm-max:py-10'>
      <h2 className='text-black text-[48px] leading-[56.25px] 
        font-[600] uppercase pb-20 sm-max:pb-10 sm-max:text-[15px] sm-max:leading-[17.58px]'>{selectedItem.subtitle}</h2>
      <ul className='px-20 sm-max:px-10 grid grid-rows-2 sm-max:grid-rows-3 sm-max:grid-cols-2  grid-flow-col gap-2 sm-max:gap-x-5 '>
        <div className="flex">
            <div className=''>
          <img 
          src={selectedItem.contentItems.icon} 
          alt={selectedItem.contentItems.text}
          className="h-[51px] sm-max:h-[16px] w-[51px]
          sm-max:w-[16px]" />
          <li className='text-black
          text-[24px] sm-max:text-[10px] font-[400] leading-[40px] sm-max:leading-[15px]'>
            {selectedItem.contentItems.text}
          </li>
            </div>
          {/* <img src={vertical} alt="" /> */}
          </div>
      </ul>
      </div>
      </div>
        
    </div>
  )
}

export default WhyUsPage