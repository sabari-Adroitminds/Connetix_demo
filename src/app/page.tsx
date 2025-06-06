import EducationalToy from "@/components/common/EducationalToy";
import AwardWinning from "@/components/home/awards";
import { ImageSlider } from "@/components/home/imageSlider";
import { PlayLearnConnect } from "@/components/home/play-learn-connect";
import Products from "@/components/home/products";
import Testimonials from "@/components/home/testimonials";
import WhyConnetix from "@/components/home/whyConnetix";
import { Suspense } from "react";

export default function Home() {


  return (
    <div >
      <ImageSlider/>
      <Suspense fallback={<p>Loading feed...</p>}>
      <Products/>
      </Suspense>
      <Suspense fallback={<p>Loading feed...</p>}>
        <AwardWinning />
      </Suspense>
      <Suspense fallback={<p>Loading feed...</p>}>
      <EducationalToy />
      </Suspense>
          <Suspense fallback={<p>Loading feed...</p>}>
      <WhyConnetix />
          </Suspense>
          <Suspense fallback={<p>Loading feed...</p>}>
      <PlayLearnConnect />
      </Suspense>
      <Suspense fallback={<p>Loading feed...</p>}>
        <Testimonials />
      </Suspense>
    </div>
  );
}
