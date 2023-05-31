import React,{useState} from 'react'
import LogoList from './logoSlider'
import {logos} from '../data'
import { logo } from '../assets'

const Work = () => {
  const [hoveredLogo,setHoveredLogo]=useState(null)
  const [showTitle, setShowTitle]=useState(false)
  const [showDescription, setShowDescription]=useState(false)
  return (
    <div className='h-full py-10 md:py-16 xl:py-20  bg-[#b0c4cd]'>
      <h1 className='text-center not-italic md:leading-[19px] xl:leading-[38px] text-[16px] 
        md:text-[24px]  xl:text-[32px] text-black  pt-2 xl:pt-2 pb-10 xl:pb-10 font-[600]'>We work with</h1>
        <div className='flex justify-evenly items-center h-full w-full  xl:flex-col'>
        <div className='grid md:grid-rows-7 lg:grid-rows-5 xl:grid-rows-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 
         grid-cols-2 2md:gap-[13rem] xl:gap-[10rem] gap-y-10 gap-x-28'>
        {logos.map((logo,index)=>(
        <LogoList 
         key={index}
         title={logo.title}
         description={logo.description}
         imageUrl={logo.imageUrl}
         />
        ))}
        </div>
        </div>
    </div>
  )
}

export default Work
