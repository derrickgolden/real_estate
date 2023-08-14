
import { featuredAptDetails } from "../data/featuredApt";

import FeaturedAptCard from "../components/FeaturedAptcard";

const FeaturedApartment = () =>{
    return(
        <div className="p-10 mt-10">
            <div className="text-center">
                <h1 className="text-5xl text-[#14395b] font-bold font-playfair text-center
                drop-shadow-5xl tracking-wider leading-[70px]">
                    Featured Apartment
                </h1>
                <p className="opacity-75 text-[#8d9598] text-xl font-sans py-8">
                    The Most frequently searched and most popular apartment of the application will be in the list
                </p>
            </div>
            <div className="flex gap-4 justify-between">
                {featuredAptDetails.map((featuredApt, i) =>(
                    <FeaturedAptCard key={i}
                        locationInfor={featuredApt.locationInfor}
                        specsInfor={featuredApt.specsInfor}
                        details={featuredApt.details}
                    />
                ))}
            </div>
            <div className='flex flex-row  gap-4 w-full py-10 justify-center'>
                <div className='w-7 h-7 rounded-full hover:bg-[#2289ff] bg-[#8d9598]'></div>
                <div className='w-7 h-7 rounded-full hover:bg-[#2289ff] bg-[#2289ff]'></div>
                <div className='w-7 h-7 rounded-full hover:bg-[#2289ff] bg-[#8d9598]'></div>
            </div>
        </div>
    )
}

export default FeaturedApartment;

