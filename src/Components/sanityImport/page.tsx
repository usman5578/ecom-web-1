import { client } from "@/lib/sanityClient";
import {Image as IImage} from 'sanity'


export interface IProduct {
    price: string;
    _id: string;
    title: string;
    description: string;
    image: IImage;
    category: { name: string };
  }
  export const allProductData = async () => {
    const result = await client.fetch(`*[_type == "product"]{
          price,
          _id,
          title,
          description,
          image,
          category->{name},
        }`);
    return result;
  };

 export  const femaleProductData = async () => {
    const result =
      await client.fetch(`*[_type == "product" && category._ref == "ac27e3be-683d-4678-b400-973ef3f35819"]{
          price,
          _id,
          title,
          description,
          image,
          category->{name},
        }`);
    return result;
  };

export const MaleProductData = async () => {
    const result =
      await client.fetch(`*[_type == "product" && category._ref == "37fc4dde-b5f8-4b32-be0c-f1cbaa1874aa"]{
          price,
          _id,
          title,
          description,
          image,
          category->{name},
        }`);
    return result;
  };