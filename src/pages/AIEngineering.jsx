import React from 'react'
import {engineeringItem,engineeringContent, caseStudiesEngineeringItem} from '../data'
import {data,programmer} from '../assets'
import AnimatedPage from '../animatedPage'

const AIEngineering = () => 
{
  return (
    <AnimatedPage>
    <div className='flex items-center flex-col justify-around space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-10  
    lg:py-16  xl:py-20 text-white'>
      <div className='text-center 2md:px-12 lg:px-12'>
            <h1 
            className='h-[20px] md:h-[50px] xl:h-[144px] text-center font-[700] text-[16px] md:text-[32px] lg:text-[40px] xl:text-[58px] leading-[15px]  
            md:leading-[32px] xl:leading-[72px] tracking-[-0.03em]'>
            AI Engineering
            </h1>
            <p className='text-[10px] md:text-[16px] xl:text-[24px] leading-[15px] md:leading-[20px] xl:leading-[30px] 
             font-[400] tracking-[-0.02em] text-[rgba(255,255,255,0.54)] md:px-6
             w-[316px] md:w-full xl:w-[941px] text-center h-[90px] md:h-[120px] xl:h-[160px] '
            >
            AI engineering is the design and development of artificial intelligence systems and 
            solutions. It can be applied to a wide range of industries, including healthcare, 
            finance, and transportation. It allows organizations to automate processes, improve 
            decision-making, and increase efficiency.  
            </p>
      </div>
      
      <div className='flex flex-col md:flex-row items-center justify-around  
          space-x-0 md:space-x-0 xl:space-x-40 px-6 2md:px-12 lg:px-12 xl:px-20  py-6'>
            <p className="font-[400] text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px] leading-[15px] 
            md:leading-[20px] lg:leading-[28px] xl:leading-[40px] h-[90px] md:h-[200px] xl:h-[240px]  w-full 
            md:w-full xl:w-[649px] -mt-16">AI engineering can help organizations gain a competitive edge by 
           leveraging the power of machine learning and data analysis. It involves the use of 
           programming languages such as Python, as well as tools like TensorFlow and Keras. 
           AI engineering professionals are in high demand, with competitive salaries and 
           exciting career opportunities
            </p>
            <img src={data} 
            className="md:invisible lg:invisible xl:invisible h-[151px] md:h-[200px] xl:h-[266px] w-[160px] md:w-full xl:w-[376px]
             visible" 
            alt="Data points pana" />
      </div>
      <div className='flex flex-col md:flex-row items-center justify-around sm:flex-col sm:text-justify
          space-x-0 md:space-x-0 xl:space-x-40 py-6 px-6 2md:px-12 lg:px-12 xl:py-20 xl:px-20'>
            <img src={programmer} 
            className="md:invisible lg:invisible xl:invisible h-[162px] xl:h-[273px] w-[205px] md:w-full xl:w-[462px]
             order-last md:order-first xl:order-first visible my-5" 
            alt="Programmer" />
            <div className="font-[400] leading-[15px] md:leading-[20px] lg:leading-[28px] xl:leading-[40px]  h-full">
              <p className='text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px] h-[120px] md:h-[160px] xl:h-[280px] w-full 
              md:w-[450px] xl:w-[649px]'> AI engineering is the process of designing and building artificial
              intelligence systems that can perform tasks that typically require human-level intelligence. 
              It involves a combination of computer science, mathematics, and engineering principles, as well as a 
              deep understanding of how AI algorithms work. With AI engineering, you can create intelligent systems 
              that can analyze data, make decisions, and take actions in real-time.
              </p> 
              <p className='text-[10px] md:text-[16px] lg:text-[22px] xl:text-[32px] mt-0 xl:mt-2  text-[#b0c4cd]
              h-[30px] xl:h-[160px] w-[327px] md:w-full xl:w-[684px]  mb-1 lg:pt-32 lg:pb-20'>  
              Investing in AI engineering can bring long-term benefits for organizations, including cost
               savings and improved customer satisfaction.
              </p>
            </div>
        </div>
        <div className='h-full md:h-full xl:h-full  text-black w-full xl:w-full bg-white py-0 xl:py-20
         px-6 2md:px-12 lg:px-12 md:px-6 pb-10 md:py-5'>
          <div className='flex justify-around flex-col  xl:flex-col '>
            {engineeringItem.map((item,index)=>(
              <div key={index}
              className="">
                <div className='flex justify-around items-center'>
                <div className={item.style}>
                <img 
                src={item.icon}
                className="h-[30px] xl:h-[68px] w-[30px] xl:w-[68px]"
                alt={item.title} 
                />
                <h1 className='text-[16px] md:text-[32px] lg:text-[48px] xl:text-[58px]  font-[700]
               leading-[20px] md:leading-[40px] lg:leading-[48px] xl:leading-[72px] tracking-[-0.03em]
                capitalize md:w-full'>{item.title}</h1>
                </div>
                <div>
                <h2 className='w-[158px] md:w-[360px] xl:w-[496px] h-[60px] md:h-[150px] 
                xl:h-[240px] text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px] text-left leading-[15px] 
                md:leading-[20px] lg:leading-[28px] xl:leading-[40px] font-[400] '>
                {item.text}
                </h2>
                </div>
              </div>            
                </div>
            ))}
          </div>
          </div>
          <div className='py-5 px-10 flex flex-col items-center'>
            <div className=' py-4 xl:py-10'>
          <h1 className='h-full w-full  font-[500] text-[12px] md:text-[18px] lg:text-[24px] xl:text-[32px] 
          leading-[15px] md:leading-[20px] lg:leading-[28px] xl:leading-[45px] text-center'>More Features</h1>
            </div>
            <div className='py-5 xl:py-10'>
            {engineeringContent.map((item,index)=>(
              <div key={index}
               className='flex xl:items-center  items-start py-5 xl:py-10 '> 
                <div className='flex items-center pr-5 xl:pr-10 '>
                <img src={item.rectangleIcon} 
                className="w-[29.76px] xl:w-[62.22px] h-[10.78px] xl:h-[18.49px]
                "
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
          </div>
          <div className='h-full xl:h-[1813px] w-full md:w-full xl:w-full bg-[#535a6a] py-5 xl:py-10 px-6 xl:px-20'>
            <div className='flex flex-col justify-around items-center'>
              <h1 className='text-[16px] md:text-[32px] xl:text-[58px] leading-[20px] md:leading-[40px] xl:leading-[72px] 
               font-[700] text-center tracking-[-0.03em] py-5 xl:py-10  capitalize'>case studies</h1> 
        <div className='grid grid-rows-3 md:grid-rows-2 md:grid-cols-3 grid-cols-2 lg:grid-rows-3 xl:grid-rows-3 lg:grid-cols-2 xl:grid-cols-2  xl:grid-flow-col grid-flow-row gap-5 xl:gap-10 
        '>
           {caseStudiesEngineeringItem.map((card,index)=>(
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

export default AIEngineering