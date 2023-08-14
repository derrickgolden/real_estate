
import { FaLocationDot } from 'react-icons/fa6'
import { FcLike } from 'react-icons/fc'
import { AiOutlinePlusCircle } from 'react-icons/ai'

const FeaturedAptCard = ({locationInfor, specsInfor, details}) =>{
    console.log(specsInfor[0].icon())
    return(
        <div className="w-[30%] rounded-[15px] drop-shadow-6xl bg-white p-4 flex flex-col gap-6">
            <div className="w-full ">
                <div className="relative">
                    <div className='relative '>
                        <img src={locationInfor.img} alt="" 
                        className="object-cover object-center w- h-full" />
                        <div className="w-12 h-12 rounded-full bg-[#eeeff1] drop-shadow-8xl absolute -bottom-2
                        right-2 flex items-center justify-center  ">
                            <img src={locationInfor.avator} alt=""
                            className='object-cover object-center w-full h-full ' />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between absolute  top-[10%] gap-4 px-2 w-full">
                        <p className="text-base text-white font-bold font-sen opacity-40 rounded-[13px] 
                        bg-black w-28 text-center py-1 ">
                            20 km away
                        </p>
                        <p className="uppercase font-sans text-white text-sm bg-[#78c720] rounded-sm
                        w-24 py-1 text-center right-0">
                            for sell
                        </p>
                    </div>
                    <div className='flex w-3/4 '>
                        <div className='w-4 h-6 '>
                            <FaLocationDot size={20}
                            className='text-[#fe7847]'/>
                        </div>
                        <p className='opacity-50 text-base text-black font-sans capitalize pl-1 
                        overflow-hidden overflow-ellipsis whitespace-nowrap'>
                            {locationInfor.address}
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl text-[#1e62e8] font-bold font-sen'>{details.price}</h1>
                <h2 className='text-2xl font-bold font-sen text-black'>{details.title}</h2>
                <p className='opacity-50 font-sen text-base '>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat excepturi laborum facilis quae molestias perspiciatis a voluptatum ad, voluptatibus similique.
                </p>
            </div>
            <div className='flex items-center'>
                <div className='flex gap-2 justify-between w-[80%] bg-opacity-30 rounded border border-[#1e62e8] bg-[#e0e7f2] p-2'>
                    {
                        specsInfor.map((specs, i) =>(
                            <div key={i}>
                                <div className='flex flex-row gap-1 items-center'>
                                    <span className='text-base text-lightBlue font-bold font-sans'>
                                        {specs.no}    
                                    </span> 
                                    <span>{specs.icon()}</span>
                                </div>
                                <p className='opacity-50 text-sm text-black font-sans'>{specs.title}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='flex justify-between gap-2 w-[20%] px-2'>
                    <FcLike size={32}/>
                    <AiOutlinePlusCircle size={32}/>
                </div>
            </div>
        </div>
    )
}

export default FeaturedAptCard;

