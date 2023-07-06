"use client";

import React from "react";
import { urlForImage } from "../../sanity/lib/image";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { IProduct, allProductData } from "@/Components/sanityImport/page";
import ProductCard from "@/Components/ProductCard";

const ProductCarousel = async () => {
  const data: IProduct[] = await allProductData();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 1100,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: false,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   // You can unslick at a given breakpoint now by adding:
    //   // settings: "unslick"
    //   // instead of a settings object
    // ],
  };

  return (
    // className="flex max-w-sm min-w-[24rem]"
    <div>
      <Slider {...settings}>
      {data.map((items:any) => (
    
    <div key={items._id}>
      <Link href={`products/${items._id}`}>
      <div>
      <Image

          src={urlForImage(items.image).url()}
          alt="product image"
          width={300}
          height={300}
        />
      </div>
      <div>{items.title}</div>
      <div>${items.price}</div>
        </Link>
    </div>))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
