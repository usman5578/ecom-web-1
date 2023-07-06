import React from 'react'
import { ShoppingCart } from "lucide-react";
import Image from 'next/image';


const Hero = () => {
  return (<div className='flex-col lg:flex lg:flex-row py-10 '>
    {/* Left side section  */}
    <div className='w-full py-10 lg:w-1/2'>
    <div >
        <button className='bg-blue-100 font-semibold text-lg px-4 py-1 rounded text-blue-700'>Sale 70%</button>
    </div>
    <div>
        <h1 className='w-full text-5xl font-bold py-8'>An Industrial Take on Streetwear</h1>
        <p className='py-3 w-2/3'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
    </div>
    <div>
        <button className='flex gap-4 bg-black text-white px-8 py-4 mt-10 font-bold items-center'> <ShoppingCart />Start Shopping</button>
    </div>
    <div className='flex justify-between  mt-28 mr-20'>
        <Image  src="/Featured1.webp" alt="Brand Logo1" width={300} height={300}/>
        <Image src="/Featured2.webp" alt="Brand Logo1" width={300} height={300} />
        <Image src="/Featured3.webp" alt="Brand Logo1"  width={300} height={300}/>
        <Image src="/Featured4.webp" alt="Brand Logo1"  width={300} height={300}/>
    </div>
    </div>
    {/* Right Section  */}
    <div className='hidden lg:visible  bg-[#FFECE3] rounded-full  lg:w-[550px] lg:h-[550px] items-center lg:flex justify-center '>
        <Image src="/header.webp" alt="lady image" className='absolute  overflow-visible' width={650} height={650} />
    </div>
  </div>
  )
}

export default Hero