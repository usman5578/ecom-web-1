import React from "react";
import { femaleProductData } from "../../Components/sanityImport/page";
import { IProduct } from "../../Components/sanityImport/page";
import ProductCard from "@/Components/ProductCard";


const FemaleProducts = async () => {
const data: IProduct[] = await femaleProductData();

  return (
    <div>
     <ProductCard products={data}/>
    </div>
  );
};

export default FemaleProducts;
