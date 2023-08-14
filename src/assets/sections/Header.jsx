
import { useState } from "react";

import NavBar from "../components/NavBar";

import { banner } from "../../../public";

const Header = () =>{
    const [isClicked, setIsClicked] = useState(true)
    return(
        <div className="px-10 py-10">
            <NavBar />
            <div className="py-5 relative flex items-center ">
                <div className="flex justify-end  " >
                    <img src={banner} alt="" 
                    className=" object-contain object-right w-2/3"/>
                </div>
                <div className="absolute  p-4 -left-32 w-full ">
                    <div className="flex flex-col items-center bg-white drop-shadow-3xl rounded-[76px] w-2/3 p-4 ">
                        <div className="text-center">
                            <h1 className="text-7xl font-bold drop-shadow-4xl font-playfair
                             text-lightBlue tracking-wider">
                                Let's find
                            </h1>
                            <h1 className="text-7xl font-bold drop-shadow-4xl font-playfair text-blue">
                                yours Dream...
                            </h1>
                            <p className="text-base text-[#303030] font-bold font-sans py-4 tracking-wide">
                                Building award winning properties <br/>
                                across London UK and the All world
                            </p>
                        </div>
                    </div>
                    <div className="pl-32 ">
                        <div className="flex flex-row py-4 gap-2">
                            <button className={`${isClicked? "text-white bg-[#2289ff] " : "text-[#303030] "} 
                            opacity-75 text-2xl font-bold font-sans
                            hover:text-white hover:bg-[#2289ff] w-32 rounded-full drop-shadow-5xl py-2`}>
                                Buy
                            </button>
                            <button className="opacity-75 text-2xl text-[#303030] font-bold font-sans
                            hover:text-white hover:bg-[#2289ff] w-32 rounded-full drop-shadow-5xl py-2">
                                Sell
                            </button>
                            <button className="opacity-75 text-2xl text-[#303030] font-bold font-sans
                            hover:text-white hover:bg-[#2289ff] w-32 rounded-full drop-shadow-5xl py-2">
                                Rent
                            </button>
                        </div>
                        <div className="p-4 flex flex-row drop-shadow-5xl bg-white rounded-lg gap-4 justify-between
                        w-full ">
                            <div className="">
                                <p className="opacity-75 text-base text-[#8d9598] font-sans ">
                                    City/Street
                                </p>
                                <button className="opacity-75 text-2xl font-bold font-sans
                                text-[#186aa5] py-2">
                                    Enter City
                                </button>
                            </div>
                            <div className="">
                                <p className="opacity-75 text-base text-[#8d9598] font-sans ">
                                    Apartment Type
                                </p>
                                <button className="opacity-75 text-2xl font-bold font-sans
                                text-[#186aa5] py-2">
                                    Deluxe Portion
                                </button>
                            </div>
                            <div className="">
                                <p className="opacity-75 text-base text-[#8d9598] font-sans ">
                                    Price Range
                                </p>
                                <button className="opacity-75 text-2xl font-bold font-sans
                                text-[#186aa5] py-2">
                                    Min price - Max price
                                </button>
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="opacity-75 text-xl font-sans text-lightBlue">
                                    + Advanced Filter
                                </p>
                                <button className="rounded-lg bg-[#2289ff] py-2 px-4 text-white text-lg">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header;

