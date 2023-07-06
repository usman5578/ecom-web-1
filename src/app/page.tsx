import ProductListJh from "@/Components/ProductListJh";
import SingleProduct from "@/Components/SingleProduct";
import AllProducts from "@/ViewSection/AllProducts";
import Hero from "@/ViewSection/HeroSection";
import ProductCarousel from "@/ViewSection/ProductCarousel";
import Subscribe from "@/ViewSection/Subscribe";
import Promotions from "@/ViewSection/Promotions";
import Counter from "@/Components/Counter";



export default function Home() {
  return (
    <div>
      <Hero />
      <Promotions />
      <ProductCarousel/>
      <AllProducts />
      <Subscribe />
    </div>
  );
}
