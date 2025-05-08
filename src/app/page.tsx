
import SortBySelect from "@/components/common/select";
import RangeCard from "@/components/product/rangeCard";
import testImage from '../../public/images/test.png';

import { Button } from "@/components/ui/button";
import Carousel from "@/components/common/carousel";
import HeroSlider from "@/components/home/section-One/component/HeroSlider";
import heroImage from '../../public/images/hero.jpg';
import hero1Image from '../../public/images/hero2.png';
import hero2Image from '../../public/images/hero3.png';
import ProductCard from "@/components/product/productCard";

const items = [
    <HeroSlider
      title="Where play & learning connect"
      subtitle="Award winning educational toy"
      description="Connetix inspires open-ended play and brings imagination to life. Unlock creativity and build BIGGER with strong magnets, vibrant colours and stunning clear refractions."
      buttonText="Shop Now"
      bgColorClass="bg-primary-tint"
      titleColorClass="text-navy"
      subtitleColorClass="text-primary"
      descriptionColorClass="text-navy"
      buttonColorClass="bg-primary"
      buttonHoverColorClass="hover:bg-primary-tint"
      image={heroImage}
      
      key={1}
    />,
    <HeroSlider
      title="Where play & learning connect"
      subtitle="Award winning educational toy"
      description="Connetix inspires open-ended play and brings imagination to life. Unlock creativity and build BIGGER with strong magnets, vibrant colours and stunning clear refractions."
      buttonText="Shop Now"
      bgColorClass="bg-secondary-tint"
      titleColorClass="text-navy"
      subtitleColorClass="text-primary"
      descriptionColorClass="text-navy"
      buttonColorClass="bg-primary"
      buttonHoverColorClass="hover:bg-primary-tint"
      image={hero1Image}
      key={2}
    />,
        <HeroSlider
      title="Where play & learning connect"
      subtitle="Award winning educational toy"
      description="Connetix inspires open-ended play and brings imagination to life. Unlock creativity and build BIGGER with strong magnets, vibrant colours and stunning clear refractions."
      buttonText="Shop Now"
      bgColorClass="bg-yellow-tint"
      titleColorClass="text-navy"
      subtitleColorClass="text-primary"
      descriptionColorClass="text-navy"
      buttonColorClass="bg-primary"
      buttonHoverColorClass="hover:bg-primary-tint"
      image={hero2Image}
      key={3}
    />,
]

const buttonColors = ['bg-primary-tint', 'bg-secondary-tint', 'bg-yellow-tint']
const buttonBorders = ['border-4 border-primary', 'border-4 border-secondary', 'border-4 border-yellow']

export default function Home() {
  return (
    <div className="m-5">
   <Carousel items={items} buttonColors={buttonColors} buttonBorderColors={buttonBorders} />
    <HeroSlider
      title="Where play & learning connect"
      subtitle="Award winning educational toy"
      description="Connetix inspires open-ended play and brings imagination to life. Unlock creativity and build BIGGER with strong magnets, vibrant colours and stunning clear refractions."
      buttonText="Shop Now"
      bgColorClass="bg-primary-light"
      titleColorClass="text-navy"
      subtitleColorClass="text-primary"
      descriptionColorClass="text-navy"
      buttonColorClass="bg-primary"
      buttonHoverColorClass="hover:bg-primary-tint"
      image={heroImage}
      key={1}
    />
   
        <Button variant={'primary'} >
      test
    </Button>
  <SortBySelect label="Sort by" options={['Price', 'Date', 'Rating']} />
  <div className=" scroll-auto flex p-10 gap-4 overflow-x-auto">
  <RangeCard
      image={testImage}
      title="Rainbow Tiles"
      description="Explore motion, gravity, cause & effect, plus so much more as you build and re-build your very own ball run designs!"
      buttonLabel="Shop range"
      diamondColor="bg-purple-100"
      diamondHoverColor="group-hover:bg-purple-900"
      buttonColor="bg-purple-300"
      buttonHoverColor="group-hover:bg-purple-400"
      buttonTextColor="text-purple-900"
    />

    <RangeCard
      image={testImage}
      title="Rainbow Tiles"
      description="Explore motion, gravity, cause & effect, plus so much more as you build and re-build your very own ball run designs!"
      buttonLabel="Shop range"
      diamondColor="bg-purple-100"
      diamondHoverColor="group-hover:bg-purple-900"
      buttonColor="bg-purple-300"
      buttonHoverColor="group-hover:bg-purple-400"
      buttonTextColor="text-purple-900"
    />

    <RangeCard
      image={testImage}
      title="Rainbow Tiles"
      description="Explore motion, gravity, cause & effect, plus so much more as you build and re-build your very own ball run designs!"
      buttonLabel="Shop range"
      diamondColor="bg-purple-100"
      diamondHoverColor="group-hover:bg-purple-900"
      buttonColor="bg-purple-300"
      buttonHoverColor="group-hover:bg-purple-400"
      buttonTextColor="text-purple-900"
    />

    <RangeCard
      image={testImage}
      title="Rainbow Tiles"
      description="Explore motion, gravity, cause & effect, plus so much more as you build and re-build your very own ball run designs!"
      buttonLabel="Shop range"
      diamondColor="bg-purple-100"
      diamondHoverColor="group-hover:bg-purple-900"
      buttonColor="bg-purple-300"
      buttonHoverColor="group-hover:bg-purple-400"
      buttonTextColor="text-purple-900"
    />
    </div>
 <ProductCard
        title="Rainbow Creative Pack 102 pc"
        price="$169.00 AU"
        imageUrl={testImage } // replace with actual image path
        isNew={true}
        reviews={143}
      />

    </div>
  );
}
