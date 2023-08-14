
import { useState } from "react";

import { dreamAptDetails } from "../data/dreamApt";

import { AiFillCheckCircle } from 'react-icons/ai';

const DreamApartment = () =>{
    const [isSelected, setIsSelected] = useState({id: "deluxe"})

    const handleSelectClick = ({id}) =>{
        setIsSelected({id: id})
    }
    return(
        <div className="p-4">
            <div className="text-center">
                <h1 className="text-5xl text-[#14395b] font-bold font-playfair text-center
                drop-shadow-5xl tracking-wider leading-[70px]">Hi, What do you want for your</h1>
                <h1 className="text-5xl text-lightBlue font-bold font-playfair text-center
                drop-shadow-5xl tracking-wider leading-[70px]">Dream Apartment</h1>
                <p className="opacity-75 text-[#8d9598] text-xl font-sans py-8">
                    Select an Apartment type below to begin
                </p>
            </div>
            <div className=" flex gap-4 justify-between p-4">
                {dreamAptDetails.map((dreamApt, i) =>(
                    <div key={dreamApt.id} onClick={() => handleSelectClick(dreamApt)}
                    className="bg-white rounded-[32px] drop-shadow-6xl p-6 cursor-pointer ">
                        <img src={dreamApt.img} alt={dreamApt.alt} 
                        className="w-64 h-52 rounded-[30px] object-cover object-center"/>
                        <p className="opacity-75 text-2xl text-[#8d9598] font-sans text-center
                        pt-4 relative">
                            {dreamApt.title} 
                            {
                            dreamApt.id !== isSelected.id ? null :
                            <AiFillCheckCircle className="text-[#fe7847] absolute bottom-0 right-0"/>
                            }
                        </p>
                    </div>
                ))}
            </div>
            <div className="text-center">
                <button className="w-60 rounded-[20px] bg-lightBlue text-2xl text-white font-sans
                py-2 mt-8 ">
                    Continue
                </button>
            </div>
        </div>
    )
}

export default DreamApartment;
