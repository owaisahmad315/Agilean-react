import React from 'react'
import {arrRight,game,blur,FiArrowRight} from '../assets'
import './hero.css';

const Hero = () => {
  return (
    <div className='hero-parent h-full 2md:px-30px] lg:px-[30px] xl:px-[100px] md:p-5'>
      <div className='flex items-center justify-around 2md:-mt-20 xl:-mt-20'>
            <div className='ml-4'>
                <p className='h-[21px] xl:h-[30px] md:h-[25px] w-[188px]  xl:ml-0 md:w-[400px] 2md:w-full lg:w-full xl:w-[752px]  
                text-[rgba(255,255,255,0.54)] font-[roboto] text-[10px] md:text-[18px] 2md:text-[18px] xl:text-[24px] font-[500]  
                leading-[15px] md:leading-[24px] xl:leading-[30px] pb-10   mb-0 xl:mb-4  tracking-[-0.02em]
                  '>We are your product engine,from 
                Strategic Insights To Tactical Execution
                </p>
                <p className='text-[18px] md:text-[30px] 2md:text-[45px] lg:text-[45px] xl:text-[54px] not-italic font-[700]
                w-[239px] md:w-[400px] 2md:w-[600px] lg:w-[600px] xl:w-[740px] h-[60px] md:h-[130px] xl:h-[216px] leading-[20px] 
                md:leading-[40px] 2md:leading-[50px] lg:leading-[50px] xl:leading-[72px] tracking-[-0.03em]  xl:ml-0'>Being up-to-date is common; the competitive advantage is being up
                -to-tommorrow.</p>
             </div>
          <div className='flex flex-col mt-10   xl:mt-40'>
                <div className='mr-2 2md:mt-20 lg:mt-10'>
                  <img src={game} 
                  className="object-contain w-[108px] md:w-[350px] -mt-10
                  xl:w-[485px] h-[86.68px] md:h-[200px] xl:h-[433px]" 
                  alt="Blank 3D cubes" 
                  />
                </div>

                <div className='w-[422.99px] 2md:w-[200px] h-[66px] blur 
                  hidden md:block  xl:-mt-14 lg:hidden xl:block'>
                  <img 
                  src={blur} 
                  className="object-contain" 
                  alt="light blur" />
                </div>
          </div>
      </div>
          <div className='get-started flex items-center justify-start ml-5 mt-5 md:-mt-4  2md:-mt-16 lg:ml-5 lg:mt-5 xl:-mt-28 xl:ml-10'>
                  <button className='get-started-btn flex justify-between items-center   w-[205px] md:w-[310px] 2md:w-[460px] lg:w-[460px] xl:w-[567px] text-[10px] 
                              md:text-[16px] xl:text-[24px] leading-[28px] not-italic font-[400] 
                              text-left h-[35px] 2md:h-[50px] lg:h-[50px] xl:h-[71px] border-2 border-white rounded-[10px]
                              box-border pl-4'
                        >Get Started 
                        <span><FiArrowRight className="bg-white text-[#0a0a0a]  h-[35px] 2md:h-[50px] lg:h-[50px] xl:h-[71px]
                        rounded-[10px] w-[43.53px] 2md:w-[80px] lg:w-[80px] xl:w-[121px] p-3" 
                        
                        /></span>
                        
                        
                  
                  </button>
                  {/* <FiArrowRight 
                  className="bg-white text-[#0a0a0a] h-[35px] 2md:h-[50px] lg:h-[50px] xl:h-[71px] 
                  rounded-[10px] w-[43.53px] 2md:w-[80px] lg:w-[80px] xl:w-[121px] p-3 absolute
                  top-0  left-[10em] md:top-0  md lg:top-0 2md:left-[24em] lg:left-[24em] xl:top-0  xl:left-[28em]" /> */}
          </div>
    </div>
  )
}

export default Hero