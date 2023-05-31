import React from 'react'
import {arrowOutlineDown,businessPlan,pairProg} from '../assets'
import {leftCardItem,rightCardItem,largeCardItem} from '../data'
import {SmallCard,LargeCard} from '../components'


const Studio = () => {
  return (
    <div className='h-full xl:h-full px-6'>
      <div className='flex flex-col items-center justify-center'>
       <div className='flex items-center space-x-4 mt-5 md:my-10 xl:my-20'>
        <p className='text-[10px] md:text-[14px] xl:text-[18px] 
        leading-[11.72px] xl:leading-[21.09px] font-[6  00]'>View more</p>
        <img 
        src={arrowOutlineDown} 
        className= ' h-[4px] xl:h-[8px] w-[8px] xl:w-[10px] '
        alt="arrow-down" />
       </div>
       <h1 className='text-[16px] md:text-[24px] 2md:text-[30px] lg:text-[30px] xl:text-[40px] leading-[46.88px] 
       font-[600] not-italic  py-5 xl:py-16 text-center'>We are a startup studio providing:</h1>
       <div className='grid grid-rows-3 grid-cols-2 md:gap-x-10 2md:gap-x-20 lg:gap-x-20 xl:gap-x-40 md:ml-40 lg:ml-32 xl:ml-48'>
       <div className=''>
        {leftCardItem?.map((card,index) => (
         <SmallCard 
         key={index}
         icon={card.icon}
         title={card.title}
         />
        ))}
       </div>
       <div>
        {rightCardItem?.map((card,index) => (
         <SmallCard
         key={index} 
         icon={card.icon}
         title={card.title}
         />
        ))}
       </div>
      </div>
      <div className='h-full xl:h-full my-10 -mt-[36em] 2md:-mt-[50em] lg:-mt-[50em] xl:-mt-[60em]  flex 
       px-6 md:px-0  flex-col md:flex-row xl:flex-row items-center space-x-0 2md:space-x-0 xl:space-x-16'>
      <div className='order-last 2md:order-first xl:order-first'>
        <img 
        src={businessPlan} 
        className="h-[127px] md:h-[250px] 2md:h-full lg:h-full xl:h-[370px] 
        w-[188px] md:w-[350px] 2md:w-[400px] lg:w-[400px] xl:w-[529px] 
        order-last object-contain 2md:mt-16"  
        alt="Business Plan" 
        />
        </div>
        <p className='w-[293px] md:w-[350px] 2md:w-[400px] lg:w-[400px] xl:w-[622px] h-[117px] md:h-[250px] xl:h-[294px]
      not-italic font-[300] text-[11px] md:text-[16px] 2md:text-[20px] lg:text-[20px] xl:text-[24px] text-center md:text-left lg:text-left xl:text-left
      leading-[17px] md:leading-[20px] 2md:leading-[28px] xl:leading-[42px] mt-[3rem] md:mt-20 xl:-mt-3'>Against all odds: thoughts and 
        observations from a permanent 
        state of starting up. We build 
        your startup product from zero 
        to one. We bring the tech and 
        product expertise early-stage 
        founders need. We are your 
        technical product team. We 
        help get your startup from 
        an idea into the market and 
        beyond. We typically work with 
        pre-seed and seed-funded 
        businesses alongside founders.</p>
      </div>
      <div className='grid grid-rows-3 lg:grid-rows-2 lg:grid-cols-3 xl:grid-rows-2 grid-cols-2 xl:grid-cols-3 
       gap-y-0 xl:gap-y-10 gap-x-0 md:gap-x-14 md:gap-y-14 lg:gap-x-4 xl:gap-x-8  h-full'>
        {largeCardItem.map((card,index) => (
          <LargeCard 
          key={index}
          text={card.text}
          title={card.title}
          divcName={card.divClassName}
          textcName={card.textClassName}
          titlecName={card.titleClassName}
          />
        ))}
      </div>
      <div className='flex  px-6 md:px-0 items-center 
      flex-col md:flex-row xl:flex-row space-x-0 lg:space-x-20 xl:space-x-20 
      mt-10 xl:my-28'>
        <p className='w-[279px] md:w-[350px] 2md:w-[400px] lg:w-[400px] xl:w-[671px]  h-[139px]
        md:h-[250px] 2md:h-[350px]  xl:h-[294px] md:text-left not-italic font-[400] text-[11px]
        md:text-[16px] 2md:text-[20px] lg:text-[20px] xl:text-[24px] leading-[17px] md:leading-[20px] 
        2md:leading-[28px] xl:leading-[42px] mt-[-0.5rem] md:mt-10 lg:mt-20 xl:-mt-2 text-center'>
        We keep iterating features to hit Product Market Fit. We continue pushing out 
        one new release each month and have on-demand support for 
        bugs and fixes. We partner with corporations to create 
        a portfolio of diversified ventures in the most cost-efficient 
        way. You bring deep industry knowledge and capital, and we 
        provide the methods, processes, and talent to build future-proof
        businesses from the ground.
        </p>
        <div className=''>
          <img src={pairProg}
          className="h-[153px] md:h-[250px] 2md:h-full 2md:w-[400px] lg:w-[400px] xl:h-[334px] w-[226px] 
          md:w-[350px] xl:w-[499px] 
           object-contain"  
          alt="pair programming" />
        </div>
      </div>
       </div>
    </div>
  )
}

export default Studio;