"use client";
import React, { useState } from "react";
import logo from "../../public/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import HeaderLink from "./HeaderLink";
import Counter from "./Counter";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  return (
    // for Laptop Screen
    // Main Div
    <div className="flex justify-between py-10">
      {/* Logo  */}
      <div>
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
      </div>
      {/* Categories Links  */}
      <div>
      <ul className="hidden justify-around lg:flex lg:visible">
        <Link href='/FemaleProducts'>
          <HeaderLink catrgory="Female" />
        </Link>
        <Link href='/MaleProducts'>
          <HeaderLink catrgory="Male" />
        </Link>
        <Link href='./'>
          <HeaderLink catrgory="Kids" />
        </Link >
        <Link href='/AllProducts'>
          <HeaderLink catrgory="AllProducts" />
        </Link >
      </ul>
      </div>
      {/* Search Bar  */}
      <div>
      <input
        className="hidden border border-gray-200 px-2 lg:flex  lg:visible rounded-md lg:flex-grow"
        placeholder="What you are looking for"
        type="text"
        />
      </div>
      {/* cart  */}
      <div>
      <div className="hidden lg:visible lg:flex  bg-gray-300 w-10 h-10 rounded-full justify-center items-center hover:scale-125 duration-500 ">
        <ShoppingCart />
      </div>
      </div>
      {/* for Mobile Screen  */}
      <div
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <div className="lg:hidden">
          {toggle ? (
            <Menu className="lg:hidden" />
          ) : (
            <div>
              <X />
              <ul className=" fixed top-0 left-0 flex flex-col h-screen w-full justify-center items-center bg-white">
                {/* Cart  */}
                <div className="  bg-gray-300 w-10 h-10 rounded-full flex justify-center items-center hover:scale-125 duration-500 mb-10 -ml-5">
                  <ShoppingCart />
                </div>
                {/* categories  */}
                <li className="mb-10">
                  <HeaderLink catrgory="Female" />
                </li>
                <li className="mb-10">
                  <HeaderLink catrgory="Male" />
                </li>
                <li className="mb-10">
                  <HeaderLink catrgory="Kids" />
                </li>
                <li className="mb-10">
                  <HeaderLink catrgory="All Products" />
                </li>
              </ul>
              {/* search Bar  */}
              <input
                className=" hidden lg:visible border border-gray-200 px-2 lg:flex   rounded-md"
                placeholder="What you are looking for"
                type="text"
              />

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
