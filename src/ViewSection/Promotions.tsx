import Image from "next/image";
import React from "react";


const Promotions = () => {
  return (
    <div className="mb-20">
      {/* Top text  */}
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="text-blue-700 text-justify font-bold">Promotions</h2>
        <h3 className="font-bold p-8 text-4xl">Our Promotions Events</h3>
      </div>
      {/* bottom Pictures  */}
      <div className="flex-col lg:flex lg:flex-row  gap-10">
        {/* left side  */}
        <div className="flex flex-col flex-grow gap-5 ">
          <div className="bg-[#D6D6D8] flex justify-between">
           <div className="flex justify-start px-8 items-center">
            <div className="flex flex-col">
            <h2 className="text-5xl font-bold"> Get Up To 60%</h2> 
            <h3 className="text-2xl mt-2">For the summer season</h3>
            </div>
           </div>
            <div>
            <Image src="/event1.webp" alt="event1" width={300} height={300}/>
            </div>
          </div>
          <div className="flex justify-center flex-col text-white p-10 bg-[#212121]">
            <h2 className="flex justify-center text-5xl mb-4">Get 30% Off </h2>
            <p className="flex justify-center mb-2" >Use promo Code</p>
            <div className="flex justify-center">
            <button className="bg-gray-600 px-10 border-0 rounded py-1 text-2xl">DINEWEEKENDSALE</button>
            </div>
          </div>
        </div>
        {/* Right Side  */}
        <div className="flex  mt-5 gap-10 justify-between lg:mt-0 lg:flex lg:gap-5 lg:justify-normal ">
          <div className="bg-[#EFE1C7] flex flex-col justify-between w-1/2">
            <div className="mt-6 ml-6">
            <p>Flex Sweatshirt</p>
            <div className="flex text-xl">
            <del className="mr-2" >$100.00</del>
            <div className="font-bold">$75.00</div>
            </div>
            </div>
            <Image src="/event2.webp" alt="event2" className="flex" width={300} height={300} />
          </div>
          <div className="bg-[#D7D7D9] flex flex-col justify-between w-1/2">
            <p className="mt-5 mx-5">Flex Push Button Bomber</p>
            <div className="flex text-xl ml-6">
            <del className="mr-2" >$225.00</del>
            <div className="font-bold">$190.00</div>
            </div>
            <Image src="/event3.webp" alt="event3" width={300} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
 