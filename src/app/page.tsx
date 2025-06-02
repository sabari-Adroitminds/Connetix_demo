

// import ProductCard from "@/components/common/cards/productCard";
// import PageCard from "@/components/common/cards/pageCard";

import { ImageSlider } from "@/components/home/imageSlider";
import { PlayLearnConnect } from "@/components/home/play-learn-connect";
import Products from "@/components/home/products";
import Testimonials from "@/components/home/testimonials";
import { Suspense } from "react";
export default function Home() {


  return (
    <div >
      <Suspense fallback={<p>Loading feed...</p>}>
      <ImageSlider/>
      </Suspense>
      <Suspense fallback={<p>Loading feed...</p>}>
      <Products/>
      </Suspense>
        <Suspense fallback={<p>Loading feed...</p>}>
      <Testimonials/>
      </Suspense>
          <Suspense fallback={<p>Loading feed...</p>}>
      <PlayLearnConnect />
      </Suspense>

    </div>
  );
}
