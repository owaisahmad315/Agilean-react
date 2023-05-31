import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./logo-carousel.css"
import {logos} from '../data'

    const logoList = (props) => {
 
      // const handleLogoHover = (logo) =>{
      //   setHoveredLogo(logo)
      // }
      // const handleLogoLeave =()=>{
      //   setHoveredLogo(null)
      // }

  return (
    <div className=''>
       <img 
       src={props.imageUrl}
       className="w-[80px] md:w-[140px] lg:w-[150px]  h-[50px]
         object-contain" 
       alt={props.title} />
    </div>
  )
}

export default logoList