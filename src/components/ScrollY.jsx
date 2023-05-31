import React,{useState,useEffect} from 'react'
import {MdArrowUpward} from 'react-icons/md'



const ScrollY = () => {
    const [showScrollY,setShowScrollY] = useState(false) 

    const handleScrollY =()=>{
        window.scrollY > 1010 ? setShowScrollY(true)
        :setShowScrollY(false)
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScrollY)
        return ()=>{
        window.removeEventListener('scroll',handleScrollY)
        }
    },[])

    useEffect(()=>{
        window.scrollTo({top:0,left:0,behavior:'smooth'})
    },[])
  return (
    <div>
        <button 
         className={showScrollY ? 'flex justify-center fixed md:fixed items-center h-12 md:h-12 w-12 md:w-12 bg-[#fff] p-2 text-[#111] rounded-full top-[48rem] md:top-[65rem] lg:top-[33rem] xl:top-[35rem] right-5 md:right-5 lg:right-5 xl:right-' : ''}
        onClick={()=>{
            window.scrollTo({top:0,left:0,behavior:'smooth'})
        }}
         >
        <MdArrowUpward size={30} />
        </button>
    </div>
  )
}

export default ScrollY