import React, { useState } from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'


const Carousel = ({children:carouselItem}) => {
  const [curr,setCurr] = useState(0)
  
  const prevSlide = () =>{
    setCurr((curr) => (curr === 0 ? carouselItem.length - 1:
      curr - 1))
  }
  const nextSlide = () =>{
    setCurr((curr) => (curr === carouselItem.length -1 ? 0 : 
      curr + 1))
  }
  const goToSlide= (slideIndex)=>{
    setCurr(slideIndex)
  }
    return (  
      <div className='lg:overflow-hidden xl:overflow-hidden lg:relative xl:relative'>
        <div className='lg:flex xl:flex grid grid-cols-1 
       grid-rows-4  md:grid-rows-2 md:grid-cols-2 transition-transform ease-out 
        duration-500 gap-10 md:gap-2'
        style={{transform: `lg:translateX(-${curr
         * 100}%) xl:translateX(-${curr * 100}%) `}}>
          {carouselItem}
        </div>
        <div className='lg:absolute xl:absolute lg:inset-0 xl:inset-0 lg:flex xl:flex lg:items-center
        lg:justify-between lg:p-4 hidden xl:justify-between xl:p-4'>
          <button 
          onClick={prevSlide}
          className='lg:p-1 xl:p-1 rounded-full shadow bg-white/80
          text-gray-800 hover:bg-white'
          >
            <BsChevronCompactLeft size={20} />
          </button>
          <button 
          onClick={nextSlide}
          className='lg:p-1 xl:p-1 rounded-full shadow bg-white/80
          text-gray-800 hover:bg-white'
          >
            <BsChevronCompactRight size={20}/>
          </button>
        </div>
        <div className='lg:mt-10 xl:mt-10 lg:right-0 xl:right-0 lg:left-0 xl:left-0 hidden lg:block xl:block'
        >
          <div className='flex items-center justify-center gap-2'
          >
            {carouselItem.map((_,i)=>(
              <div 
              className={`transition-all lg:w-[24px] xl:w-[24px] lg:h-[24px] xl:h-[24px] bg-[#111] border-3 rounded-full
              ${curr === i ? 'lg:p-2 xl:p-2 lg:h-[28px] xl:h-[28px] lg:w-[28px] xl:w-[28px] border-2 bg-[#b0c4cd]' : 'bg-[#111] border-2 border-[#b0c4cd]'}`}
              onClick={goToSlide}>
              </div>
            ))}
          </div>
        </div>
        </div>
  )
}

export default Carousel


