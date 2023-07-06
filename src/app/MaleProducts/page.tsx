import React from "react";
import { client } from "@/lib/sanityClient";
import { IProduct } from "../../Components/sanityImport/page";
import Image from "next/image";
import ProductCard from "@/Components/ProductCard";
import { MaleProductData } from "../../Components/sanityImport/page";

const MaleProducts = async () => {
  const data: IProduct[] = await MaleProductData();

  return (
    <div>
      <ProductCard products={data}/>
    </div>
  );
};

export default MaleProducts;
