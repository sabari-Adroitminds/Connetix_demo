

// import ProductCard from "@/components/common/cards/productCard";
// import PageCard from "@/components/common/cards/pageCard";




import { ImageSlider } from "@/components/home/ImageSlider";

import Products from "@/components/home/Products";
import Testimonials from "@/components/home/Testimonials";





export default function Home() {


  return (
    <div >
      <ImageSlider/>
      <Products/>
      <Testimonials/>
    </div>
  );
}
