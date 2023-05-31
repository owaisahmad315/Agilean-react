import React from 'react'
import { useParams } from 'react-router-dom'
import { bulb,vertical,checkMark,line1,line3 } from '../assets'
import {helpItem,weEnsureItem} from '../data'
import AnimatedPage from '../animatedPage'

const Ensure= ({menu}) => {
  return (
    <AnimatedPage>
    <div className='flex flex-col justify-center py-5 
    md:py-10  xl:py-20'>
      <div >
      <div className='px-6 2md:px-12 lg:px-12 xl:px-24'>
      <h2 className='w-[175px] md:w-[500px] xl:w-[704px] h-[40px] md:h-[54px] xl:h-[144px] 
       font-[700] text-[16px] md:text-[32px] xl:text-[58px] leading-[20px] md:leading-[40px] xl:leading-[72px]
       tracking-[-0.03em]'>The most common pitfall in the death cycle are:</h2>
      <ul className='space-y-6 md:space-y-8 xl:space-y-20 md:mt-10'>
      {helpItem.map((item,index)=>(
          <div key={index}
          className="flex space-x-5 ">
          <img src={item.icon} 
          alt={item.title}
          className="h-[13.33px] md:h-[18px] xl:h-[30px] w-[13.33px] md:w-[18px] xl:w-[30px]" />
          <li className='text-white text-[10px] md:text-[16px] xl:text-[32px] font-[400] 
          leading-[15px] md:leading-[24px] xl:leading-[30px]'>
            {item.title}
          </li>
          </div>
      ))}
      </ul>
        </div>
      <div className='flex flex-col items-center justify-around mt-5'>
        <img src={bulb}
         alt=""
         className='h-[150px] md:h-[250px] xl:h-[383px] w-[150px] md:w-[220px] xl:w-[323px]' />
         <p className='my-4 px-6 font-[400] text-[10px] md:text-[16px] xl:text-[32px] 
         text-left leading-[15px] md:leading-[20px] xl:leading-[40px]  text-[#b0c4cd]'>We made these mistakes. They sucked. Until we learned that…</p>
      </div>
      <div className='bg-[#ffffff] py-10 2md:px-12 xl:py-20  flex flex-col items-center lg:px-12'>
        <h2 className='text-black text-[15px] md:text-[24px] xl:text-[48px] leading-[17.58px] md:leading-[35px] xl:leading-[56.25px] 
        font-[600] uppercase pb-10 md:pb-15 xl:pb-20'>we ensure</h2>
      <ul className='px-6'>
      <div className="flex">
          <div className='grid grid-rows-3 xl:grid-rows-3  grid-cols-1  xl:gap-y-10'>
          <div className='pl-0 xl:pl-16'>
          <img 
          src={checkMark} 
          alt=""
          className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[51px]
            mt-1" />
          <li className='mt-5 text-black h-[45px] md:h-[60px] xl:h-[120px] w-[100px] md:w-[200px] xl:w-[345px]  
          text-[10px] md:text-[16px] xl:text-[24px] font-[400] leading-[15px] md:leading-[20px] xl:leading-[40px]'>
            Lightning fast iteration         
            </li>
          </div>
          <div className='pl-0 xl:pl-16 '>
          <img 
          src={checkMark} 
          alt=""
          className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[51px]
          mt-1" />
          <li className='mt-5 text-black h-[30px] md:h-[50px] xl:h-[80px] w-[100px] md:w-[200px] 
          xl:w-[297px] text-[10px] md:text-[16px] xl:text-[24px] 
          font-[400] leading-[15px] md:leading-[20px] xl:leading-[40px] '>
          Grow the company          
            </li>
          </div>
          <div className='pl-0 xl:pl-16 '>
          <img 
          src={checkMark} 
          alt=""
          className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[51px]
          mt-1" />
          <li className='mt-5 h-[30px] md:h-[50px] xl:h-[80px] w-[100px] md:w-[200px] 2md:w-[270px] xl:w-[278px] 
           text-black text-[10px] md:text-[16px] xl:text-[24px]  font-[400] leading-[15px] 
           md:leading-[20px] xl:leading-[40px] '>
           Launch a fully functional product in weeks     
            </li>
            </div>
          </div>
          <img src={line1}
           className='mx-4 hidden xl:block'
           alt="" />
           <img src={line3}
           className='mx-4 block xl:hidden'
           alt="" />
          <div className='grid grid-rows-3 xl:grid-rows-3  grid-cols-1 xl:gap-y-10 '>
          <div className='pl-0 xl:pl-16 '>
          <img 
          src={checkMark} 
          alt=""
          className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[51px]
          mt-1" />
          <li className='mt-5 h-[30px] md:h-[50px] xl:h-[80px] w-[100px] md:w-[200px] xl:w-[168px]  
          text-black text-[10px] md:text-[16px] xl:text-[24px] font-[400] leading-[15px] md:leading-[20px] 
          xl:leading-[40px]'>
           Absurdly low cost          
            </li>
            </div>
          <div className='pl-0 xl:pl-16 '>
          <img 
          src={checkMark} 
          alt=""
          className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[51px]
          mt-1" />
          <li className='mt-5 h-[31px] md:h-[50px] xl:h-[80px] w-[100px] md:w-[200px] xl:w-[334px]
            text-black 
          text-[10px] md:text-[16px] xl:text-[24px] font-[400] leading-[15px] md:leading-[20px]
           xl:leading-[40px]'>
          Focus on strong soft skills  
            </li>
            </div>
            <div className='pl-0 xl:pl-16'>
            <img 
          src={checkMark} 
          alt=""
          className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[51px]
          mt-1" />
          <li className='mt-5 h-[30px] md:h-[60px] xl:h-[120px] w-[100px] md:w-[200px] 2md:w-[270px] xl:w-[278px]  text-black
          text-[10px] md:text-[16px] xl:text-[24px] font-[400] leading-[15px] md:leading-[20px] 
          xl:leading-[40px] '>
          Transparent pricing. Break the pre-series A cycle of death.          
            </li>
            </div>
          </div>
          <img src={line1}
           className='mx-4 hidden xl:block'
           alt="" />
           <img src={line3}
           className='mx-4 block xl:hidden'
           alt="" />
          <div className='grid grid-rows-3 xl:grid-rows-3   grid-cols-1 xl:gap-y-10'>
          <div className='pl-0 xl:pl-16 '>
          <img 
          src={checkMark} 
          alt=""
          className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[51px]
          mt-1" />
          <li className='mt-5 h-[30px] md:h-[50px] xl:h-[80px] w-[100px] md:w-[200px] xl:w-[168px]  
          text-black text-[10px] md:text-[16px] xl:text-[24px] font-[400] leading-[15px] md:leading-[20px] 
          xl:leading-[40px]'>
          Time for user feedback          
            </li>
            </div>
          <div className='pl-0 xl:pl-16 '>
          <img 
          src={checkMark} 
          alt=""
          className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[51px]
          mt-1" />
          <li className='mt-5 h-[31px] md:h-[50px] xl:h-[80px] w-[100px] md:w-full xl:w-[334px]
            text-black 
          text-[10px] md:text-[16px] xl:text-[24px] font-[400] leading-[15px] md:leading-[20px]
           xl:leading-[40px]'>
          Founder-friendly services.        
            </li>
            </div>
          <div className='pl-0 xl:pl-16'>
          <img 
          src={checkMark} 
          alt=""
          className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[51px]
          mt-1" />
          <li className='mt-5 h-[30px] md:h-[60px] xl:h-[120px] w-[100px] md:w-[310px] 2md:w-[270px] xl:w-[278px]  text-black
          text-[10px] md:text-[16px] xl:text-[24px] font-[400] leading-[15px] md:leading-[20px] 
          xl:leading-[40px] md:pr-6'>
          From web to mobile apps,we can build all the software workflows you need to delight your customers   
            </li>
            </div>
          </div>
          </div>
      </ul>
      </div>
      </div>
    </div>
    </AnimatedPage>
  )
}

export default Ensure;