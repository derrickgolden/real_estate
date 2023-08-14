
import { useState } from 'react';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import { FAQuiz } from '../data/FAQuiz';

const FAQ = () =>{
    const [index, setIndex] = useState(0)

    const handleToggle = (i) =>{
        index == i? setIndex(null) : setIndex(i)
    }
    return(
        <div className='p-[5%]'>
            <h1 className="text-5xl text-[#14395b] font-bold font-playfair text-center
                drop-shadow-5xl tracking-wider">
                    Frequently Asked Questions
            </h1>
            <div className='mt-10'>
                {FAQuiz.map((data, i) =>(
                    <div key={i}
                    className={`border ${index == i? " border-[#186aa5] rounded-[32px] ":
                    " border-[#e8e8e8] drop-shadow-5xl rounded-lg"} bg-white p-6 mb-6`}>
                        <div className="flex justify-between gap-4 items-center ">
                            <h1 className="opacity-70 text-[#14395b] text-lg font-sans font-bold ">
                                {data.quiz}
                            </h1>
                            <div onClick={() => handleToggle(i)}
                            className='cursor-pointer'>
                                {index == i? <AiOutlineMinus size={32}/> : <AiOutlinePlus size={32}/>}
                            </div>
                        </div>
                        <div className={`grid ${index == i?" grid-rows-1 ": " grid-rows-0 "} overflow-hidden 
                        transition-gridRow`}>
                            <p className={`${index == i? "visible " : "invisible "} min-h-0
                            transition-visibility text-[#8d9598] text-base font-san w-4/5`} >
                                {data.ans}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default FAQ;