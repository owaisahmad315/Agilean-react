import React from 'react'
import {businessSupport,advantages,circleArrow,dots,ArrowRight} from '../assets'
import { processItem,portfolioCardItem,listItems } from '../data'
import { CarouselList} from '../components'
import AnimatedPage from '../animatedPage'

const Portfolio = () => {
  return (
    <AnimatedPage>
    <div className='pt-0 pb-6 md:py-1 xl:py-20
    lg:space-y-4 xl:space-y-6'>
        <div  className='flex justify-around items-center flex-col'>
            <div className='text-center xl:space-y-4 tracking-[-0.03em]'>
                <h1 className='w-[308px] md:w-full xl:w-[975px] h-[40px] md:h-[80px] xl:h-[160px] font-[700] text-[18px] md:text-[36px] 
                lg:text-[48px] xl:text-[60px] leading-[20px] md:leading-[40px] lg:leading-[60px] xl:leading-[80px] 2md:px-12'>Build your portfolio of ventures while sharing risks and rewards
                </h1>
                <p className='w-[248px] md:w-full lg:w-full xl:w-[1039px] h-[45px] md:h-[60px] xl:h-[100px]  font-[400] text-[11px] md:text-[24px] lg:text-[28px] xl:text-[36px]  
                 leading-[15px] md:leading-[32px] xl:leading-[50px] pt-4 pb-10 md:px-6 xl:px-12 md:py-3 lg:py-10 2md:px-12'>As serial entrepreneurs, collaborators, and 
                facilitators, we bring everything you need to create 
                successful businesses from scratch
                </p>
            </div>
        </div>
        <div className='flex justify-around items-center flex-col md:flex-row xl:flex-row px-6 2md:px-12 lg:px-12 xl:px-16'>
                <div className='flex flex-col xl:space-y-4 md:py-5'>
                <p className='w-[277px]  md:w-full lg:w-full xl:w-[503px] h-[45px] md:h-[60px] xl:h-[90px]  font-[400]
                  text-[10px] md:text-[15px] lg:text-[18px] xl:text-[20px]  leading-[15px] md:leading-[24px] lg:leading-[28px] xl:leading-[30px]  
                  tracking-[-0.02em] pt-5 pb-14'>
                    Our team understands how to deploy the venture studio model within 
                    enterprises in the leanest and most pragmatic way to drive strategic 
                    and financial impact.
                </p>
                <p className='w-full md:w-[488px] xl:w-[658px] h-[75px] md:h-[140px] xl:h-[200px]  font-[300]
                 text-[11px] md:text-[16px] lg:text-[20px] xl:text-[24px]
                 leading-[15px] md:leading-[20px] lg:leading-[28px] xl:leading-[40px] text-[#FFFFFF] py-2 md:py-5'>
                Either we are building your idea together, we team up to spin out one of 
                ours, or you are becoming a founder in one of our studio collaborations 
                with a corporation that enables you as a founder to leverage the unfair 
                advantages of our partner from the pre-seed stage on
                </p>
                </div>
                <img 
                src={businessSupport}
                className="h-[226px] md:h-[240px] xl:h-[389px] w-full xl:w-[392px] my-5" 
                alt="Business Support amico" />
            </div>
          <div className='h-full md:h-[44vh] 2md:h-full lg:h-full xl:h-[599px]  xl:w-full bg-[#b0c4cd] py-10 2md:px-6 xl:px-16'>
              <div className='flex justify-around items-center flex-col'>
                <h1 className='font-[600] text-[16px] md:text-[24px] lg:text-[28px] xl:text-[40px] leading-[20px] 
                md:leading-[40px] xl:leading-[80px] tracking-[-0.03em] xl:py-10  text-[#111]'>
                What's the Process
                </h1>
                <div className='grid md:grid-rows-2 md:grid-cols-2  xl:grid-rows-1 grid-rows-2  xl:grid-cols-4 grid-cols-2 
                    gap-x-10  xl:gap-x-10 gap-y-10 px-0 lg:px-12 xl:pb-14'>
                  {processItem.map((card,index)=> (
                    <div 
                    key={index}
                    className="text-[#111] flex justify-around items-center flex-col md:px-6 xl:px-0">
                    <div className='flex space-x-4 2md:-ml-[5rem] lg:-ml-[5rem]'>
                    <h1 className='font-[700] text-[12px] md:text-[24px] lg:text-[28px] xl:text-[36px]   
                    leading-[15px] md:leading-[40px] lg:leading-[60px] xl:leading-[80px] tracking-[-0.03em] md:-ml-24 lg:-ml-20 xl:ml-20'>
                    {card.no}.
                    </h1>
                    <img 
                    src={card.icon}
                    className={card.cName} 
                    alt="" />
                    </div>
                    <div>
                    <h2 className='font-[600] text-left text-[11px] md:text-[24px] lg:text-[28px] xl:text-[32px] leading-[15px] 
                    md:leading-[24px] lg:leading-[26px] xl:leading-[30px] tracking-[-0.02em]'
                    >
                    {card.title}
                    </h2>
                    <p className='w-[126px] md:w-full  xl:w-[249.85px] h-[60px] md:h-[80px] xl:h-[140px]  font-[400] text-[10px] 
                    md:text-[15px] lg:text-[17px] xl:text-[20px] leading-[15px] md:leading-[24px] lg:leading-[28px] xl:leading-[35px] text-[#00000058]'
                    >
                    {card.text}
                    </p>  
                    </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='h-full flex justify-around items-center flex-col md:flex-row lg:flex-row xl:flex-row py-5 lg:py-0 xl:py-10 xl:px-20'>
              <div className='flex flex-col  lg:-mt-24'>
               <h1 className='font-[600] text-[18px] md:text-[36px] lg:text-start xl:text-[52px] text-center leading-[21px] md:leading-[40px] xl:leading-[60px]
               lg:px-0 xl:py-5 lg:ml-0'>Who we are?</h1>
              <p className=' 2md:px-0 lg:px-0 w-[260px] md:w-[400px] lg:w-[450px]  xl:w-[595px] h-[105px] xl:h-[473px]  font-[400] text-[10px] md:text-[18px] xl:text-[28px]
              leading-[15px] md:leading-[30px] xl:leading-[52px] '>
                We connect ideas, capital, resources, and talent to a high-performing 
                package partnering with founders to build the best ideas into great 
                companies. We will team up and follow our proven, structured validation 
                process testing different ideas and models until we all see a fit. This 
                is a full-time activity, and you will benefit from world-class technical 
                expertise, functional experts, and entrepreneurs.
              </p>
              </div>
              <ul className='flex flex-col  space-y-5 md:space-y-0 lg:space-y-0 p y-5 md:pt-10 lg:pt-20 xl:py-0'>
              <div className='flex md:flex-row lg:flex-row xl:flex-row space-x-4 lg:space-x-10 xl:space-x-10'>
                <div className='flex justify-center  items-center'>
                <img 
                src={circleArrow} 
                className='h-[16px] md:h-[34px] xl:h-[68px] w-[16px] md:w-[34px] xl:w-[68px] '
                alt="" />
                <div className='absolute'>
                <img src={ArrowRight}
                className='h-[10px] md:h-[20px] xl:h-[32px] w-[10px] md:w-[20px] xl:w-[32px]'
                alt="" />
                </div>
                </div>
                <li className='w-[100px] md:w-[250px] lg:w-[240px] xl:w-[365px] mt-0 md:pt-5 lg:mt-10  xl:mt-20 h-[15px] md:h-[60px] xl:h-[120px]  
                font-[400] text-[11px] md:text-[16px] xl:text-[32px] leading-[15px] md:leading-[20px] 
                xl:leading-[40px] text-[#b0c4cd] md:text-left lg:text-left'>We are builders</li>
              </div>
              <div className='flex md:flex-row lg:flex-row xl:flex-row space-x-4 lg:space-x-10 xl:space-x-10 '>
              <div className='flex justify-center items-center'>
                <img 
                src={circleArrow} 
                className='h-[16px] md:h-[34px] xl:h-[68px] w-[16px] md:w-[34px] xl:w-[68px]'
                alt="" />
                <div className='absolute'>
                <img src={ArrowRight}
                className='h-[10px] md:h-[20px] xl:h-[32px] w-[10px] md:w-[20px] xl:w-[32px]'
                alt="" />
                </div>
                </div>
                <li className=' w-[100px] md:w-[250px] lg:w-[300px] xl:w-[365px] mt-0 md:pt-5 lg:mt-10 xl:mt-20 h-[15px] md:h-[60px] xl:h-[120px]  
                font-[400] text-[11px] md:text-[16px] xl:text-[32px] leading-[15px] md:leading-[20px] 
                lg:leading-[28px] xl:leading-[40px] text-[#b0c4cd] md:text-left lg:text-left'>Your co-founder with benefits</li>
              </div>
              <div className='flex md:flex-row lg:flex-row xl:flex-row items-center  space-x-4 lg:space-x-10 xl:space-x-10'>
              <div className='flex justify-center items-center'>
                <img 
                src={circleArrow} 
                className='h-[16px] md:h-[34px] xl:h-[68px] w-[16px] md:w-[34px] xl:w-[68px]'
                alt="" />
                <div className='absolute'>
                <img src={ArrowRight}
                className='h-[10px] md:h-[20px] xl:h-[32px] w-[10px] md:w-[20px] xl:w-[32px]'
                alt="" />
                </div>
                </div>
                <li className='w-[100px] md:w-[250px] lg:w-[300px] xl:w-[365px] mt-0 md:pt-4 lg:mt-10 xl:mt-20 h-[15px] md:h-[60px] xl:h-[120px]  
                font-[400] text-[11px] md:text-[16px] xl:text-[32px] leading-[15px] md:leading-[20px] 
                lg:leading-[28px] xl:leading-[40px] text-[#b0c4cd] md:text-left lg:text-left'>Your sparring partner-day and night.
                We have been in your shoes.</li>
              </div>
              </ul>
            </div>
            <div className='flex justify-around items-center pt-16 md:pt-60 2md:pt-40'>
            <div className='grid 2md:grid-rows-1 lg:grid-rows-1 xl:grid-rows-1 grid-rows-3 2md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-4'>
              {portfolioCardItem.map((card,index)=>(
                <div key={index} className='h-[176px] md:h-[220px] xl:h-[305.42px]  py-10 md:py-16 xl:py-20  xl:px-6  w-[256px] md:w-[350px] 2md:w-[270px] lg:w-[300px] xl:w-[408px] 
                 border-2  box-border rounded-t-[24px] rounded-b-[24px] text-center border-b-white border-b-[12px]'>
                    <h1 className='font-[700] text-[11px] md:text-[16px] xl:text-[24px] leading-[12px] md:leading-[20px] xl:leading-[28.13px] '>{card.title}</h1>
                    <p className='font-[300] not-italic text-[10px] md:text-[15px] px-6 pt-4 md:px-6  xl:text-[15px] leading-[15px] md:leading-[24px] xl:leading-[30px] '>{card.text}
                    </p>
                </div>
              ))}
            </div>
            </div>
            <div className='flex justify-around items-center flex-col  h-full xl:h-[100vh] xl:w-full'>
              <h1 className='text-[16px] md:text-[32px] xl:text-[52px] leading-[18px] md:leading-[36px] 
              xl:leading-[60px] py-10 xl:py-10 font-[700]'>Why choose us</h1>
              <CarouselList/>
            </div>
          <div className='flex  justify-between items-center flex-col 2md:px-12 py-10'>
           <div className='flex justify-around items-center flex-col lg:flex-row'>
           <div className='lg:pr-28  lg:-mt-28 xl:mt-10'>
           <div className='flex'>
            <img 
            src={dots}
          className= 'w-[51px] lg:w-[120px] xl:w-[148px] h-[51px] lg:h-[120px] xl:h-[148px]'
             alt="" />
            <div className='lg:absolute xl:absolute mt-2 lg:mt-5 xl:mt-5 -ml-7 xl:ml-20'>
             <p className='font-[600] text-[16px] md:text-[20px] lg:text-[28px] xl:text-[40px]  
              leading-[24px] md:leading-[48px] xl:leading-[60px]'>Benefits of Choosing Us</p>
            </div>
           </div>
           <div>
           <p className='w-[254px] md:w-full lg:w-[450px] xl:w-[659px] h-[60px] xl:h-[263px]  font-[300] text-[10px] md:text-[16px] lg:text-[20px] xl:text-[28px] 
           leading-[15px] md:leading-[30px] xl:leading-[52.5px]  text-center font-[Poppins] text-[#FFFFFF65] lg:pt-2 xl:py-1'>You get total exposure to our methodology, playbooks, experts, investors network, and resources to launch the next market-leading company. This includes but is not limited to the following:</p>
           </div>
           </div>
           <div className=''>
            <img 
            src={advantages}
            className= 'h-[203px] lg:h-[320px] xl:h-[383px] w-[242px] lg:w-[350px] xl:w-[389px] ' 
            alt="" />
           </div>
           </div>
           <div>
           </div>
          </div>
          <div className='flex justify-around items-center px-6 2md:px-12 lg:px-12  xl:px-28 xl:py-5'>
          <ul className='grid grid-rows-3 grid-cols-3 xl:grid-rows-3 xl:grid-cols-3 gap-y-0 gap-x-5 xl:gap-y-10'>
            {listItems.map((item,index)=>(
              <li key={index} className='font-[600] text-[12px] md:text-[20px] lg:text-[24px] xl:text-[32px]  
              leading-[20px] md:leading-[28px] xl:leading-[40px]  text-[#b0c4cd]'>{item.title}</li>
            ))}
           </ul>
          </div>
    </div>
    </AnimatedPage>
  )
}

export default Portfolio