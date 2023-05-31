import React from 'react'
import {leftCircle,checkMark} from '../assets'
import {featureItems} from '../data'
import 'typeface-roboto'


const Feature = () => {
  return (
    <div className='flex justify-between items-start xl:items-center  
    h-[35vh] md:h-[30vh] 2md:h-[20vh] mt-5 lg:h-[100vh] w-full  xl:h-[100vh]'>
        <div className=''>
            <h1 className='pl-3 md:pl-8 font-[700] text-[16px] md:text-[32px] xl:text-[58px]   
            leading-[20px] md:leading-[40px] xl:leading-[72px] tracking-[-0.03em] 
            text-center capitalize h-[10px] md:h-[30px] w-[112px] md:w-full xl:w-full mt-4 
            xl:-mt-20 2md:ml-20 xl:ml-20 font-sans'>
            Other features
            </h1>
            <div className=" xl:-mb-10 hidden lg:block xl:block w-[534px] h-[448px] xl:mt-20">
            <img 
            src={leftCircle}  
            alt="left line Circle" />
            </div>
        </div>
        <div className='mr-0 md:mr-40 2md:mr-10 xl:mr-20  xl:mb-40 mb-[-18rem]'>
            {featureItems.map((list,index) =>(
                <div
                key={index}
                className=''>
              <ul className="flex items-center space-x-2 py-4 px-6">
                <img src={checkMark} 
                className={list.checkMarkStyle} 
                alt="checbox mark" />
                <li className={list.liStyle}>{list.text}</li>
                </ul>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Feature