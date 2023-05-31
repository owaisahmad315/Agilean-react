import React from 'react'

const Card = (props) => {
  return (
    <div className='flex flex-col items-center my-1 lg:my-5 '>
        <div className='flex space-x-0 lg:space-x-3 mr-14 md:mr-[9rem] 
        lg:mr-[9rem]'>
            <img 
            src={props.icon}
            className="h-[16px] lg:h-[30px] w-[16px] lg:w-[30px]  
            object-contain" 
            alt={props.title} 
            />
            <h1 className='text-[12px] md:text-[16px] lg:text-[32px] leading-[14px] 
            md:leading-[24px] lg:leading-[37.5px] font-[800] text-center'>{props.title}</h1>
        </div>
        <p className={props.cName}>{props.text}</p>
    </div>
  )
}

export default Card