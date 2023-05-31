import React from 'react'
import {community,AI} from '../assets'
import {intelligientItem,intelligentContent, caseStudiesIntelligentItem} from '../data'
import AnimatedPage from '../animatedPage'


const Intelligent = () => { 
  return (
    <AnimatedPage>
    <div className='flex items-center flex-col justify-around space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-10  
    lg:py-16  xl:py-20 text-white'>
      <div className='text-center md:px-6 2md:px-12 lg:px-12'>
            <h1 
            className='h-[20px] md:h-[50px] xl:h-[144px] text-center font-[700] text-[16px] md:text-[32px] lg:text-[40px] xl:text-[58px] leading-[15px]  
            md:leading-[32px] xl:leading-[72px] tracking-[-0.03em]'>
            Intelligent Composable Business
            </h1>
            <p className='text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px] leading-[15px] md:leading-[20px] lg:leading-[24px] xl:leading-[30px] 
             font-[400] tracking-[-0.02em] text-[rgba(255,255,255,0.54)]
             w-[316px] md:w-full xl:w-[941px] text-center h-[90px] md:h-[120px] xl:h-[160px]'>
            Intelligent composable business is a revolutionary new way to manage and run your 
            company. It uses advanced artificial intelligence to analyze and optimize all aspects
            of your business, from marketing and sales to operations and finance. 
            </p>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-around  
          space-x-0 md:space-x-0 xl:space-x-40 px-6 2md:px-12 lg:px-12 xl:px-20  py-6'>
            <p className="font-[400] text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px] leading-[15px] 
            md:leading-[20px] lg:leading-[28px] xl:leading-[40px]
            h-[90px] md:h-[200px] xl:h-[280px]  w-full md:w-full xl:w-[649px]  
           ">With intelligent composable business, you can quickly and easily assemble 
           the perfect team for any project, drawing on a vast pool of talent from around the world. 
           This innovative approach allows you to focus on what you do best while the AI handles all 
           the tedious and time-consuming tasks. By using intelligent composable business, you can 
           increase efficiency, reduce costs, and drive greater profits.
            </p>
            <img src={community} 
            className="lg:invisible xl:invisible h-[185px] md:h-[200px] xl:h-[266px] w-full md:w-full xl:w-[376px]
             visible md:-mt-28" 
            alt="Community" />
      </div>
      <div className='flex flex-col md:flex-row items-center justify-around  
          space-x-0 md:space-x-0 xl:space-x-40 px-6 2md:px-12 lg:px-12 xl:px-20  py-6'>
            <img src={AI} 
            className="lg:invisible xl:invisible h-[135px] md:h-[200px] xl:h-[273px] w-full md:w-full xl:w-[462px]
            order-last md:order-first xl:order-first visible my-5 md:py-0" 
            alt="Artificial Intelligence" />
            <div className="font-[400] md:pl-5 leading-[15px] md:leading-[20px] lg:leading-[28px] xl:leading-[40px] h-full">
              <p className='text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px] h-[90px] md:h-[150px] xl:h-[240px]
               w-full md:w-full xl:w-[649px]'> The Intelligent Composable Business is a new approach to building and managing
              enterprises that leverages the latest advances in artificial intelligence and automation. This 
              approach allows businesses to quickly and easily assemble and disassemble various components, 
              or "microservices," to create custom solutions that meet their specific needs.
              </p> 
              <p className='text-[10px] md:text-[16px] lg:text-[22px] xl:text-[32px] md:mt-20 text-[#b0c4cd]
              h-[45px] md:h-[100px] xl:h-[160px] w-full md:w-full xl:w-[684px]'>  
              Don't waste more time and money on outdated business models - 
              upgrade to intelligent composable business today and start 
              seeing results immediately!
              </p>
            </div>
        </div>
        <div className='h-[38vh] md:h-full 2md:h-full lg:h-[90vh] xl:h-full text-black md:w-full lg:w-full xl:w-full bg-white py-0 md:py-10 xl:py-20
       px-6 2md:px-12 lg:px-0 md:px-6'>
          <div className='flex justify-around xl:flex-col flex-col '>
            {intelligientItem.map((item,index)=>(
              <div key={index}
              className="">
                <div className='flex justify-around items-center'>
                <div className={item.style}>
                <img 
                src={item.icon}
                className="h-[30px] md:h-[32px] xl:h-[68px]  w-[30px] md:w-[32px] xl:w-[68px]   "
                alt={item.title} 
                />
                <h1 className='text-[16px] md:text-[32px] lg:text-[40px] xl:text-[58px]  font-[700]
                 leading-[20px] md:leading-[40px] lg:leading-[48px] xl:leading-[72px]  tracking-[-0.03em]
                capitalize'>{item.title}</h1>
                </div>
                <div>
                <h2 className='w-[158px] md:w-[350px] 
                xl:w-[496px] h-[60px] md:h-[160px] xl:h-[240px]  
                text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px] text-left 
                leading-[15px] md:leading-[20px] lg:leading-[28px] xl:leading-[40px] font-[400] '>
                {item.text}
                </h2>
                </div>
              </div>            
                </div>
            ))}
          </div>
          </div>
          <div className='xl:py-5 px-10 flex flex-col items-center'>
            <div className='py-4 xl:py-10 '>
          <h1 className='h-full w-full  font-[500] text-[12px] md:text-[16px] lg:text-[24px] xl:text-[32px] 
            leading-[15px] md:leading-[20px] lg:leading-[28px] xl:leading-[45px]  text-center'>More Features</h1>
            </div>
            <h2 className='w-[784px] h-[200px] font-[400] text-[10px] md:text-[16px] xl:text-[24px] 
            leading-[15px] md:leading-[20px] xl:leading-[40px] text-center hidden xl:block
            '>Intelligent composable business is a revolutionary approach to running
            a company. It combines the power of artificial intelligence with a flexible
            and modular structure. This allows businesses to adapt and evolve at a rapid 
            pace, staying ahead of the competition. With intelligent composable business,
             you can:
            </h2>
            <div className='py-5 lg:py-10 xl:py-10 '>
            {intelligentContent.map((item,index)=>(
              <div key={index}
               className='flex xl:items-center  items-start py-3 xl:py-5'> 
                <div className='flex items-center xl:pr-10 pr-5'>
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
            <p className='xl:my-10 w-[275px] md:w-full xl:w-[684px] h-[30px] md:h-[50px] 
            xl:h-[80px] font-[400] text-[10px] md:text-[16px] lg:text-[24px] xl:text-[32px] text-center
            text-[#b0c4cd] leading-[20px] md:leading-[24px] lg:leading-[28px] xl:leading-[40px]'>Don't get left behind in the digital age – upgrade to 
              intelligent composable business today!
            </p>
          </div>
          <div className='2md:h-[1000px] xl:h-[1413px]  h-full md:pt-10 md:pb-20 w-full  bg-[#535a6a] pt-5 pb-10 xl:py-20 xl:px-20'>
            <div className='flex flex-col justify-around items-center'>
              <h1 className='text-[10px] md:text-[32px] xl:text-[58px] leading-[20px] md:leading-[40px] xl:leading-[72px] font-[700] 
              text-center tracking-[-0.03em] 
              py-5 xl:py-10 capitalize'>case studies</h1> 
            <div className='grid md:grid-rows-2 md:grid-cols-2 lg:grid-rows-2 xl:grid-rows-2 xl:grid-cols-2 grid-rows-4 grid-cols-1  grid-flow-col md:gap-4 gap-6'>
           {caseStudiesIntelligentItem.map((card,index)=>(
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

export default Intelligent