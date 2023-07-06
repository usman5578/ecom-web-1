import React from "react";

const Subscribe = () => {
  return (
    <div className="mt-32 flex flex-col items-center justify-center p-32 relative">
        <div className="absolute inset-0 flex justify-center items-center text-[124px] text-gray-100 -z-10">Newsletter</div>
      <h2 className="text-4xl font-bold mb-8">Subscribe Our News Letter</h2>
      <p className="mb-5">Get the latest information and promo offers directly</p>
      <div>
        <input
          className="border border-gray-300 mt-6 mr-6 py-2 px-10"
          placeholder="Input Email Adress"
        />
        <button className="bg-black text-white py-2 px-3">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
