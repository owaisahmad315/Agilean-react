import React from 'react'
import { validationItems } from '../data'
import { Rectangle } from '../components'
import AnimatedPage from '../animatedPage'


const ValidationType = () => {
  return (
    <AnimatedPage>
    <div className='py-5 h-full px-8 2md:px-12 xl:py-10'>
        <div className='flex justify-around items-center flex-col'>
            <h1 className='text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px] leading-[28px] 
             md:leading-[36px] lg:leading-[48px] xl:leading-[56.25px] 
            font-[700] py-5 xl:py-10'>Validation Types</h1>
        <div className='grid lg:grid-rows-4 xl:grid-rows-4 lg:grid-cols-2 xl:grid-cols-2 grid-rows-7 grid-cols-1  gap-4'>
            {validationItems.map((card,index)=>(
              <Rectangle 
              key={index}
              title={card.title}
              text={card.text}
              style={`h-[258px] xl:h-[371px] w-full  xl:w-[612px]  rounded-[24px]
              px-6 xl:px-[46px] py-10 xl:py-[35px] bg-[#b0c4cd] text-[#111]`}
              titleStyle={card.titleStyle}
              textStyle={card.textStyle}
              />
            ))}       
        </div>
        <div className='grid grid-rows-1 grid-cols-1 mt-[-23rem] sm:mt-4'>
            <Rectangle            
              title={"Product Market Fit Pivot Pointing"}
              text={`Product market fit pivot pointing is the process of
              adjusting a product or business strategy based on the needs and preferences of the
              target market. It involves analyzing customer behavior and feedback data to identify
              areas where the product or solution can be improved or refined to meet the market’s needs better.`}
              style={`h-[250px]  xl:h-[371px] w-full xl:w-[948px]  rounded-[24px]
              xl:px-[46px] xl:py-[35px] px-6 py-10 bg-[#b0c4cd] mt-[24rem] md:-mt-[15rem] xl:-mt-[24rem] text-[#111]`}
              titleStyle={`font-[600] text-[16px]  md:text-[24px] lg:text-[28px] xl:text-[32px] text-center leading-[20px] md:leading-[28px] lg:leading-[32px] xl:leading-[38px]  xl:pb-4`}
              textStyle={`w-full xl:w-[703px] h-full xl:h-[170px]  xl:text-center ml-0 xl:ml-[5rem]  font-[400] text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px]
              leading-[16px] md:leading-[24px] lg:leading-[28px] xl:leading-[34px] `}             
              />
        </div>
        </div>
    </div>
    </AnimatedPage>
  )
}

export default ValidationType