
import { useState } from "react";

import { deluxePlan } from "../../../public";

import { planMenu } from "../data/planMenu";

const ApartmentPlan = () =>{
    const [isClicked, setIsClicked] = useState("1")
    return(
        <div className="bg-[#f4f7fa] p-[5%]">
            <div className="text-center">
                <h1 className="text-5xl text-[#14395b] font-bold font-playfair text-center
                drop-shadow-5xl tracking-wider leading-[70px]">
                    Apartment Plans
                </h1>
            </div>
            <nav className="flex justify-center py-6 gap-4">
                {planMenu.map((menu, i) =>(
                    <li key={i}
                    className={`${isClicked == i? "text-lightBlue underline ": "text-black "} 
                    opacity-70 text-2xl  font-sans hover:text-lightBlue 
                    hover:underline capitalize list-none cursor-pointer`}>
                        {menu.name}
                    </li>
                ))}
            </nav>
            <div className="flex gap-4 justify-between bg-white p-6 rounded-[15px] drop-shadow-5xl">
                <div className="w-5/12 rounded-lg bg-[#186aa5] border border-[#707070] p-4 text-white
                ">
                    <h1 className="text-3xl font-bold font-sans py-4 tracking-wider">Deluxe Portion</h1>
                    <p className="font-sans leading-8 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iusto natus, vitae nihil assumenda exercitationem! Possimus placeat, tempora iure animi exercitationem laboriosam eveniet, commodi est doloribus perspiciatis, aspernatur aperiam neque?
                    </p>
                    <div className="capitalize text-base leading-[50px] font-sans">
                        <p className="flex items-center justify-between">
                            total area 
                            <span className="overflow-hidden whitespace-nowrap text-ellipsis w-3/6 inline-block">
                                ........................................................................................
                            </span> 2800 sq. ft</p>
                        <p className="flex items-center justify-between">
                            total area 
                            <span className="overflow-hidden whitespace-nowrap text-ellipsis w-3/6 inline-block">
                                ........................................................................................
                            </span> 2800 sq. ft</p>
                        <p className="flex items-center justify-between">
                            total area 
                            <span className="overflow-hidden whitespace-nowrap text-ellipsis w-3/6 inline-block">
                                ........................................................................................
                            </span> 2800 sq. ft</p>
                        <p className="flex items-center justify-between">
                            total area 
                            <span className="overflow-hidden whitespace-nowrap text-ellipsis w-3/6 inline-block">
                                ........................................................................................
                            </span> 2800 sq. ft</p>
                        <p className="flex items-center justify-between">
                            total area 
                            <span className="overflow-hidden whitespace-nowrap text-ellipsis w-3/6 inline-block">
                                ........................................................................................
                            </span> 2800 sq. ft</p>
                    </div>
                </div>
                <img src={deluxePlan} alt="Deluxe Plan" />
            </div>
        </div>
    )
}

export default ApartmentPlan;

