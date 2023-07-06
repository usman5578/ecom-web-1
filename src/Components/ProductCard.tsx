import React from "react";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import Link from "next/link";

const ProductCard = async ({ products }: any) => {

  return (
    <div className="flex flex-wrap gap-10">
      {products.map((items:any) => (
    
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
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
