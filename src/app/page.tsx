

// import ProductCard from "@/components/common/cards/productCard";
// import PageCard from "@/components/common/cards/pageCard";

import { ImageSlider } from "@/components/home/imageSlider";
import { PlayLearnConnect } from "@/components/home/play-learn-connect";
import Products from "@/components/home/products";
import Testimonials from "@/components/home/testimonials";



export default function Home() {


  return (
    <div >
      <ImageSlider/>
      <Products/>
      <Testimonials/>
      <PlayLearnConnect />

    </div>
  );
}
