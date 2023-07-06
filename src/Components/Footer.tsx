import React from 'react'
import { Instagram, Twitter } from "lucide-react";
import { Facebook } from "lucide-react";
import Image from 'next/image';
import logo from "../../public/logo.webp";

const Footer = () => {
  return (
    <div className=" mt-auto">
    {/* // {main div} */}
    <div className="flex flex-col xl:flex-row py-20 gap-4 justify-between ">
      {/* {1St Column} */}
      <div className="flex flex-col w-1/3">
        <Image src={logo} alt="logo" className="pb-10" />
        <p>
          Small, artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </p>
        <div className="flex justify- pt-5 gap-5" >
            <div className="w-10 h-10 justify-center bg-gray-100 border-0 rounded-lg shadow-md">
            <Twitter className="m-2" size={25}/>
            </div>
            <div className="w-10 h-10 justify-center bg-gray-100 border-0 rounded-lg shadow-md">
            <Facebook className="m-2" size={20}/> 
            </div>
            <div className="w-10 h-10 justify-center bg-gray-100 border-0 rounded-lg shadow-md">
            <Instagram className="m-2" size={20}/>
            </div>
            </div>
      </div>
      {/* 2nd Column  */}
      <div className="flex flex-col justify-between">
        <h2 className="text-3xl mb-3">Company</h2>
        <a href="" className="font-semibold">About</a>
        <a href=""className="font-semibold">Term of Use</a>
        <a href=""className="font-semibold">Privacy Policy</a>
        <a href=""className="font-semibold">How It works</a>
        <a href=""className="font-semibold">Contact Us</a>
      </div>
      {/* third Column  */}
      <div className="flex flex-col mb-3">
        <h2 className="text-3xl mb-3">Support</h2>
        <a href="" className="font-semibold">Support Carrer</a>
        <a href="" className="font-semibold">24h service</a>
        <a href="" className="font-semibold">Quick Chat</a>
      </div>
      {/* forth Column  */}
      <div className="flex flex-col mb-3 mr-20">
        <h2 className="text-3xl mb-3">Contact</h2>
        <a href="" className="font-semibold">WhatsApp</a>
        <a href="" className="font-semibold">24h service</a>
      </div>
    

    </div>
    </div>
  )
}

export default Footer