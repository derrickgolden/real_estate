
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

import { footerDetails } from '../data/footerDetails'

const Footer = () =>{
    return(
        <div className="w-full">
            <div className="flex justify-between px-[10%] py-4 bg-[#14395b]">
                <div className='w-[20%]'>
                    <h1 className='uppercase text-lightBlue text-4xl py-4'>
                        <span className='border-4 border-[#2289ff] h-10 w-11 inline-block text-center
                        font-bold'>m</span>odern
                    </h1>
                    <p className="text-sm text-white font-normal font-playfair tracking-wider">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores.
                    </p>
                    <div className='flex gap-4 text-white text-2xl py-6'>
                        <AiFillTwitterCircle className='text-lightBlue'/>
                        <BsFacebook />
                        <AiFillLinkedin />
                    </div>
                </div>
                {footerDetails.map((details, i) =>(
                    <div key={i}
                    className='flex flex-col capitalize  text-white'>
                        <h3 className='text-lg font-bold font-sans py-4 tracking-wider'>
                            {details.title}
                        </h3>
                        {details.links.map((link, i) =>(
                            <a key={i} href='#'
                            className='text-sm font-sans leading-7'>
                                {link}
                            </a>
                        ))}
                    </div>
                ))}
            </div>
            <div className="flex justify-between gap-4 bg-[#0b2f50] text-white
             text-sm font-sans px-[10%] py-4 w-full">
                <p>&copy Copyright 2021, morden.com</p>
                <p><a href="#">Terms and Conditions</a> | 
                    <a href="#">Privacy Policy</a> 
                </p>
            </div>
        </div>
    )
}

export default Footer;
