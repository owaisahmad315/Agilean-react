import React from 'react'

const SmallCard = (props) => {
  return (
    <div className='flex flex-col justify-around items-center md:items-start lg:items-start xl:items-start '>
        <div className='h-[50px] md:h-[80px] xl:h-[102px] 
        w-[50px] md:w-[80px] xl:w-[102px]  mt-2  
        flex items-center rounded-[14px] justify-center
      text-black bg-white '>
          <img src={props.icon} 
          className="h-[27px] md:h-[36px] xl:h-[56px] w-[27px] md:w-[36px] xl:w-[56px] " 
          alt={props.title} 
          />
        </div>
          <p className='pt-1 pb-4 md:py-3 xl:py-2 text-[10px] md:text-[18px] xl:text-[24px] 
         leading-[15px] md:leading-[20px] xl:leading-[40px] xl:text-left '
          >{props.title}
          </p>
    </div>
  )
}

export default SmallCard;