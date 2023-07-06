"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import Link from "next/link";
import Counter from "@/Components/Counter";
import { IProduct, allProductData } from "@/Components/sanityImport/page";


export default async function page({ params }:{ params: { _id: string } }) {
  const result: IProduct[] = await allProductData();
  // useContext(cartContext)
 
  return (
    
    <div>
      This is product id for {params._id}
      {result.map((product) =>
        product._id == params._id ? (
          <div
            key={product._id}
            className="flex justify-around bg-gray-50 -mx-28"
          >
            <Image
              className="mx-64 my-20"
              src={urlForImage(product.image).url()}
              alt="product image"
              width={700}
              height={600}
            />
            <div className="flex flex-col my-20 w-1/3">
              <div>
                <div className=" font-serif text-4xl">
                  {product.description}
                </div>
                <div className="text-gray-400">{product.title}</div>
              </div>
              <div>
                <div className="text-black">Select Sizes</div>
                <div className="flex flex-row justify-around">
                  <div className="px-4 py-4 border bg-red-300 rounded-full ">
                    <Link href={"#"}>XS</Link>
                  </div>
                  <div className="px-6 py-4 border bg-red-300 rounded-full ">
                    <Link href={"#"}>S</Link>
                  </div>
                  <div className="px-5 py-4 border bg-red-300 rounded-full ">
                    <Link href={"#"}>M</Link>
                  </div>
                  <div className="px-6 py-4 border bg-red-300 rounded-full ">
                    <Link href={"#"}>L</Link>
                  </div>
                  <div className="px-4 py-4 border bg-red-300 rounded-full ">
                    <Link href={"#"}>XL</Link>
                  </div>
                </div>
              </div>
              <br />
              <div className="flex space-x-7">
                <br />
                <Counter price={product.price}/>
              </div>
              {/* <div className="flex items-center mt-10">
                <button className=" bg-black text-white px-8 py-4 font-bold items-center">
                  Add to Cart
                </button>
                <div className="text-4xl">${product.price}</div>
              </div> */}
            </div>
          </div>
        ) : null
      )}
    </div>
    
  );
}
