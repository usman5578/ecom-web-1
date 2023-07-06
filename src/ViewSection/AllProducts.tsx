import Image from "next/image";
import React from "react";

const AllProducts = () => {
  return (
    <div className="bg-gray-50 -m-28 mt-32 p-5">
      {/* Upper and left section */}

      <div className="flex justify-start xl:flex xl:justify-end px-32 -mt-24 mb-5">
        <h2 className="font-bold text-4xl">
          Unique and Authentic <br />
          Vintage Designer
          <br />
          Jewellery
        </h2>
      </div>
      <div className="flex flex-col xl:w-full xl:flex-row px-28 gap-10">
        <div className=" relative flex items-start gap-10 ">
          <h1 className="absolute inset-0 xl:flex text-gray-300 text-8xl xl:flex-col">
            <div className="xl:mb-4">Different </div>
            <div className="mb-4"> from </div>
            <div>Others</div>
          </h1>

          <div className="flex flex-col gap-20 z-10">
            <div>
              <h2 className="text-xl font-bold mb-3">
                Using Good Quality Materials
              </h2>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3">Modern Fashion Design</h2>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="flex flex-col gap-20 z-10">
            <div>
              <h2 className="text-xl font-bold  mb-3">
                100% Handmade Products
              </h2>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3">
                Discount for Bulk Orders
              </h2>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        {/* Bottom and Right Section  */}
        <div className="flex w-full xl:w-1/2">
          <Image src="/AllProductimage.webp" alt="image" width={300} height={300}/>
          <div className="mt-10">
            <p className="flex ml-5 mb-10 ">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>

            <button className="bg-gray-900 text-white ml-10 mt-10 px-6 py-3">
              See All Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
