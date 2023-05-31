import React, { useState } from 'react'
import {Link,useNavigate } from 'react-router-dom'
import {lightLogo} from '../assets'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import {navlinks} from '../constant'
import {LinkItem,DropDownItem} from '../components'



const Navbar= () =>{
  const navigate = useNavigate()
  const [nav, setNav] = useState(false);
  const [selectedMenu,setSelectedMenu] = useState(null);

  const handleSelectMenu = (menu) =>{
    setSelectedMenu(menu === selectedMenu ? null : menu)  
}

  const handleItemClick = (menu,item)=>{
    setSelectedMenu(null)
    navigate(`${menu.path}/${item.id}`)
  }
  
  return (
    <div className='py-10 px-6 2md:px-[50px] lg:px-[50px]
     xl:px-[100px] '>
      <div className='flex items-center justify-between'>    
        <Link to="/"
        className=''>
        <img 
        src={lightLogo} 
        className='w-[66px] lg:w-[78px]  xl:w-[102px] h-[28px] xl:h-[39px]
       object-contain' 
        alt="AgileLean logo" 
        />
        </Link>      
        <div className='2md:flex lg:flex xl:flex items-center justify-between hidden   md:hidden 2md:block lg:block xl:block'>
        <nav className=''>
        <div className='flex items-center justify-center ml-[-10rem]'>
          <ul className='flex '>
              <LinkItem 
              menus={navlinks}
              onMenuSelect={handleSelectMenu}
              />
              {selectedMenu && <DropDownItem 
              menu={selectedMenu}
              handleItemClick={handleItemClick}
              />}
          </ul>
        </div>
        </nav>
        </div>
        <button className='bg-white text-[#0a0a0a] text-[16px] lg:text-[20px]  xl:text-[24px] h-[30px] 2md:h-[50px] lg:h-[50px] xl:h-[70px]  rounded-[18px]
         font-[500] mt-40 2md:mt-0 lg:mt-0 xl:mt-0 not-italic leading-[26px] hidden 2md:block lg:block xl:block 2md:w-[100px] lg:w-[164px] xl:w-[184px]'>
        Sign in
        </button>
        {nav ? 
        <div className='fixed w-full h-[100vh] z-10 top-10 left-0'></div> : ''}
        <div className={nav ? 'fixed top-0 pt-24  left-0 w-full h-[100vh] bg-[#111] z-10 duration-300' :
         'fixed top-0 left-[-100%] w-full h-screen bg-[#fff] z-10 duration-300'}>
        <AiOutlineClose 
        className='absolute text-white  right-[8%] top-10 cursor-pointer' 
        size={30}
        onClick={() => setNav(!nav)}
        /> 
        <nav className=''>
        <div className='flex flex-col items-center justify-around h-[50vh]'>
          <div className=''>
            <LinkItem 
              menus={navlinks}
              onMenuSelect={handleSelectMenu}
              />
              {selectedMenu && <DropDownItem 
              menu={selectedMenu}/>}
          </div>
        <button className='bg-white text-[#0a0a0a] text-[16px]  h-[40px] lg:h-[50px] xl:h-[70px]  rounded-[18px]
         font-[500] mt-40 not-italic leading-[28px] w-[100px] lg:w-[164px] xl:w-[184px]'>
        Sign in
        </button>
        </div>
        </nav>
        </div>
        <GiHamburgerMenu 
        className='md:block 2md:hidden lg:hidden xl:hidden' 
        size={30}
        onClick={() =>setNav(!nav)}
        />
      </div>
    </div>
  )
}

export default Navbar