import React from 'react'
import {security,twoFactorAuth} from '../assets'
import {cybersecurityItem,cybersecurityContent,
  caseStudiesCybesecurityItem} from '../data'
  import AnimatedPage from '../animatedPage'

const Cybersecurity = () => {
  return (
    <AnimatedPage>
    <div className='flex items-center flex-col justify-around space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-10  
    lg:py-16  xl:py-20 text-white'>
      <div className='text-center md:px-6 2md:px-12 lg:px-12'>
            <h1 className='h-[20px] md:h-[50px] xl:h-[144px] text-center font-[700] text-[16px] md:text-[32px] lg:text-[40px] xl:text-[58px] leading-[15px]  
      md:leading-[32px] xl:leading-[72px] tracking-[-0.03em]'>Cybersecurity Mesh</h1>
            <p className='text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px] leading-[15px] md:leading-[20px] lg:leading-[24px] xl:leading-[30px] 
             font-[400] tracking-[-0.02em] text-[rgba(255,255,255,0.54)]
             w-[316px] md:w-full xl:w-[941px] text-center h-[90px] md:h-[120px] xl:h-[160px] '
            >
            Cybersecurity mesh is a new and innovative approach to protecting your 
            business from cyber threats. It works by creating a network of interconnected 
            cybersecurity solutions that work together to provide comprehensive protection.
            With cybersecurity mesh, you can have peace of mind knowing that your critical 
            assets are safeguarded against potential attacks. 
            </p>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-around  
          space-x-0 md:space-x-0 xl:space-x-28 px-6 2md:px-12 lg:px-12 xl:px-20  py-6'>
            <p className="font-[400] text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px] leading-[15px] md:leading-[20px] lg:leading-[28px] xl:leading-[40px]
            h-[105px] md:h-[200px] xl:h-[320px] w-full md:w-full xl:w-[649px]  
           mb-[2rem]">It can be implemented in various contexts, including in business networks, government 
            agencies, and critical infrastructure systems. The mesh approach allows for 
            real-time monitoring and analysis of cyber activity, enabling quick and effective
            responses to threats. Implementing a cybersecurity mesh can help organizations 
            meet regulatory and compliance requirements and reduce the risk of data breaches 
            and other cyber attacks..
            </p>
            <img src={security} 
            className="h-[167px] lg:h-[200px] xl:h-[266px] w-full md:w-full lg:w-full xl:w-[376px]
            " 
            alt="Security" />
        </div>
        <div className='flex flex-col md:flex-row items-center justify-around 
          px-6 2md:px-12 lg:px-12 xl:px-20  py-5 xl:py-20'>
            <img src={twoFactorAuth} 
            className="h-[157px] md:h-[200px] xl:h-[273px] w-[267px] md:w-full xl:w-[462px]
             order-last md:order-first" 
            alt="Two Factor Authorization" />
            <div className="font-[400] leading-[15px] md:leading-[20px] lg:leading-[28px] xl:leading-[40px]  h-full mb-[2rem] md:ml-5 pb-28">
              <p className='text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px]  h-[75px] md:h-[150px] xl:h-[240px] w-full 
              md:w-full xl:w-[649px]'>One of the critical benefits of cybersecurity mesh 
              is that it can adapt and evolve as new threats emerge, ensuring that 
              your business is always protected. In addition, cybersecurity mesh is 
              designed to be easy to use and manage, allowing you to focus on running 
              your business without worrying about the complexities of cybersecurity.
              </p> 
              <p className='text-[10px] md:text-[16px] lg:text-[24px] xl:text-[32px]   mt-2 lg:mt-10 text-[#b0c4cd]
              h-[45px] xl:h-[160px] w-[309px] md:w-full xl:w-[684px]  -mb-28 lg:mb-10'>  
              Overall, cybersecurity mesh is a powerful and effective way to 
              keep your business safe in today's increasingly connected and 
              digitally-driven world.
              </p>
            </div>
        </div>
        <div className='h-full text-black w-full bg-white 
        py-0 lg:pt-5 lg:pb-20 xl:py-20 px-6 2md:px-12 lg:px-12'>
          <div className='flex justify-around flex-col'>
            {cybersecurityItem?.map((item,index)=>(
              <div key={index}
              className="">
                <div className='flex justify-around items-center'>
                <div className={item.style}>
                <img 
                src={item.icon}
                className="h-[30px] xl:h-[68px] w-[30px] xl:w-[68px]"
                alt={item.title} 
                />
                <h1 className='text-[16px] md:text-[32px] xl:text-[58px]  font-[700]
                leading-[20px] md:leading-[32px] xl:leading-[72px]  tracking-[-0.03em]
                capitalize'>{item.title}</h1>
                </div>
                <div>
                <h2 className='w-[158px] md:w-[330px] xl:w-[460px] h-[60px] md:h-[70px] xl:h-[80px] 
                text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px] text-left leading-[15px] md:leading-[20px] 
                lg:leading-[28px] xl:leading-[40px] font-[400]'>
                {item.text}
                </h2>
                </div>
              </div>            
                </div>
            ))}
          </div>
          </div>
          <div className='xl:py-5  px-6'>
            <div className='pl-0  xl:pl-[8.5rem] py-4 xl:py-10'>
          <h1 className='h-full w-full  font-[500] text-[12px] md:text-[18px] lg:text-[24px] xl:text-[32px] 
          leading-[15px] md:leading-[30px] lg:leading-[40px] xl:leading-[45px]  text-center'>More Features</h1>
            </div>
            {cybersecurityContent.map((item,index)=>(
              <div key={index}
               className='flex  xl:items-center items-start py-3 xl:py-5 '> 
                <div className='flex items-center pr-5 xl:pr-10 '>
                <img src={item.rectangleIcon} 
                className="w-[29.76px] xl:w-[62.22px] h-[10.78px] xl:h-[18.49px]
                "
                alt="" 
                />
                <img src={item.triRightIcon} 
                className="w-[21px] xl:w-[36px] h-[19.13px] xl:h-[40px]
                "
                alt="" />
                </div>
                <p className={item.style}>{item.text}</p>
              </div>
            ))}
          </div>
          <div className='xl:h-[1413px] md:h-full w-full  bg-[#535a6a] py-10 px-20'>
            <div className='flex flex-col justify-around items-center'>
              <h1 className='text-[16px] md:text-[32px] xl:text-[58px] leading-[40px] md:leading-[50px] xl:leading-[72px] font-[700] text-center tracking-[-0.03em] 
              py-10 sm:py-5 capitalize'>case studies</h1> 
        <div className='grid md:grid-rows-2 md:grid-cols-2 lg:grid-rows-2 xl:grid-rows-2 xl:grid-cols-2 grid-rows-4 grid-cols-1  grid-flow-col md:gap-4 gap-6'>
           {caseStudiesCybesecurityItem.map((card,index)=>(
            <div key={index}
            className={card.cNameTop}>
            <div  
            className={card.cName}>
             <p className={card.pStyle}>{card.text}</p>
             {/* <p className='font-[600] text-[20px] sm:text-[10px] leading-[35px] '>{card.source}</p> */}
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

export default Cybersecurity