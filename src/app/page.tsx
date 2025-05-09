
import RangeCard from "@/components/cards/rangeCard";
import testImage from '../../public/images/test.png';

import Carousel from "@/components/common/carousel";
import HeroSlider from "@/components/home/section-One/component/HeroSlider";
import heroImage from '../../public/images/hero.jpg';
import hero1Image from '../../public/images/hero2.png';
import hero2Image from '../../public/images/hero3.png';
import ProductCard from "@/components/cards/productCard";
import PageCard from "@/components/cards/pageCard";


import becomeImage1 from '../../public/images/become1.png';
import PortalLandscapeCard from "@/components/cards/PortalLandscapeCard";
import { BlogCard } from "@/components/cards/BlogCard";
const itemImages=[heroImage, hero1Image, hero2Image]
const items = [
    <HeroSlider
      title="Where play & learning connect"
      descriptionForSmallScreens="Connetix inspires open-ended play and brings imagination to life."

      subtitle="Award winning educational toy"
      description="Connetix inspires open-ended play and brings imagination to life. Unlock creativity and build BIGGER with strong magnets, vibrant colours and stunning clear refractions."
      buttonText="Shop Now"
      bgColorClass="bg-primary-tint"
      titleColorClass="text-navy"
      subtitleColorClass="text-primary"
      descriptionColorClass="text-navy"
      buttonColorClass="primary"
      buttonHoverColorClass="hover:bg-primary-tint"
      image={heroImage}
      
      key={1}
    />,
    <HeroSlider
      title="Where play & learning connect"
      subtitle="Award winning educational toy"
      descriptionForSmallScreens="Connetix inspires open-ended play and brings imagination to life."

      description="Connetix inspires open-ended play and brings imagination to life. Unlock creativity and build BIGGER with strong magnets, vibrant colours and stunning clear refractions."
      buttonText="Shop Now"
      bgColorClass="bg-secondary-tint"
      titleColorClass="text-navy"
      subtitleColorClass="text-primary"
      descriptionColorClass="text-navy"
      buttonColorClass="secondary"
      buttonHoverColorClass="hover:bg-primary-tint"
      image={hero1Image}
      key={2}
    />,
        <HeroSlider
      title="Where play & learning connect"
      subtitle="Award winning educational toy"
      descriptionForSmallScreens="Connetix inspires open-ended play and brings imagination to life."

      description="Connetix inspires open-ended play and brings imagination to life. Unlock creativity and build BIGGER with strong magnets, vibrant colours and stunning clear refractions."
      buttonText="Shop Now"
      bgColorClass="bg-yellow-tint"
      titleColorClass="text-navy"
      subtitleColorClass="text-primary"
      descriptionColorClass="text-navy"
      buttonColorClass="yellow"
      buttonHoverColorClass="hover:bg-primary-tint"
      image={hero2Image}
      key={3}
    />,
]

const buttonColors = ['bg-primary-tint', 'bg-secondary-tint', 'bg-yellow-tint']
const buttonBorders = ['border-4 border-primary', 'border-4 border-secondary', 'border-4 border-yellow']

export default function Home() {
  return (
    <div className="">


   <Carousel itemImages={itemImages} items={items} buttonColors={buttonColors} buttonBorderColors={buttonBorders} />
    <HeroSlider
      title="Where play & learning connect"
      subtitle="Award winning educational toy"
      description="Connetix inspires open-ended play and brings imagination to life. Unlock creativity and build BIGGER with strong magnets, vibrant colours and stunning clear refractions."
      descriptionForSmallScreens="Connetix inspires open-ended play and brings imagination to life."
      buttonText="Shop Now"
      bgColorClass="bg-primary-light"
      titleColorClass="text-navy"
      subtitleColorClass="text-primary"
      descriptionColorClass="text-navy"
      buttonColorClass="primaryLight"
      buttonHoverColorClass="hover:bg-primary-tint"
      image={heroImage}
      key={1}
    />


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

<div className="flex gap-4">
     <ProductCard
        title="Rainbow Creative Pack 102 pc"
        price="$169.00 AU"
        imageUrl={testImage } // replace with actual image path
        isNew={true}
        reviews={143}
      />
        <ProductCard
        title="Rainbow Creative Pack 102 pc"
        price="$169.00 AU"
        imageUrl={testImage } // replace with actual image path
        isNew={true}
        reviews={143}
      />
      </div>



      <div className="flex gap-4">
       <PageCard
        title="Our Story"
        description="Become a Connetix Reseller Today! Join the Play, Learn, Connect Revolution"
        buttonText="Become a reseller"
        imageUrl={becomeImage1} // Replace with actual image path in `public/`
      />
   
    </div>

      <main className="flex justify-center items-center p-4">
      <PortalLandscapeCard
        title="Update Payment Details"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        buttonText="Update details"
        imageSrc={testImage} // Replace with your actual image path
      />
    </main>

         <div className="p-4">
      <BlogCard
        title="Inspiring Creativity in a Happy Play Room"
        category="Building Ideas"
        date="Nov 24"
        imageUrl={testImage}// Make sure to add this image to the public folder
        author="Connetix"
      />
    </div>
{/*    
        <Button variant={'primary'} >
      test
    </Button>
  <SortBySelect label="Sort by" options={['Price', 'Date', 'Rating']} />
  






   



 
<AddOnCard
  imageSrc={testImage}
  title="Rainbow Ball Pack"
  quantity="12 pc"
  price="19.00"
/> */}

    </div>
  );
}
