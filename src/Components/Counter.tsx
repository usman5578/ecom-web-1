"use client";
import { useState } from "react";
import { useCookies } from "react-cookie";

export default function Counter({price}:{price:string}) {
  const [qty, setQty] = useState(1);
  
  const [cookies, setCookie] = useCookies(['qty']);
  const addingQty= () => {
    setCookie('qty', qty)}

  return (
    <div className="flex gap-1 justify-start items-center">
      <div className="font-bold  py-6 pr-8">Quantity:</div>
      <button
        onClick={qty <= 1 ? () => setQty(1) : () => setQty(qty - 1)}
        className=" rounded-full h-10 w-10 flex justify-center items-center border-2 bg-gray-300 hover:shadow-xl text-lg font-bold"
      >
        -
      </button>
      <div className="  flex justify-center text-sm md:text-lg py-2 px-1 md:px-2 h-10">
        {qty}
      </div>
      {/* Qty plus and minus ammount */}
      <button
        onClick={qty >= 99 ? () => setQty(qty) : () => setQty(qty + 1)}
        className="rounded-full h-10 w-10 flex justify-center items-center border-2 border-gray-800 bg-white hover:shadow-xl text-lg font-bold"
      >
        +
      </button>
      <br />
      <div className="flex items-center mt-10">
                <button onClick={addingQty} className=" bg-black text-white px-8 py-4 font-bold items-center">
                  Add to Cart
                </button  >
                <div className="text-4xl">${price}</div>
              </div>
              <div>{qty}</div>
    </div>
  );
}
