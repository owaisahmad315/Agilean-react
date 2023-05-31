import React, { useState } from 'react'
import {businessSupport,chart,advantages,circleArrow,dots,ArrowRight, checkMark, businessPlan} from '../assets'
import { Carousel } from '../components'
import { carouselItem } from '../data'
// import Slider from 'react-multi-carousel'


const CarouselList = () => {
    
    // const [currentIndex,setCurrentIndex] = useState(0)

    // const prevSlide = ()=>{
    //     const isFirstSlide = currentIndex === 0;
    //     const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
    //     setCurrentIndex(newIndex);
    // }

    // const nextSlide = () => {
    //     const islastSlide = currentIndex === slides.length-1;
    //     const newIndex = islastSlide ? 0 : currentIndex + 1;
    //     setCurrentIndex(newIndex)
    // };
    // const goToSlide = (slideIndex)=>{
    //     setCurrentIndex(slideIndex)
    // }

    return (
      <main>
        <div className=' lg:w-[654px] xl:w-[654px] relative xl:relative'>
            <div className=''>
              <Carousel>
                {carouselItem.map((slide)=>(  
                    <div 
                    className='flex justify-around'>
                        <div className='w-[245px] md:w-[350px] lg:w-[654px]  xl:w-[654px]  h-[147px] lg:h-[358px] xl:h-[358px]   bg-[#b0c4cd]'>
                         <p className={slide.textStyle}>{slide.text}</p>
                        </div>
                        <div className={slide.cName}>
                        <img src={slide.imageUrl}
                        className={slide.imgStyle} 
                        alt="" 
                        />
                        </div>
                    </div>   
                ))}
              </Carousel>
            </div>    
        </div>
      </main>

  )
}

export default CarouselList