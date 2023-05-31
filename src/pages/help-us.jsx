import React from 'react'
import { useParams } from 'react-router-dom'
import { bulb,vertical,checkMark,line1,line3 } from '../assets'
import {helpItem,helpListItem} from '../data'
import AnimatedPage from '../animatedPage'

const HelpUs= ({menu}) => {
  
  return (
    <AnimatedPage>
    <div className='flex flex-col justify-center py-5 
    md:py-10  xl:py-20'>
      <div>
      <div className='px-6 2md:px-12 lg:px-12 xl:px-24'>
      <h2 className='w-[175px] md:w-[500px] xl:w-[704px] h-[40px] md:h-[54px] xl:h-[144px] 
       font-[700] text-[16px] md:text-[32px] xl:text-[58px] leading-[20px] md:leading-[40px] xl:leading-[72px]
       tracking-[-0.03em] my-5 xl:my-10'>The most common pitfall in the death cycle are:</h2>
      <ul className='space-y-6 md:space-y-8 xl:space-y-20 md:mt-10'>
      {helpItem.map((item,index)=>(
          <div key={index}
          className="flex space-x-2 xl:space-x-5">
          <img src={item.icon} 
          alt={item.title}
          className="h-[13.33px] md:h-[18px] xl:h-[30px] w-[13.33px] md:w-[18px] xl:w-[30px]" 
          />
          <li className='text-white text-[10px] md:text-[16px] xl:text-[32px] font-[400] 
          leading-[15px] md:leading-[24px] xl:leading-[30px]'>
          {item.title}
          </li>
          </div>
      ))}
      </ul>
        </div>
      <div className='flex flex-col items-center justify-around mt-5'>
        <img 
        src={bulb}
        alt="light bulb"
        className='h-[150px] md:h-[250px] xl:h-[383px] w-[150px] md:w-[220px] xl:w-[323px]' />
        <p className='my-4  font-[400] text-[10px] md:text-[16px] xl:text-[32px] 
        text-left leading-[15px] md:leading-[20px] xl:leading-[40px]  text-[#b0c4cd]'>We made these mistakes. They sucked. Until we learned that…</p>
      </div>
      <div className='2md:w-full bg-[#ffffff] py-10 xl:py-20  flex flex-col items-center xl:justify-around px-6 2md:px-12 xl:px-24'>
      <h2 className='text-black text-[15px] md:text-[24px] xl:text-[48px] leading-[17.58px] md:leading-[35px] xl:leading-[56.25px] 
        font-[600] uppercase pb-10 md:pb-15 xl:pb-20'>we help by</h2>
      <ul className=''>
      <div className="flex">
          <div className='grid grid-rows-3 xl:grid-rows-2  grid-cols-1 xl:gap-y-10'>
          <div className=''>
          <img 
          src={checkMark} 
          alt=""
          className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[51px]
            mt-1" />
          <li className='mt-5 text-black h-[45px] md:h-[60px] xl:h-[120px] w-full md:w-[350px] 2md:w-[430px] xl:w-[345px]  
          text-[10px] md:text-[16px] xl:text-[24px] font-[400] leading-[15px] md:leading-[20px] xl:leading-[40px]'>
            Being your interim, ad-hoc, fractional, virtual, remote, part-time, temp CTO and tech team          
            </li>
          </div>
          <div className=''>
          <img 
          src={checkMark} 
          alt=""
          className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[51px]
          mt-1" />
          <li className='mt-5 text-black h-[30px] md:h-[50px] xl:h-[80px] w-full md:w-full 2md:w-[430px]
          xl:w-[297px] text-[10px] md:text-[16px] xl:text-[24px] 
          font-[400] leading-[15px] md:leading-[20px] xl:leading-[40px] '>
          Establishing an exceptional engineering process          
            </li>
          </div>
          <div className='block xl:hidden'>
          <img 
          src={checkMark} 
          alt=""
          className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[51px]
          mt-1" />
          <li className='mt-5 h-[30px] md:h-[50px] xl:h-[80px] w-full md:w-full 2md:w-[430px] xl:w-[278px] 
           text-black text-[10px] md:text-[16px] xl:text-[24px]  font-[400] leading-[15px] 
           md:leading-[20px] xl:leading-[40px] '>
           Building and maintaining your product     
            </li>
            </div>
          </div>
          <img 
          src={line1} 
          className='hidden xl:ml-20 xl:block '
          alt="" />
          <img 
          src={line3} 
          className='ml-4 mr-6 block xl:hidden'
          alt="" />
          <div className='grid grid-rows-3 xl:grid-rows-2  grid-cols-1 xl:gap-y-10'>
          <div className='pl-0 xl:pl-16 '>
          <img 
          src={checkMark} 
          alt=""
          className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[51px]
          mt-1" />
          <li className='mt-5 h-[30px] md:h-[50px] xl:h-[80px] w-full md:w-full xl:w-[168px]  
          text-black text-[10px] md:text-[16px] xl:text-[24px] font-[400] leading-[15px] md:leading-[20px] 
          xl:leading-[40px]'>
            Scoping and prototyping          
            </li>
            </div>
          <div className='pl-0 xl:pl-16 '>
          <img 
          src={checkMark} 
          alt=""
          className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[51px]
          mt-1" />
          <li className='mt-5 h-[31px] md:h-[50px] xl:h-[80px] w-full md:w-full 2md:w-[430px] xl:w-[334px]
            text-black 
          text-[10px] md:text-[16px] xl:text-[24px] font-[400] leading-[15px] md:leading-[20px]
           xl:leading-[40px]'>
          Hiring and embedding talented people into your team         
            </li>
            </div>
          <div className='block xl:hidden '>
          <img 
          src={checkMark} 
          alt=""
          className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[51px]
          mt-1" />
          <li className='mt-5 h-[30px] md:h-[60px] xl:h-[120px] w-full md:w-full 2md:w-[430px] xl:w-[278px]  text-black
          text-[10px] md:text-[16px] xl:text-[24px] font-[400] leading-[15px] md:leading-[20px] 
          xl:leading-[40px] '>
          Product/Market Fit Pivot Pointing for early-stage founders          
            </li>
          </div>
          </div>
          <img src={line1}
           className='xl:ml-20 hidden xl:block'
           alt="" />
          <div className='hidden xl:grid xl:grid-rows-2 xl:grid-cols-1 xl:gap-y-10 '>
          <div className='xl:pl-16'>
          <img 
          src={checkMark} 
          alt=""
          className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[51px]
          mt-1" />
          <li className='mt-5 h-[80px] w-full md:w-full text-black
          text-[10px] xl:text-[24px]  font-[400] leading-[15px] xl:leading-[40px] '>
           Building and maintaining your product     
            </li>
          </div>
          {/* <img src={vertical} alt="" /> */}
          <div className='xl:pl-16'>
          <img 
          src={checkMark} 
          alt=""
          className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[51px]
          mt-1" />
          <li className='mt-5 xl:h-[120px] w-full md:w-full  xl:w-[278px] text-black
          text-[10px] xl:text-[24px]  font-[400] leading-[15px] xl:leading-[40px]'>
          Product/Market Fit Pivot Pointing for early-stage founders          
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

export default HelpUs