import React from 'react'
import {detailedAnalysis,segmentAnalysis,
    successFactor} from '../assets'
import {caseStudiesItem,quoteItem} from '../data'
import AnimatedPage from '../animatedPage'

const Internet = () => {
  return (
    <AnimatedPage>
    <div className='flex items-center flex-col justify-around md:space-y-8 lg:space-y-10 xl:space-y-6 
    lg:py-10 text-white'>
        <div className='px-6  lg:px-12'>
            <h1 className='h-[20px] md:h-[50px] xl:pb-14 text-center font-[700] text-[16px] md:text-[32px] lg:text-[40px] xl:text-[58px] 
            xl:leading-[72px] tracking-[-0.03em] mb-5 lg:mb-0 xl:mb-0'>Internet of Behaviours</h1>
            <p className='text-[10px] md:text-[16px] xl:text-[24px] leading-[15px] md:leading-[20px] xl:leading-[30px] font-[400] 
            tracking-[-0.02em] text-[rgba(255,255,255,0.54)] w-[245px] md:w-[370px] 2md:w-[600px] lg:w-[600px] xl:w-[752px]  text-center h-[45px] xl:h-[60px] mb-10 lg:py-5'
            >The Internet of Behaviors is a revolutionary new technology that allows you to 
            understand and predict the behavior of individuals and groups.
            </p>
        </div>
        <div className='flex flex-col md:flex-row justify-around 
        space-x-0 lg:space-x-20 xl:space-x-0 xl:py-10 px-6 2md:px-12 lg:px-[50px]  xl:px-20'>
            <p className="font-[400] text-[10px] md:text-[16px] xl:text-[24px] leading-[15px] md:leading-[20px] xl:leading-[40px] 
            h-[105px] md:h-[250px] xl:h-[360px] w-full md:w-full xl:w-[599px] md:space-x-10 xl:space-x-40">With the Internet of Behaviors, you can gain valuable insights
            into consumer behavior, employee productivity, and social dynamics.
             Using advanced algorithms and machine learning techniques, the 
            Internet of Behaviors helps you make better decisions and improve 
            outcomes in various fields, including marketing, HR, and social 
            impact. It is easy to use and integrates seamlessly with your 
            existing systems, giving you a powerful tool to drive growth 
            and success.</p>
            <img 
            src={detailedAnalysis} 
            className="h-[118px] md:h-[200px] xl:h-[300px] w-full md:w-full  xl:w-[471px]
             mt-10 md:-mt-0 " 
            alt="Detailed Analysis" />
        </div>
        <div className='flex flex-col md:flex-row justify-around xl:text-center md:space-x-10 lg:space-x-20
        xl:space-x-28 px-6  lg:px-[50px] py-10 xl:py-10'>
            <img 
            src={segmentAnalysis} 
            className="h-[149px] md:h-[200px]  xl:h-[300px] w-full md:w-full  xl:w-[471px]
              order-last" 
            alt="Segment Analysis" />
            <p className="font-[400] xl:text-left text-[10px] md:text-[16px] xl:text-[24px] leading-[15px] 
            md:leading-[20px] xl:leading-[40px] h-[105px] md:h-[250px] xl:h-[360px] w-full md:w-full 
             xl:w-[599px] md:order-last 2md:pr-6">The Internet of Behaviors (IoB) 
            is a revolutionary new technology that allows companies
            to understand and predict consumer behavior better. 
            With the IoB, businesses can gather real-time data on 
            how consumers interact with their products and services,
            giving them valuable insights into what works. The IoB 
            can also help companies personalize their marketing efforts, 
            targeting the right message to the right audience at the 
            right time.</p>
        </div>
        <div className='h-full xl:h-[1104px] w-full  bg-[#535a6a] py-2 xl:mt-10 xl:mb-20 px-6'>
            <h1 className='text-[16px] md:text-[32px] xl:text-[58px] leading-[20px] md:leading-[50px] xl:leading-[72px] 
            font-[700] text-center tracking-[-0.03em] py-2 xl:py-10  capitalize'>case studies</h1>
            <div className='flex justify-around items-center'>
            <div className='grid gr
            id-rows-1 grid-cols-1 2md:grid-rows-1 2md:grid-cols-3 lg:grid-rows-1 lg:grid-cols-3 xl:grid-rows-1 xl:grid-cols-3 
            lg:gap-x-2 2md:gap-x-4 xl:gap-x-4 py-10 xl:py-20'>
           {caseStudiesItem.map((item,index)=>(
            <div key={index}
            className={item.cNameTop}>
                <h1 className='text-center text-[10px] md:text-[14px] xl:text-[20px]  font-[700]
                leading-[23.44px] uppercase pt-5 xl:py-2'>{item.title}</h1>
            <div key={index} 
            className={item.cName}>
             <p className={item.pStyle}>{item.text}</p>
            </div>
            </div>
           ))}
            </div>
            </div>
           <div>
        </div>
        </div>
        <div className='flex flex-col py-10 xl:pt-10 items-center justify-around'>
            <img 
            src={successFactor}
            className="h-[145px] md:h-[250px] xl:h-[410px] w-[236px] md:w-[302px] xl:w-[604px]  
            mt-5 order-last lg:order-first xl:order-first" 
            alt="Success Factor"
             />
            <p className='w-[291px] md:w-[550px] xl:w-[983px] xl:h-[90px] font-[400] text-[10px] md:text-[16px] xl:text-[24px] 
            leading-[15px] md:leading-[20px] xl:leading-[40px] text-center xl:my-32 xl:text-center
            '>By analyzing behavior patterns, the IoB can help
            businesses identify trends and opportunities they may 
            have otherwise missed. The IoB is a powerful tool that 
            can help businesses improve their operations, increase 
            efficiency, and boost their bottom line. With the IoB, 
            companies can gain a competitive edge in today's fast-paced,
            data-driven market.
            </p>
        </div>
        <div className='flex flex-col justify-around text-black bg-[#fff] 
         px-2 2md:px-6 xl:px-20 py-10 xl:pb-32 w-[327px] md:w-[620px] 2md:w-[800px] lg:w-[900px] xl:w-[1209px] h-[215px] md:h-[280px] xl:h-[476px]'>
            {quoteItem.map((quote,index)=>(
                <div key={index}
                 className='flex py-2'>
                    <img 
                    src={quote.icon}
                    className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[51px]" 
                    alt="" />
                    <div className='flex justify-between '>
                    <p className='w-[273px] pl-3 md:w-[550px]  2md:w-full lg:w-full xl:w-[983px] xl:h-[45px] font-[400] 
                    text-[10px] md:text-[16px] xl:text-[24px] leading-[15px] md:leading-[20px] xl:leading-[40px]'>{quote.text}
                    <span className='text-[#22d497]'>({quote.author}).</span>
                    </p> 
                    </div>
                </div>
            ))}
        </div>
            <p className='text-[#b0c4cd] font-[500] text-[10px] md:text-[16px] xl:text-[24px] leading-[15px] md:leading-[20px] xl:leading-[40px]
            w-[306px] md:w-[550px] xl:w-[959px] px-6 pt-6 xl:py-20 xl:h-[45px] text-center xl:text-center'>Don't miss out on this cutting-edge technology – try the Internet of Behaviors today and see the difference it can make for your business or organization.
            </p>
        </div>  
    </AnimatedPage>
        )
}

export default Internet