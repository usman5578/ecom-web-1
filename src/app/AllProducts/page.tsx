import React from "react";
import { IProduct } from "../../Components/sanityImport/page";
import ProductCard from "@/Components/ProductCard";
import { allProductData } from "../../Components/sanityImport/page";



const AllProducts = async () => {
  const data: IProduct[] = await allProductData();

  return (
    <div>
         <ProductCard products={data} /> 
    </div>
  );
};

export default AllProducts;
