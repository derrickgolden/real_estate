
import { BsPlayCircle } from 'react-icons/bs'

import { primeBanner, primeDots, primeSide } from '../../../public';

const PrimeLocation = () =>{
    return(
        <div className="flex justify-between px-[5%] py-20 ">
            <div className="">
                <h1 className="text-5xl text-[#14395b] font-bold font-playfair 
                drop-shadow-5xl tracking-wider leading-[70px]">
                    Buy <br /> Dream Apartment <br />
                    In 
                <span className="text-lightBlue "> Prime Location</span>
                </h1>
                <button className="capitalize bg-blue text-white p-4 rounded-[20px] 
                drop-shadow-5xl font-sans text-2xl mt-10">
                    sell all apartment
                </button>
            </div>
            <div className='w-1/2 relative'>
                <img src={primeBanner} alt="" 
                className='z-20 relative'/>
                <div className='flex items-center absolute justify-center -left-1/4 bottom-[8%]  
                w-1/2 drop-shadow-5xl z-20'>
                    <img src={primeSide} alt=""
                    className='rounded-[58px] object-center' />
                    <BsPlayCircle size={48}
                    className='absolute text-lightBlue'/>
                </div>
                <div className='absolute -top-[5%] -left-[5%] w-1/3'>
                    <img src={primeDots} alt="" />
                </div>
            </div>
        </div>
    )
}

export default PrimeLocation;