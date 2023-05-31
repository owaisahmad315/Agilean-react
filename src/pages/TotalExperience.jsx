import React from 'react'
import {personalOpinions,feedback} from '../assets'
import {totalExpCardItem,caseStudiesTotalExpItem,
quoteTotalExpItem} from '../data'
import {LargeCard} from '../components'
import AnimatedPage from '../animatedPage'

const TotalExperience = () => {
  return (
    <AnimatedPage>
    <div className='flex items-center flex-col justify-around md:space-y-8 lg:space-y-10 xl:space-y-6 
    lg:py-10 text-white'>
        <div className='px-6 lg:px-12'>
            <h1 className='h-[20px] md:h-[50px] xl:pb-14 text-center font-[700] text-[16px] md:text-[32px] lg:text-[40px] xl:text-[58px] 
            xl:leading-[72px] tracking-[-0.03em] mb-5 lg:mb-0 xl:mb-0'>Total Experience</h1>
            <p className='text-[10px] md:text-[16px] xl:text-[24px] leading-[15px] md:leading-[20px] xl:leading-[30px] font-[400] 
            tracking-[-0.02em] text-[rgba(255,255,255,0.54)]
            w-[245px] md:w-full lg:w-[600px] xl:w-[752px]  text-center h-[45px] xl:h-[60px] xl:py-10'>Total experience is a 
            comprehensive customer experience management platform. 
            It helps businesses improve customer satisfaction and 
            loyalty by tracking and analyzing all touchpoints across
            the customer journey.
            </p>
        </div>
        
        <div className='flex flex-col md:flex-row justify-around 
        space-x-0 lg:space-x-20 xl:space-x-40 px-6 2md:px-12 lg:px-12 py-10 xl:py-28 md:py-5'>
            <p className="font-[400] text-[10px] md:text-[16px]
            xl:text-[24px] text-left leading-[15px] md:leading-[20px] 
            xl:leading-[40px] h-[90px] md:h-[200px] xl:h-[280px] 
            w-full md:w-full lg:w-full xl:w-[599px] space-x-20 md:space-x-10 xl:space-x-40">
            With Total-experience, you can
            gather real-time customer feedback, track customer 
            behavior, and optimize the customer experience. 
            The platform includes advanced analytics and 
            reporting tools to help you identify trends 
            and areas for improvement. Total experience 
            integrates with your existing systems and 
            can be customized to fit your unique 
            business needs
            </p>
            <img src={personalOpinions} 
            className="h-[159px] md:h-[180px] xl:h-[294px] w-full 
            md:w-full lg:w-full xl:w-[421px]
             mt-10 md:mt-0 xl:-mt-5
             " 
            alt="Personal Opinions" />
        </div>
        <div className='flex flex-col md:flex-row justify-around md:text-justify 
        space-x-0 lg:space-x-20 xl:space-x-40 pb-10 px-6 lg:px-12 xl:px-20'>
            <img 
            src={feedback} 
            className="h-[185px] md:h-[200px] xl:h-[384px] w-full 
            md:w-full lg:w-full xl:w-[453px] order-last md:order-first xl:order-first mt-10 md:mt-0 xl:mt-0" 
            alt="Feedback" />
            <p className="md:mt-5 font-[400]  text-[10px] md:text-[16px] xl:text-[24px] leading-[15px]  
            md:leading-[20px] lg:w-full xl:leading-[40px] h-[120px] md:h-[150px] xl:h-[360px] w-full 
            md:w-full xl:w-[599px]  2md:pr-6">Total-experience is an all-in-one 
            platform for managing customer experience. With 
            Total-experience, you can track and analyze customer 
            interactions across all channels, including social 
            media, email, and live chat. The platform provides 
            a holistic view of the customer journey, allowing 
            you to identify pain points and optimize the customer
            experience. It also comes with a range of tools for 
            personalizing interactions, such as chatbots and 
            targeted email campaigns
             </p>
        </div>
        <p className='font-[300] text-[11px] md:text-[16px] xl:text-[24px] leading-[15px] 
        md:leading-[20px] xl:leading-[40px] text-[#ffffff] text-center md:text-center 
        w-[301px] md:w-full xl:w-[1053px] h-[90px] md:h-[120px] xl:h-[160px] md:px-6 lg:px-12'>The Total experience is a revolutionary new approach 
        to customer experience management that combines advanced 
        analytics, machine learning, and AI to provide a seamless, 
        personalized experience for every customer across all 
        touchpoints and channels. Some key applications of the 
        Total-experience include:
        </p>
        <div className='grid lg:grid-rows-2 lg:grid-cols-2 xl:grid-rows-2 grid-rows-2 grid-cols-2 xl:grid-cols-2  grid-flow-col xl:gap-6 gap-x-[0.2rem]
        gap-y-8 py-10'>
            {totalExpCardItem.map((card,index)=>(
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
        <div className='h-full 2md:h-[1000px] xl:h-[1413px] w-full xl:w-full  bg-[#535a6a] py-5 xl:py-10 xl:px-20 xl:mb-20'>
            <div className='flex flex-col justify-around items-center'>
        <h1 className='text-[16px] md:text-[32px] xl:text-[58px] leading-[20px] md:leading-[32px] xl:leading-[72px] 
        font-[700] text-center tracking-[-0.03em] 
        pb-5 xl:py-10  capitalize'>case studies</h1>
         
        <div className=' grid grid-rows-4 lg:grid-rows-2 grid-cols-1 2md:grid-rows-2 xl:grid-rows-2 grid-flow-col 2md:gap-4 lg:gap-4 xl:gap-6 gap-y-4'>
           {caseStudiesTotalExpItem.map((card,index)=>(
            <div key={index}
            className={card.cNameTop}>
            <div  
            className={card.cName}>
             <p className='font-[400] text-[10px] md:text-[15px] xl:text-[20px] leading-[15px] md:leading-[20px] xl:leading-[35px]'>{card.text}</p>
             <p className='text-[10px] md:text-[15px] xl:text-[20px] leading-[15px] md:leading-[20px] xl:leading-[35px] font-bold'>{card.source}</p>
            </div>
            </div>
           ))}
            </div>
        </div>
            </div>
            <div className='flex flex-col justify-around text-black bg-[#fff] px-4 2md:px-6 xl:px-20 mt-14
             mb-8 xl:py-10 xl:my-20 h-[273px] xl:h-[551px] w-[327px] md:w-[600px] 2md:w-[800px] lg:w-[900px] xl:w-[1209px]'>
            {quoteTotalExpItem.map((quote,index)=>(
                <div key={index}
                 className='flex'>
                    <img src={quote.icon}
                    className=" h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px]  xl:w-[51px] " alt="" />
                    <div className='flex justify-between '>
                    <p className='w-[269px] md:w-[550px] 2md:w-full lg:w-full xl:w-[983px]  font-[400] text-[10px] md:text-[16px] xl:text-[24px]  
                    leading-[15px] md:leading-[20px] lg:leading-[28px] xl:leading-[40px] pl-4'>
                    {quote.text}
                    </p> 
                    </div>
                </div>
            ))}
        </div>
        <p className='text-[#b0c4cd] font-[500] text-[11px] md:text-[16px] xl:text-[24px] leading-[15px] md:leading-[20px]
         xl:leading-[40px] h-[30px] md:h-[50px] xl:h-[80px]  w-[289px] md:w-[450px] 2md:w-[895px] xl:w-[895px]  text-center xl:py-20'>By using 
           Total-experience, you can increase customer retention and drive revenue growth
            for your business
        </p>
    </div>
    </AnimatedPage>
  )
}

export default TotalExperience