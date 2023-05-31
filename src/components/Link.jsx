import React,{useState} from 'react'


const LinkItem = ({menus,onMenuSelect}) => {
    const [selectedMenu,setSelectedMenu] = useState(null)
    

    const handleMenuSelect = (menu)=>{
        setSelectedMenu(menu)
        onMenuSelect(menu)
    }
  return (    
    <div className='flex items-center space-x-0 2md:space-x-6 lg:space-x-6 xl:space-x-6 space-y-20 2md:space-y-0 lg:space-y-0 xl:space-y-0 justify-around 
    flex-col md:flex-col 2md:flex-row lg:flex-row  xl:flex-row 2md:ml-40 lg:ml-40 xl:ml-10'>
        {menus?.map((menu,index)=> (
            <ul className='flex items-center justify-end'
            key={index}>
            <li 
            className='mx-3 cursor-pointer text-[15px] md:text-[18px] lg:text-[20px] xl:text-[20px]  xl:py-10 font-[400] 
            leading-[23px] hover:text-[#b0c4cd] ' 
            onClick={()=> handleMenuSelect(menu)}
            >
            {menu.name}{menu.name === selectedMenu && ''}
            </li>
            <img 
            src={menu.imgUrl} 
            alt="" />
            </ul>
        ))}
    </div>
  )
}

export default LinkItem