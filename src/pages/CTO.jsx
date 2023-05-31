import React from 'react'
import {Card} from '../components'
import {CTOItems} from '../data'
import {operationPana} from '../assets'
import AnimatedPage from '../animatedPage'


const CTO = () => {
  return (
    <AnimatedPage>
    <div className='xl:w-full 
    xl:h-full'>
        <div className='flex flex-col md:justify-start xl:justify-start xl:px-[150px] xl:space-y-2 px-6 2md:px-12 lg:px-12 xl:my-20 
        my-10'>
            <h1 className='h-[20px]  xl:h-[50px] w-[96px] md:w-[150px] xl:w-[192px]  text-[16px] md:text-[24px] xl:text-[32px] 
            font-[500] leading-[20px]  xl:leading-[50px]  tracking-[-0.03em]
            text-[#b0c4cd]'>CTO Offerings
            </h1>
            <h2 className='h-[80px] md:h-[110px] xl:h-[150px] w-full xl:w-[849px] font-[600] text-[16px] 
            md:text-[24px]  xl:text-[36px] leading-[20px] md:leading-[32px] xl:leading-[50px]  tracking-[-0.03em]
            text-[#fff] lg:mt-2'>
                Interim CTOs are experienced technology executives who can step in temporarily to 
                provide leadership and guidance to a company's technology team. 
            </h2>
            <p className='w-[265px] md:w-[488px] lg:w-full xl:w-[792px] h-[45px] md:h-[60px] xl:h-[80px] text-[10px] md:text-[16px] 
            lg:text-[20px] xl:text-[24px] leading-[15px] md:leading-[20px] lg:leading-[28px] xl:leading-[40px]  tracking-[-0.02em] font-[400]
            text-[#FFFFFF96]'>They can help with the development and implementation of technology strategies, as well 
            as the management and oversight of technology projects.
            </p>
            <div className='flex justify-center items-center'>
            <img src={operationPana} 
            className="md:hidden lg:hidden xl:hidden h-[187px] w-[201px] block"
            alt="" />
            </div>
        </div>
        <div className='py-10 xl:py-20  bg-[#fff] text-[#111] sm:px-6 md:px-6 xl:px-[200px]'>
            <div className='grid grid-rows-3 grid-cols-2 gap-y-0 md:gap-y-10 xl:gap-y-20 gap-x-4 md:gap-x-6 xl:gap-x-10 '>
            {CTOItems.map((card,index)=>(
                <Card 
                key={index}
                icon={card.icon}
                title={card.title}
                text={card.text}
                cName={card.cName}
                />
            ))}
            </div>    
        </div>
        <div className='flex flex-col justify-center items-center py-5 xl:py-10 px-6 2md:px-12 lg:px-12  md:px-6 '>
            <p className='w-full md:w-full  xl:w-[957px] h-[90px] 2md:h-[10px] xl:h-[160px]  font-[400]
            text-[11px] md:text-[16px] xl:text-[24px] leading-[15px] md:leading-[20px] lg:leading-[28px] xl:leading-[40px]  text-center 
            text-[#b0c4cd]'>Overall, these types of CTOs and tech leadership can provide valuable expertise and support to companies needing more resources or a full-time CTO or tech team. 
            They can help with the development and implementation of technology strategies, the management of projects, and the oversight of technology operations.</p>
        </div>
    </div>
    </AnimatedPage>
  )
}

export default CTO