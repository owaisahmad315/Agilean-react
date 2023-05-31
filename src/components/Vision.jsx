import React from 'react'
import {rectangleLeft,triangleLeft,
    rectangleRight,triangleRight,rightCircle} from '../assets'
import {listItem} from '../data'


const Vision = () => {
  return (
    <div className='flex h-full flex-col items-center justify-between xl:py-20 
     py-2'>
        <div className='my-5'>
        <h1 className='text-center text-[16px] md:text-[24px] 2md:text-[28px] lg:text-[32px]  xl:text-[40px] my-2
        font-[800] leading-[30px] sm:leading-[32px] xl:leading-[34px]'>The Vision</h1>
        <div className='flex items-center justify-around'>
        <div className='flex items-center -mt-10  mr-2 xl:mr-0'>
            <img 
            src={rectangleLeft}
            className='h-[10.79px] md:h-[30px] xl:h-[38px] w-[29.76px] md:w-[70px] xl:w-[140px]' 
            alt="" />
            <img 
            src={triangleLeft}
            className='h-[19.13px] md:h-[50px] xl:h-[90px] w-[21.19px] md:w-[37px] xl:w-[74px]'
            alt="" />
        </div>
        <p className='mt-5 w-[230px] md:w-[450px] xl:w-[691px] h-[51px] md:h-[65px] xl:h-[79px] text-[10px] md:text-[16px]
        2md:text-[18px]  lg:text-[20px]  xl:text-[24px] xl:ml-4 text-center font-[400] xl:text-center ml-0 leading-[15px] md:leading-[24px] 
         xl:leading-[30px]'>Has the vision, identifies 
        opportunities, understands the market and has a good 
        idea of the software product they want to build</p>
        </div>
        </div>
        <div className='my-5'>
        <h1 className='text-center text-[16px] md:text-[24px] 2md:text-[28px] lg:text-[32px] xl:text-[40px] my-2
        font-[800] leading-[30px] sm:leading-[32px] xl:leading-[34px]'>The Pragmatists</h1>
        <div className='flex items-center'>
        <p className='mt-5 w-[230px] md:w-[450px] xl:w-[691px] h-[51px] md:h-[65px] xl:h-[79px] text-[10px] md:text-[16px]
        2md:text-[18px]  lg:text-[20px]   xl:text-[24px] xl:ml-4 text-center font-[400] xl:text-center ml-0 leading-[15px] md:leading-[24px] 
         xl:leading-[30px]'>Understands 
        the vision and converts the big picture into working software requiremnents
         (i.e Epics, User stories, Features)</p>
         <div className=' flex items-center -mt-10  xl:ml-5 ml-0'>
            <img 
            src={triangleRight} 
            className='h-[19.13px] md:h-[50px] xl:h-[90px] w-[21.19px] md:w-[37px] xl:w-[74px]'
            alt="" 
            />
            <img 
            src={rectangleRight} 
            className='h-[10.79px] md:h-[24px] xl:h-[38px] w-[29.76px] md:w-[70px] xl:w-[140px]'
            alt="" />
        </div>
        </div>
        </div>
        <div className='my-5'>
        <h1 className='text-center text-[16px] md:text-[24px] 2md:text-[28px] lg:text-[32px] xl:text-[40px] my-2
        font-[800] leading-[30px] sm:leading-[32px] xl:leading-[34px]'>The Makers</h1>
        <div className='flex items-center'>
        <div className='flex items-center -mt-10  mr-2'>
            <img 
            src={rectangleLeft}
            className='h-[10.79px] md:h-[30px] xl:h-[38px] w-[29.76px] md:w-[70px] xl:w-[140px]' 
            alt="" />
            <img 
            src={triangleLeft}
            className='h-[19.13px] md:h-[50px] xl:h-[90px] w-[21.19px] md:w-[37px] xl:w-[74px]'
            alt="" />
        </div>
        <p className='mt-5 w-[230px] md:w-[450px] xl:w-[691px] h-[51px] md:h-[65px] xl:h-[79px] text-[10px] md:text-[16px]
        2md:text-[18px]  lg:text-[20px]  xl:text-[24px]  text-center font-[400] xl:text-center ml-0 leading-[15px] md:leading-[24px] 
         xl:leading-[30px]'>Develops a plan, 
        timelines and converts the software 
        requirements into working software</p>
        </div>
        </div>
        <div className='my-5'>
        <h1 className='text-center text-[16px] md:text-[24px] 2md:text-[28px] lg:text-[32px] xl:text-[40px] my-2
        font-[800] leading-[30px] sm:leading-[32px] xl:leading-[34px]'>The Tools</h1>
        <div className='flex items-center'>
        <p className=' mt-5 w-[230px] md:w-[450px] xl:w-[691px] h-[51px] md:h-[65px] xl:h-[79px] text-[10px] md:text-[16px]
        2md:text-[18px]  lg:text-[20px]   xl:text-[24px] xl:ml-4 text-center font-[400] xl:text-center ml-0 leading-[15px] md:leading-[24px] 
         xl:leading-[30px]'>The tools for 
        buliding working software including 
        developer tools, development platform, 
        programming languages, data bases</p>
        <div className=' flex items-center -mt-10 xl:-mt-0 xl:ml-2 ml-0'>
            <img 
            src={triangleRight} 
            className='h-[19.13px] md:h-[50px] xl:h-[90px] w-[21.19px] md:w-[37px] xl:w-[74px]'
            alt="" 
            />
            <img 
            src={rectangleRight} 
            className='h-[10.79px] md:h-[24px] xl:h-[38px] w-[29.76px] md:w-[70px] xl:w-[140px]'
            alt="" />
        </div>
        </div>
        </div>
        <div className='my-5'>
        <h1 className='text-center text-[16px] md:text-[24px] 2md:text-[28px] lg:text-[32px] xl:text-[40px] my-2
        font-[800] leading-[30px] sm:leading-[32px] xl:leading-[34px]'>The Connections</h1>
        <div className='flex items-center'>
        <div className='flex items-center -mt-10  mr-2 xl:mr-0'>
            <img 
            src={rectangleLeft}
            className='h-[10.79px] md:h-[30px] xl:h-[38px] w-[29.76px] md:w-[70px] xl:w-[140px]' 
            alt="" />
            <img 
            src={triangleLeft}
            className='h-[19.13px] md:h-[50px] xl:h-[90px] w-[21.19px] md:w-[37px] xl:w-[74px]'
            alt="" />
        </div>
        <p className=' mt-5 w-[230px] md:w-[450px] xl:w-[691px] h-[51px] md:h-[65px] xl:h-[79px] text-[10px] md:text-[16px]
        2md:text-[18px]  lg:text-[20px]  xl:text-[24px] xl:ml-4 text-center font-[400] xl:text-center ml-0 leading-[15px] md:leading-[24px] 
         xl:leading-[30px]'>Networking and 
        related tools to connect the boxes, 
        the working software, and end users of 
        the software</p>
        </div>
        </div>
        <div className='xl:mb-20'>
        <h1 className='text-center text-[16px] md:text-[24px] 2md:text-[28px] lg:text-[32px] xl:text-[40px] my-2
        font-[800] leading-[30px] sm:leading-[32px] xl:leading-[34px]'>The Boxes</h1>
        <div className='flex items-center'>
        <p className='mt-5 w-[230px] md:w-[450px] xl:w-[691px] h-[51px] md:h-[65px] xl:h-[79px] text-[10px] md:text-[16px]
        2md:text-[18px]  lg:text-[20px]  xl:text-[24px] xl:ml-4 text-center font-[400] xl:text-center ml-0 leading-[15px] md:leading-[24px] 
         xl:leading-[30px]'>The hardware 
        where all the magic happens including 
        developer workstation and the servers 
        where the software runs</p>
        <div className=' flex items-center -mt-10  xl:ml-2 ml-0'>
            <img 
            src={triangleRight} 
            className='h-[19.13px] md:h-[50px] xl:h-[90px] w-[21.19px] md:w-[37px] xl:w-[74px]'
            alt="" 
            />
            <img 
            src={rectangleRight} 
            className='h-[10.79px] md:h-[24px] xl:h-[38px] w-[29.76px] md:w-[70px] xl:w-[140px]'
            alt="" />
        </div>
        </div>
        </div>
        
        <p className=' w-full px-6  md:w-[610px] 2md:w-[600px] lg:w-[860px] xl:w-[1027px] mt-0 2md:mt-10 xl:mt-10 h-full xl:h-[216px] 
         text-left text-[15px] md:text-[24px] xl:text-[48px] font-[400] leading-[25px] 
        md:leading-[35px] xl:leading-[72px] tracking-[-0.03em]'>We are investing time & money at a 
        very early stage into ideas and founders 
        to validate promising opportunities. 
        Focus areas are (non-exclusive):</p>
        <div className='flex justify-between items-start w-full'>
        <div className='md:pl-[80px] 2md:pl-[158px] lg:pl-[200px] xl:pl-[160px] pl-0 pt-3 xl:pt-20 pb-10 xl:pb-0 mt-0'>
            {listItem.map((list,index) =>(
                <div 
                key={index}>
                <ul  
                className="flex px-6 items-center space-x-2 py-3 xl:py-6">
                    <img 
                    src={list.check} 
                    className="h-[16px] md:h-[24px] xl:h-[32px] w-[16px] md:w-[24px] xl:w-[32px]
                      object-contain" 
                     alt="checbox mark" />
                    <li className='text-[10px] md:text-[16px] xl:text-[24px] font-[400] not-italic
                    leading-[15px] md:leading-[24px] xl:leading-[30px]'>{list.text}</li>
                </ul>
                </div>
            ))}
        </div>
        <div className="-mb-0 xl:-mb-32 hidden xl:block">
        <img 
        src={rightCircle} 
        alt=""/>
        </div>
        </div>
    </div>
  )
}

export default Vision