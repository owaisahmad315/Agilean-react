import React from 'react'
import {cloudSync,scrumBoard} from '../assets'
import {operationsItem,operationContent,
caseStudiesOperationItem} from '../data'
import AnimatedPage from '../animatedPage'

const Operation = () => {
  return (
    <AnimatedPage>
    <div className='flex items-center flex-col justify-around space-y-6 md:space-y-8 xl:space-y-10  
    xl:py-20 text-white'>
      <div className='text-center 2md:px-12'>
      <h1 className='h-[20px] md:h-[50px] xl:h-[144px] text-center font-[700] text-[16px] md:text-[32px] lg:text-[40px] xl:text-[58px] leading-[15px]  
      md:leading-[32px] xl:leading-[72px] tracking-[-0.03em]'>Anywhere Operation</h1>
            <p className='mt-10 md:px-6 text-[10px]  md:text-[16px] lg:text-[20px] xl:text-[24px] leading-[15px] md:leading-[20px] xl:leading-[30px] font-[400] 
            tracking-[-0.02em] text-[rgba(255,255,255,0.54)]
            w-[245px] md:w-full lg:w-[600px] xl:w-[941px] text-center h-[45px] md:h-[100px] xl:h-[160px] xl:-mt-16'
            >
            Anywhere operations is a cloud-based software platform that allows businesses to manage
            their operations from anywhere,at any time. With Anywhere Operations,you can access real-
            time data on your business performance, track and manage your team's tasks and projects,
            and streamline your communication and collaboration efforts.
            </p>
        </div>
        <div className='flex flex-col md:flex-row justify-around space-x-0
          xl:space-x-40 px-6 2md:px-12 py-10 lg:px-12 xl:px-20 '>
            <p className="font-[400] h-[105px] md:h-[200px] xl:h-[320px] w-full
            md:w-full xl:w-[649px] text-left text-[10px] md:text-[16px] lg:text-[20px]
            xl:text-[24px] leading-[15px] md:leading-[20px] lg:leading-[28px] xl:leading-[40px]">Our platform is designed to be
            user-friendly and intuitive, with a wide range of features and 
            integrations to help you optimize your business operations. 
            Some key benefits of using Anywhere Operations include increased
            productivity, improved efficiency, better decision-making, and 
            reduced costs. Anywhere Operations is suitable for businesses 
            of all sizes and industries, and our team of experts is available 
            to help you get set up and get the most out of the platform.</p>
            <img src={cloudSync} 
            className="h-[154px] md:h-[190px] lg:h-[250px] xl:h-[308px] w-full md:w-full 
            xl:w-[452px] mt-2" 
            alt="Cloud Synchronous" />
        </div>
        <div className='flex flex-col md:flex-row justify-around 
          space-x-0 xl:space-x-40 px-6 lg:px-12 xl:px-20'>
            <img src={scrumBoard} 
            className="h-[154px] md:h-[250px] xl:h-[342px] w-full md:w-full xl:w-[501px]
            order-last md:order-first xl:order-first mr-4" 
            alt="Scrum board" />
            <div className="font-[400] leading-[40px]
             h-[138px] md:h-[250px] xl:h-[438px] w-full md:w-full lg:w-full xl:w-[649px]  
              mb-[2rem] lg:mb-[5rem] 2md:pr-6">
              <p className='text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px] leading-[15px]
              md:leading-[20px] lg:leading-[28px] xl:leading-[40px]'>Through anywhere operations, you can improve productivity by 
              streamlining communication and tasks with customizable workflows.
              You stay organized with the ability to track and manage projects, 
              deadlines, and tasks. Anywhere Operations is secure, with data 
              encryption and advanced security protocols to protect your business
              information. You can save time and money by reducing the need for 
              physical office space and expensive hardware.</p> 
              <p className='text-[10px] md:text-[16px] lg:text-[24px] xl:text-[32px] mt-2 xl:mt-6 text-[#b0c4cd]
              md:leading-[20px] lg:leading-[24px]'>  
              Get started quickly with an intuitive setup and user-friendly interface</p>
            </div>
        </div>
        <div className='h-full md:h-full xl:h-[1422px] text-black w-full lg:w-full xl:w-full bg-white py-5 md:py-10
         xl:py-20 lg:px-0 px-6'>
          <div className='flex justify-around flex-col'>
            {operationsItem?.map((item,index)=>(
              <div key={index}
              className="flex items-center justify-around 
               h-full">
                <div className={item.style}>
                <img 
                src={item.icon}
                className="h-[30px] md:h-[45px] xl:h-[68px] w-[30px] md:w-[45px] xl:w-[68px]"
                alt={item.title} 
                />
                <h1 className='text-[16px] md:text-[32px] xl:text-[58px] font-[700]
                leading-[20px] md:leading-[52px] xl:leading-[72px] tracking-[-0.03em]
                capitalize'>{item.title}</h1>
                <h2 className='w-[147px] md:w-[250px] xl:w-[460px] h-[30px] md:h-[50px] xl:h-[80px] 
                text-[10px] md:text-[16px] xl:text-[24px] text-left leading-[15px] md:leading-[20px] 
                xl:leading-[40px] font-[400]'>{item.text}</h2>
              </div>
              <div>
                <ul className={item.style2}>
                  <div className='flex items-center'>
                    <img 
                    src={item.icon2} 
                    alt=""
                    className='h-[15px] md:h-[24px] xl:h-[32px] w-[15px] 
                    md:w-[24px] xl:w-[32px]'
                    />
                    <li className='pl-4'>{item.item1}</li>
                  </div>
                  <div className='flex items-center'>
                    <img 
                    src={item.icon2} 
                    alt=""
                    className='h-[15px] md:h-[24px] xl:h-[32px] w-[15px] 
                    md:w-[24px] xl:w-[32px] '
                    />
                    <li className='pl-4'>{item.item2}</li>
                  </div>
                  <div className='flex items-center'>
                    <img 
                    src={item.icon2} 
                    alt=""
                    className='h-[15px] md:h-[24px] xl:h-[32px] w-[15px] 
                    md:w-[24px] xl:w-[32px] '
                    />
                    <li className='pl-4'>{item.item3}</li>
                  </div>
                  <div className='flex items-center'>
                    <img 
                    src={item.icon2} 
                    alt=""
                    className='h-[15px] md:h-[24px] xl:h-[32px] w-[15px] 
                    md:w-[24px] xl:w-[32px] '
                    />
                    <li className='pl-4'>{item.item4}</li>
                  </div>
                </ul>
              </div>
            </div>
            ))}
          </div>
        </div>
        <div className='py-5 md:py-10 xl:py-20 2md:px-12 lg:px-12 px-6'>
          <h1 className='h-[60px] md:h-[100px] xl:h-[180px] w-full md:w-full xl:w-[875px] font-[500] text-[12px] md:text-[16px] lg:text-[20px] xl:text-[32px] 
          leading-[15px] md:leading-[20px] lg:leading-[24px] xl:leading-[45px] '>Anywhere Operations is a software solution 
          that enables companies to manage and optimize 
          their operations across all locations, whether 
          in-house, remote or on the go. With Anywhere 
          Operations, companies can:</h1>
          <div className='py-5 xl:py-10'>
            {operationContent.map((item,index)=>(
              <div key={index}
               className='flex xl:items-center items-start xl:py-5'>
                <div className=' flex items-center xl:pr-5'>
                <img src={item.rectangleIcon} 
                className="w-[29.76px] md:w-[40px] xl:w-[62.22px] h-[10.78px] md:h-[15px] xl:h-[18.49px]"
                alt="" 
                />
                <img src={item.triRightIcon} 
                className="w-[21px] md:w-[28px] xl:w-[36px] h-[19.13px] md:h-[24px] xl:h-[40px]"
                alt="" />
                </div>
                <p className={item.style}>{item.text}</p>
              </div>
            ))}
          </div>
          <p className='w-[266px] md:w-full xl:w-[745px] h-[30px] md:h-[50px] xl:h-[80px] xl:py-5  text-[10px] md:text-[16px] 
          lg:text-[20px] xl:text-[24px] leading-[15px] md:leading-[20px] xl:leading-[40px]
           font-[500] text-[#b0c4cd] text-center ml-5 md:ml-0'>Give your business the power of flexibility 
            and control with Anywhere Operations – try 
            it out today!</p>
        </div>
        <div className='2md:h-[800px] xl:h-[1413px] h-full w-full  bg-[#535a6a] py-5 xl:py-10 xl:px-20'>
            <div className='flex flex-col justify-around items-center'>
        <h1 className='text-[16px] md:text-[32px] xl:text-[58px] leading-[20px] md:leading-[32px] xl:leading-[72px]  font-[700] text-center tracking-[-0.03em] 
        py-5 xl:py-10 capitalize'>case studies</h1> 
        <div className='grid 2md:grid-rows-2 lg:grid-rows-2 xl:grid-rows-2 xl:grid-cols-2 grid-rows-4 grid-cols-1  grid-flow-col gap-6'>
           {caseStudiesOperationItem.map((card,index)=>(
            <div key={index}
            className={card.cNameTop}>
            <div  
            className={card.cName}>
             <p className='font-[400] text-[10px] md:text-[14px] xl:text-[20px] leading-[15px] md:leading-[20px] xl:leading-[35px] '>{card.text}</p>
             <p className='font-[400] text-[10px] md:text-[14px] xl:text-[20px] leading-[15px] md:leading-[20px] xl:leading-[35px]'>{card.source}</p>
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

export default Operation