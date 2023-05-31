import React from 'react'
import {security,safe,sec} from '../assets'
import {privacyCardItem,privacyCardItem2, privacyQuoteItem,
    privacyCaseStudiesItem} from '../data'
import { LargeCard } from '../components'
import AnimatedPage from '../animatedPage'

const Privacy = () => {
  return (
    <AnimatedPage>
    <div className='flex items-center flex-col justify-around space-y-6 md:space-y-8 xl:space-y-10 xl:space-y-10 
    xl:py-20 xl:py-20 text-white'>
         <div className='px-6 2md:px-8 xl:px-12'>
            <h1 className='h-[20px] md:h-[50px] xl:h-[144px] text-center font-[700] text-[16px] md:text-[32px] lg:text-[40px] xl:text-[58px] leading-[72px]
            tracking-[-0.03em] mb-10'>Privacy Enhancing Computation</h1>
            <p className='text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px] leading-[15px] md:leading-[20px] lg:leading-[24px] xl:leading-[30px] font-[400] 
            tracking-[-0.02em] text-[rgba(255,255,255,0.54)] w-[245px] md:w-full lg:w-[600px] xl:w-[752px]  text-center h-[45px] xl:h-[60px]'>Privacy-enhancing computation
            (also known as secure multi-party computation) is a field of computer
            science that focuses on designing and implementing methods for multiple
            parties to jointly compute a function over their private inputs without 
            revealing anything about the inputs to each other except for the output 
            of the function. 
            </p>
        </div>
        <div className='flex flex-col md:flex-row lg:flex-row justify-around py-10 xl:py-20 xl:space-x-0   
        space-x-0 2md:space-x-24 lg:space-x-0 px-6 2md:px-12 lg:px-12 xl:px-20'>
            <div className='lg:pt-10'>
            <h1 className="font-[600] text-[14px] md:text-[18px] lg:text-[24px] xl:text-[32px]  
            leading-[15px] md:leading-[20px] lg:leading-[28px] xl:leading-[40px] 
            tracking-[-0.02em] text-[#b0c4cd] uppercase">applications</h1>
            <p className="font-[400] text-left text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px]  
            leading-[15px] md:leading-[20px] lg:leading-[28px] xl:leading-[40px]  
            h-[120px] md:h-[250px] xl:h-[400px] w-full md:w-full 2md:w-[500px] lg:w-[550px] xl:w-[649px]">Applications of privacy-enhancing 
            computation include secure online voting, secure auctions,
            and secure machine learning. One example of an implementation
            of privacy-enhancing computation is homomorphic encryption, 
            which allows computation to be performed directly on encrypted 
            data without the need to decrypt it first. Another example is 
            secure multiparty computation protocols such as SPDZ and Fairplay, 
            which allow multiple parties to compute functions jointly over 
            their private inputs without revealing them to each other.
            </p>
            </div>
            <img 
            src={sec} 
            className="h-[181px] md:h-[250px] 2md:h-[200px] lg:h-[300px] xl:h-[412px] 
            w-full md:w-full lg:w-full xl:w-[478px]  
            mt-4 lg:mt-20" 
            alt="Security" />
        </div>
        <div className='grid 2md:grid-rows-1 lg:grid-rows-1 xl:grid-rows-1 grid-rows-3  grid-flow-col 
        2md:gap-2 lg:gap-6 xl:gap-10 gap-4'>
            {privacyCardItem.map((card,index)=>(
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
        <div className='flex flex-col md:flex-row justify-around  xl:-pb-40 2md:space-x-16 lg:space-x-10
         px-6 lg:px-12 xl:px-20'>
            <div className='2md:mt-20'>
            <h1 className="font-[600] text-[14px] md:text-[20px] lg:text-[24px] xl:text-[32px] leading-[15px] 
            md:leading-[20px] xl:leading-[40px] tracking-[-0.02em] text-[#b0c4cd] uppercase">implementations</h1>
            <p className="font-[400] text-justify text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px] leading-[15px] 
            md:leading-[20px] lg:leading-[28px] xl:leading-[40px] h-[75px] md:h-[150px] xl:h-[400px] w-full md:w-full  
            2md:w-[450px] lg:w-[550px] xl:w-[649px]">Privacy-enhancing computation (PEC) refers
            to a set of technologies and techniques that enable individuals 
            and organizations to perform computations on sensitive data without 
            revealing the data itself to the computational party. PEC has a wide
            range of implementations, including:
            </p>
            </div>
            <img src={safe} 
            className="h-[179px] md:h-[200px] xl:h-[298px] w-full md:w-full 
            xl:w-[466px]" 
            alt="Safe" />
        </div>
        <div className='grid 2md:grid-rows-1 lg:grid-rows-1 xl:grid-rows-1 grid-rows-3  grid-flow-col 2md:gap-4 xl:gap-10 gap-4'>
            {privacyCardItem2.map((card,index)=>(
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
        <div className='h-full md:h-full 2md:h-[1000px] xl:h-[1413px] w-full xl:w-full  bg-[#535a6a] py-5 md:py-10 xl:py-20 xl:px-20'>
            <div className='flex flex-col justify-around items-center'>
        <h1 className='text-[16px] md:text-[32px] xl:text-[58px] leading-[20px] md:leading-[52px] xl:leading-[72px]             
        font-[700] text-center tracking-[-0.03em]  py-5 xl:py-10 capitalize'>case studies</h1> 
        <div className='grid 2md:grid-rows-2 lg:grid-rows-2 xl:grid-rows-2 grid-rows-4 md:grid-cols-1  grid-flow-col gap-6'>
           {privacyCaseStudiesItem.map((card,index)=>(
            <div key={index}
            className={card.cNameTop}>
            <div  
            className={card.cName}>
             <p className='font-[400] text-[10px] md:text-[16px] xl:text-[20px] text-justify leading-[15px] md:leading-[20px] xl:leading-[35px] '>
                {card.text}
                <span className='font-[600] text-[10px] md:text-[16px] xl:text-[20px] leading-[15px] md:leading-[20px] xl:leading-[35px]'>{card.source}</span>
             </p>
            </div>
            </div>
           ))}
            </div>
        </div>
            </div>
            <div className=' flex flex-col justify-around text-black bg-[#fff] 
            px-6 xl:px-20 mx-6 py-5 xl:py-10 w-[327px] md:w-[600px] 2md:w-[800px] lg:w-[900px] xl:w-[1209px] '>
            {privacyQuoteItem.map((quote,index)=>(
                <div key={index}
                 className='flex items-center lg:py-6 xl:py-10'>
                    <img src={quote.icon}
                    className="h-[16px] md:h-[16px] lg:h-[32px] xl:h-[51px] w-[16px] 
                    md:w-[16px] lg:w-[32px] xl:w-[51px]" alt="" />
                    <div className='flex justify-between '>
                    <p className='pl-3 w-[272px] md:w-[550px] 2md:w-full lg:w-full xl:w-[983px]  font-[400] text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px]  
                    leading-[15px] md:leading-[20px] lg:leading-[32px] xl:leading-[40px]'>
                    {quote.text}
                    </p> 
                    </div>
                </div>
            ))}
        </div>
    </div>
    </AnimatedPage>
  )
}

export default Privacy