import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

const list =  {
  visible:{opacity:1},
  hidden:{opacity:0},
}

const items = {
  visible:{opacity:1,x:0},
  hidden:{opacity:0,x:-200}
}

const DropDownItem = ({menu,handleItemClick}) => {
  return (
    <div>
        <div className='flex items-center justify-between'></div>
                <motion.ul 
                initial="hidden"
                animate="visible"
                variants={list}
                className={menu.style}
                >
                  {menu.items.map((item,index)=> (
                    <li key={index}
                    className="flex items-center justify-between
                    "
                    >  
                    <Link
                    to={`${menu.path}/${item.id}`}
                    className='flex items-center justify-around text-[#111]
                    py-[1rem] 2md:py-[0.4rem] lg:py-[0.4rem] xl:py-[0.4rem]'
                    onClick={()=> handleItemClick(menu,item)}
                    >
                    <ul className='flex items-center justify-between'>
                    <motion.li 
                    variants={items}
                    className='w-[250px]'
                    >{item.name}</motion.li> 
                    <img 
                    src={item.icon} 
                    className='hidden 2md:block lg:block xl:block' 
                    alt={item.name}  />
                    </ul>
                    </Link>
                    </li>
                  ))}
                </motion.ul>
    </div>
  )
}

export default DropDownItem