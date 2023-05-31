import React from 'react'
import {filter,amico} from '../assets'
import {HyperItem, hyperContent,caseStudiesHyperItem} from '../data'
import AnimatedPage from '../animatedPage'


const HyperAutomation = () => {
  return (
    <AnimatedPage>
    <div className='flex items-center flex-col justify-around space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-10  
    lg:py-16  xl:py-20 text-white'>
      <div className='text-center 2md:px-12'>
            <h1 
            className='h-[20px] md:h-[50px] xl:h-[144px] text-center font-[700] text-[16px] md:text-[32px] lg:text-[40px] xl:text-[58px] leading-[15px]  
            md:leading-[32px] xl:leading-[72px] tracking-[-0.03em]'>
           Hyper Automation
            </h1>
            <p className='text-[10px] md:text-[16px] xl:text-[24px] leading-[15px] md:leading-[20px] xl:leading-[30px] 
             font-[400] tracking-[-0.02em] text-[rgba(255,255,255,0.54)] md:px-6 lg:px-12
             w-[316px] md:w-full xl:w-[941px] text-center h-[90px] md:h-[120px] xl:h-[160px]'
            >
            Hyper-Automation is the use of advanced technologies, including artificial
            intelligence (AI) and machine learning (ML), to automate processes and tasks.
            By automating routine tasks, hyper-automation can free up time and resources 
            for more critical and strategic work.
            </p>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-around  
          space-x-0 md:space-x-20 lg:space-x-40 xl:space-x-40 px-6 md:px-6 lg:px-12 xl:px-20  py-6'>
            <p className="font-[400] text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px] leading-[15px] 
            md:leading-[20px] lg:leading-[28px]  xl:leading-[40px] h-[90px] md:h-[200px] xl:h-[240px]  w-full 
            md:max-w-xl  xl:w-[649px] mt-0">Hyper-automation can improve efficiency and accuracy, 
           leading to cost savings and increased productivity. With hyper-automation,
          businesses can scale their operations more efficiently and respond more quickly
          to changes in the market. Hyper-automation can also help businesses to improve
          customer experiences and increase customer satisfaction.
            </p>
            <img src={filter} 
            className="md:invisible lg:invisible xl:invisible h-[151px] xl:h-[266px] 
            w-[160px] md:w-full xl:w-[376px] visible" 
            alt="Filter bro" />
      </div>
      <div className=' flex flex-col md:flex-row items-center justify-around  
          space-x-0 md:space-x-0 lg:space-x-40 xl:space-x-40 px-6 lg:px-12 xl:px-20  py-6'>
            <img src={amico} 
            className="md:invisible xl:invisible h-[162px] xl:h-[273px] w-[205px] 
             md:w-full lg:w-full xl:w-[462px] order-last md:order-first xl:order-first visible " 
            alt="Artificial Intelligence" />
            <div className="font-[400]  py-10">
              <p className='text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px] leading-[15px] 
            md:leading-[20px] lg:leading-[28px] xl:leading-[40px] h-[120px] md:h-[240px] xl:h-[280px] w-full 
            md:max-w-xl lg:w-full xl:w-[649px]  
            '>Hyper-automation is a digital transformation strategy that aims to automate 
            as many business processes as possible. It involves the use of advanced 
            technologies such as artificial intelligence, machine learning, and 
            robotic process automation to automate tasks and processes. By adopting 
            hyper-automation, businesses can reduce costs, improve efficiency, and 
            increase productivity.
              </p> 
              <p className='text-[10px] md:text-[16px] lg:text-[20px] xl:text-[32px]  mt-2 md:mt-0 
              text-[#b0c4cd] h-[30px] xl:h-[160px]  w-full md:max-w-xl xl:w-[684px] lg:pt-40 lg:pb-20'>  
             Implementing hyper-automation can be a complex process, but the benefits 
             can be significant for businesses of all sizes and in a variety of 
             industries.
              </p>
            </div>
        </div>
        <div className='h-full md:h-full lg:h-full text-black w-full bg-white px-6  md:py-10 xl:py-20'>
          <div className='xl:h-full flex justify-around flex-col  xl:flex-col'>
            {HyperItem?.map((item,index)=>(
              <div key={index}
              className="flex  items-start xl:items-center justify-around 
               h-full">
                <div className={item.style}>
                <img 
                src={item.icon}
                className="h-[30px] xl:h-[68px] w-[30px] xl:w-[68px]"
                alt={item.title} 
                />
                <h1 className='text-[16px] md:text-[32px] lg:text-[40px] xl:text-[58px] font-[700]
                leading-[20px] md:leading-[40px]  xl:leading-[72px]   tracking-[-0.03em]
                capitalize'>{item.title}</h1>
                <h2 className='w-[129px] md:w-full xl:w-[460px] h-[30px] md:h-[50px] xl:h-[80px] 
                text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px] text-left leading-[15px] md:leading-[20px] 
                lg:leading-[28px]  xl:leading-[40px] font-[400]'>{item.text}</h2>
              </div>
              <div className=''>
                <ul className={item.style2}>
                  <div className='flex'>
                    <img 
                    src={item.icon2} 
                    alt=""
                    className='h-[15px] lg:h-[28px] xl:h-[32px] w-[15px] lg:w-[28px] xl:w-[32px]'
                    />
                    <li className='pl-2 md:pl-3 xl:pl-4 text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px]  leading-[15px]
                    md:leading-[20px] lg:leading-[28px] xl:leading-[40px] font-[400]'>{item.item1}</li>
                  </div>
                  <div className='flex'>
                    <img 
                    src={item.icon2} 
                    alt=""
                    className='h-[15px] lg:h-[28px] xl:h-[32px] w-[15px] lg:w-[28px] xl:w-[32px]'
                    />
                    <li className='pl-2 md:pl-3 xl:pl-4 text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px]  leading-[15px]
                    md:leading-[20px] lg:leading-[28px] xl:leading-[40px] font-[400]'>{item.item2}</li>
                  </div>
                  <div className='flex'>
                    <img 
                    src={item.icon2} 
                    alt=""
                    className='h-[15px] lg:h-[28px] xl:h-[32px] w-[15px] lg:w-[28px] xl:w-[32px]'
                    />
                    <li className='pl-2 md:pl-3 xl:pl-4 text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px]  leading-[15px]
                    md:leading-[20px] lg:leading-[28px] xl:leading-[40px] font-[400]'>{item.item3}</li>
                  </div>
                  <div className='flex'>
                    <img 
                    src={item.icon2} 
                    alt=""
                    className='h-[15px] lg:h-[28px] xl:h-[32px] w-[15px] lg:w-[28px] xl:w-[32px]'
                    />
                    <li className='pl-2 md:pl-3 xl:pl-4 text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px]  leading-[15px]
                    md:leading-[20px] lg:leading-[28px] xl:leading-[40px] font-[400]'>{item.item4}</li>
                  </div>
                </ul>
              </div>
            </div>
            ))}
          </div>
        </div>
        <div className='py-5'>
        <div className='py-4 xl:py-10  md:w-full'>
          <h1 className='h-full w-full font-[500] text-[12px] md:text-[24px] xl:text-[32px] 
          leading-[15px] md:leading-[20px] xl:leading-[45px] text-center'>Examples</h1>
            </div>
            <h2 className='w-full md:w-[488px] 2md:w-full lg:w-full xl:w-[875px] h-[64px] md:h-[120px] xl:h-[180px] font-[400] 
            text-[11px] md:text-[16px] lg:text-[20px] xl:text-[24px] leading-[15px] 2md:leading-[20px] lg:leading-[28px] xl:leading-[40px]  
            text-left px-6 2md:px-12 lg:px-12 2md:-mb-10 xl:mb-20'>Hyper-automation is transforming the way businesses operate and complete.
            By leveraging the full potential of automation technologies, organizations 
            can gain a significant competitive advantage and drive growth.
            </h2>            
            {hyperContent.map((item,index)=>(
              <div key={index}
               className='flex items-start justify-center 2md:justify-start md:items-center 2md:items-start lg:items-start xl:items-center py-3 px-6 2md:px-12 lg:px-12  xl:py-5'> 
                <div className='flex items-center pr-5 xl:pr-5'>
                <img src={item.rectangleIcon} 
                className="w-[29.76px] xl:w-[62.22px] h-[10.78px] xl:h-[18.49px]"
                alt="" 
                />
                <img src={item.triRightIcon} 
                className="w-[21px] xl:w-[36px] h-[19.13px] xl:h-[40px]"
                alt="" />
                </div>
                <p className={item.style}>{item.text}</p>
              </div>
            ))}
            </div>
            <p className='md:px-6 2md:px-12 lg:px-12 py-14 2md:py-0  xl:my-10 w-[275px] md:w-full xl:w-[1131px] h-[30px] xl:h-[120px] font-[500]  text-center
            text-[#b0c4cd] text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px] leading-[15px] md:leading-[20px] lg:leading-[28px] xl:leading-[40px]  
             '>Are you ready to take your business to 
            the next level with hyper-automation? Our team of experts can help you design
            and implement a hyper-automation strategy that fits your unique needs and goals. 
            Contact us today to learn more and schedule a consultation.
            </p>
            <div className='my-10'>
            <button className='h-[41px] md:h-[50px] xl:h-[76px] w-[116px] md:w-[160px] xl:w-[230px]  xl:mt-20 mt-5  bg-[#b0c4cd] font[500] 
            text-[16px] md:text-[24px] xl:text-[32px] leading-[20px] md:leading-[24px] xl:leading-[45px]
             rounded-[8px] text-[#111]'>Contact Us</button>
            </div>

<div className='h-full xl:h-[1413px] w-full xl:w-full  bg-[#535a6a] py-5 xl:py-10 xl:px-20'>
            <div className='flex flex-col justify-around items-center'>
              <h1 className='text-[16px] md:text-[32px] xl:text-[58px] leading-[20px]  md:leading-[40px] xl:leading-[72px] font-[700] text-center tracking-[-0.03em] 
              py-5 xl:py-10 capitalize'>case studies</h1> 
            <div className='grid md:grid-rows-2 md:grid-cols-2 lg:grid-rows-2 xl:grid-rows-2 grid-rows-4 grid-cols-1  grid-flow-col gap-6'>
           {caseStudiesHyperItem.map((card,index)=>(
            <div key={index}
            className={card.cNameTop}>
            <div  
            className={card.cName}>
             <p className={card.pStyle}>{card.text}</p>
             {/* <p className='font-[600] text-[20px] md:text-[10px] leading-[35px] '>{card.source}</p> */}
            </div>
            </div>
           ))}
        </div>
        </div>
      </div>
          </div>
    </AnimatedPage>

  )
}

export default HyperAutomation