

import { useState } from 'react'

import { AiOutlineMenu, AiOutlineClose, AiOutlineBell, AiOutlineSearch  } from 'react-icons/ai'

const NavBar  = () =>{
    const [isOpen, setIsOPen] = useState(true)
    const handleToggleMenu = () =>{
        console.log(isOpen)
        setIsOPen(!isOpen)
    }
    return(
        <div className="flex items-center justify-between">
            <div >
                <h1 className='uppercase text-lightBlue text-4xl'>
                    <span className='border-4 border-[#2289ff] h-10 w-11 inline-block text-center
                     font-bold'>m</span>odern
                </h1>
            </div>
            <div className='  pt-4 md:pt-0'>
                <div onClick={() =>{handleToggleMenu()}}
                    className="md:hidden text-black text-3xl cursor-pointer h-fit 
                    flex justify-end">
                        {isOpen? <AiOutlineClose className="text-3xl"/>
                        : <AiOutlineMenu className="text-3xl"/>}
                </div>
                <div className={`${isOpen? "grid-rows-1 " : "grid-rows-0 "} md:grid-rows-1 h-fit 
                grid overflow-hidden transition-gridRow duration-1000 md:pt-5 w-[100%] md:justify-end
                md:p-4`}>  
                    <nav className={`${isOpen? "visible " : "invisible "} md:visible bg-[#46a1c5] md:bg-transparent px-6 md:px-0
                    min-h-0 transition-visibility duration-1000 md:flex flex-row gap-4 font-sans w-full
                    rounded-md`}>
                        <a href='https://www.google.com/' target='_blank' 
                        className="text-lg md:text-2xl text-black font-normal hover:text-lightBlue
                        cursor-pointer list-none uppercase h-fit py-4 md:py-0 visited:text-blue" >
                            home
                        </a>
                        <a href='https://www.google.com/' target='_blank' 
                        className="text-lg md:text-2xl text-black font-normal hover:text-lightBlue
                        cursor-pointer list-none uppercase h-fit pb-4 md:pb-0 visited:text-blue">
                            about
                        </a>
                        <a href='https://www.google.com/' target='_blank' 
                        className="text-lg md:text-2xl text-black font-normal hover:text-lightBlue
                        cursor-pointer list-none uppercase h-fit pb-4 md:pb-0 visited:text-blue">
                            campaign
                        </a>
                        <a href='https://www.google.com/' target='_blank' 
                        className="text-lg md:text-2xl text-black font-normal hover:text-lightBlue
                        cursor-pointer list-none uppercase h-fit pb-8 md:pb-0 visited:text-blue" >
                            contact
                        </a>
                    </nav>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2" >  
                <div className=' flex items-center relative  h-10 '>
                    <input type="search" name="saved" id="saved" placeholder='Saved Search'
                    className='border outline-1 border-[#707070] outline-[#707070] rounded-lg w-40
                    focus:border-none bg-white pl-7 h-full placeholder:text-[#303030] placeholder:font-sans'/>  
                    <AiOutlineSearch size={28}
                    className="absolute pl-2" />
                </div>  
                <div className='flex items-center justify-center w-14 h-14 rounded-[31px] filter 
                bg-[#e8ebf4] relative' >
                    <AiOutlineBell size={32} className='cursor-pointer'/> 
                    <div className='w-1/4 h-1/4 bg-[#fe7847] top-1/4 right-1/4 absolute rounded-full'></div>             
                </div>
                <button className='w-44 h-14 rounded-xl bg-lightBlue border-2 border-[#2289ff] text-lg
                uppercase text-white font-Montserrat text-center font-bold'>
                    log in
                </button>
            </div>
        </div>
    )
}

export default NavBar
// width: 62px;
// height: 62px;
// border-radius: 31px;
// filter: drop-shadow(0px 1px 1px rgba(34,137,255,0.22));
// background-color: #e8ebf4;

