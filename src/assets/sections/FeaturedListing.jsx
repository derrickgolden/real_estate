
import { listingDetails } from "../data/listingDetails";

import { useState } from "react";

const FeaturedListing = () =>{
    const [isClicked, setIsClicked] = useState(2)

    const handleClick = (i) =>{
        setIsClicked(i)
    }
    return(
        <div className="bg-[#f4f7fa] py-10">
            <div className="text-center">
                <li className={`text-lightBlue underline 
                   text-2xl  font-sans  capitalize list-none cursor-pointer`}>
                        Apartments
                    </li>
                <h1 className="text-5xl text-[#14395b] font-bold font-playfair text-center
                drop-shadow-5xl tracking-wider leading-[70px]">
                    Featured Listings
                </h1>
            </div>
            <div className="flex gap-10 justify-between flex-wrap py-10 px-[10%] ">
                {listingDetails.map((listing, i)=>(
                    <div key={i} onClick={() => handleClick(i)}
                    className={`${isClicked == i? "bg-lightBlue text-white": "bg-white text-[#14395b] opacity-70" } 
                    flex flex-col items-center justify-center text-center gap-4
                    drop-shadow-6xl  w-56 h-64 rounded-2xl capitalize hover:bg-lightBlue
                    group`}>
                        <div className="flex items-center justify-center w-24 h-24
                         bg-[#f4f7fa] rounded-full text-lightBlue text-6xl">
                            {listing.icon()}
                        </div>
                        <p className=" text-2xl font-bold font-sans 
                        group-hover:text-white group-hover:opacity-100">
                            {listing.caption}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturedListing;
