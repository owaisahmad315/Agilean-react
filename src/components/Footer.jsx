import React from 'react'
import { Link } from 'react-router-dom'
import {lightLogo,facebook,vercel,github, telegram,AiOutlineInstagram, FiFigma } from '../assets';
 

const Footer = () => {
  return (
    <div className=' py-5 px-6  xl:py-2 xl:w-full'>
              <div className='flex justify-center flex-col xl:justify-around'>
                  <div className=''>
                  <div className='p-10 lg:px-14 xl:px-20  xl:pl-24'>
                        <h1 
                            className='font-[700] text-center md:text-center lg:text-left xl:text-left py-5 text-[20px] md:text-[24px] xl:text-[36px]
                            leading-[20px] md:leading-[36px] xl:leading-[42.19px] '
                            >Start work today
                        </h1>
                <div className='flex items-center relative'>
                  <input 
                  type="email" 
                  className="h-[25px] md:h-[36px] xl:h-[50px]  w-full md:w-full lg:w-full   
                  text-black rounded-[32px] md:rounded-[40px] xl:rounded-[50px] 
                  pl-5  
                  xl:placeholder:text-[20px] md:text-[16px] text-[10px] leading-[11.72px]"
                  placeholder='Enter your email address'
                  />

                  <button 
                  className='flex  items-center absolute
                  justify-center py-[11px] gap-[10px] 
                  bg-[#111] rounded-[50px] md:rounded-[42px] xl:rounded-[32px] shadow-[0px 6px 
                  12px -6px rgba(255,255,255,0.25),
                  0px 8px 24px -4px rgba(255,255,255,0.15) 
                  right-[0.2em] xl:right-[1rem]lg:right-[4.3em] lg:top-[0.2em] xl:top-1 h-[21.5px] md:h-[32px] xl:h-[43px] w-[64.13px] md:w-[84px] xl:w-[193.87px]
                  text-[8px] md:text-[12px] xl:text-[18px]
                  font-[400] leading-[12.89px] md:leading-[16px] xl:leading-[21px] '>
                  Get Started
                  </button>
                </div>
              </div>
              <div className='flex justify-center md:justify-between flex-col md:flex-row 2md:flex-row lg:flex-row xl:flex-row items-center
                  2md:justify-around lg:justify-around  xl:justify-around md:my-5 xl:my-5 md:px-8'>
                  <div className='flex mt-5 justify-center flex-col  2md:items-start  xl:items-start  md:items-start
                  2md:justify-around lg:justify-around xl:justify-around'>
                      <Link to="/">
                      <img 
                      src={lightLogo} 
                      className='w-[66px] md:w-[86px] xl:w-[102px] h-[28px] md:h-[35px] xl:h-[39px]
                      object-contain  xl:ml-0' 
                      alt="AgileLean logo" 
                      />
                      </Link>              
                      <p className=' text-[10px] md:text-[14px] xl:text-[16px]  leading-[11.72px] 
                      md:leading-[16px] xl:leading-[19px] text-left font-[400] w-[195px] md:w-[240px] 
                    xl:w-[446px] pt-4 2md:text-left lg:text-left xl:text-left'>High level experience 
                      in web design and development 
                      knowledge, producing quality 
                      work.
                      </p>
                    </div>
                    <div className='flex  mt-7 2md:mt-[5rem] xl:mt-[5rem] xl:-ml-40'>
                      <ul className='text-[12px] md:text[14px] xl:text-[16px] 
                      leading-[15px] md:leading-[20px] xl:leading-[25px]  font-[400] 
                      space-y-3'>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                        <li className='invisible'>Validation Types</li>
                      </ul>  
                      <ul className='text-[12px] md:text-[14px] xl:text-[16px] 
                      leading-[15px] md:leading-[20px] xl:leading-[25px] font-[400] 
                      space-y-3'>
                        <li>
                        <Link to='/whyus/Howwehelp'>
                          How can we help?
                        </Link>
                        </li>
                        <li>
                        <Link to='/whyus/Whypreferus'>
                          Why prefer us?
                        </Link>
                        </li>
                        <li>
                        <Link to='/whyus/Whatweensure'>
                          What we ensure?
                        </Link>
                        </li>
                        <li>
                        <Link to='/programsandoffering/CTO'>
                          CTO offerings
                        </Link>
                        </li>
                        <li>
                        <Link to='/programsandoffering/ValidationType'>
                          Validation Types
                        </Link>
                        </li>
                      </ul>
                    </div>
                    <div className='flex flex-col justify-around items-center md:ml-5
                      '>
                        <p className='py-2 text-[10px] md:text-[14px] xl:text-[16px] mt-8
                        leading-[11.72px] md:leading-[24px] xl:leading-[35px]'>Let's do it</p>
                        <div className='flex items-center justify-center space-x-5'>
                        <img 
                        src={facebook}
                        className='w-[12px] h-[22px] bg-contain' 
                        alt="" />
                        <img 
                        src={vercel}
                        className='w-[12px] h-[22px] bg-contain' 
                        alt="" />
                        <img 
                        src={github}
                        className='w-[12px] h-[22px] bg-contain' 
                        alt="" />
                        <img 
                        src={telegram}
                        className='w-[12px] h-[22px] bg-contain' 
                        alt="" />
                        <AiOutlineInstagram 
                        size={20} 
                        className='text-white/50'/>
                        <FiFigma 
                        size={20}
                        className='text-white/50' />

                        </div>
                      </div>
                  </div>
                  <div className='flex flex-col justify-center items-center mt-8'>
                    <p className='text-[12px] md:text-[16px] xl:text-[18px]  font-[400]
                    leading-[15px] md:leading-[24px] xl:leading-[30px] '>2023, All rights reserved
                    </p>
                    <ul className='flex underline xl:space-x-10 space-x-4 mt-2 mb-2
                    text-[10px] md:text-[12px] xl:text-[16px] leading-[15px] md:leading-[24px] xl:leading-[30px]'>
                      <li className=''>Copyright Policy</li>
                      <li>Privacy Policy</li>
                      <li>Terms of use</li>
                    </ul>
                  </div>
                 
              </div>
              </div>
    </div>
  )
}

export default Footer