import RangeCard from "@/components/cards/RangeCard";
import testImage from "../../public/images/test.png";

import HeroSlider from "@/components/home/section-One/component/HeroSlider";
import heroImage from "../../public/images/hero.jpg";
import hero1Image from "../../public/images/hero2.png";
import hero2Image from "../../public/images/hero3.png";
import AddOnCard from "@/components/cards/SmallAddOnCard";
// import ProductCard from "@/components/cards/productCard";
// import PageCard from "@/components/cards/pageCard";

import becomeImage1 from "../../public/images/become1.png";
import PortalLandscapeCard from "@/components/cards/PortalLandscapeCard";

import Slider from "@/components/common/Carousel/Slider";
import SliderItem from "@/components/common/Carousel/Slider/SliderItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselScrollbar,
} from "@/components/common/Carousel/CardSlider";
import TestimonialCard from "@/components/cards/TestimonialCard";
import BlogCard from "@/components/cards/BlogCard";
import ProductCard from "@/components/cards/ProductCard";
import PageCard from "@/components/cards/PageCard";

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
];

const buttonColors = ["bg-primary-tint", "bg-secondary-tint", "bg-yellow-tint"];
const buttonBorders = [
  "border-4 border-primary",
  "border-4 border-secondary",
  "border-4 border-yellow",
];

export default function Home() {
  const slides = Array.from({ length: 10 }, (_, i) => (
    <TestimonialCard
      key={`testimonial-${i}`}
      name="Wendy, T"
      location="United Kingdom"
      review="I love how educational they are too. We’ve been learning shapes and how to mix primary colours to make other colours. Instagram has also provided endless ideas of ways to play. Best money we ever spent on a toy."
      rating={5}
    />
  ));

  return (
    <div className="min-h-screen max-w-screen overflow-hidden p-6">
      {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}

      <Slider buttonColors={buttonColors} buttonBorderColors={buttonBorders}>
        {items.map((item, index) => (
          <SliderItem key={`slider-item-${index}`}>{item}</SliderItem>
        ))}
      </Slider>
      {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}

      <Carousel className="p-4">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>{slide}</CarouselItem>
          ))}
        </CarouselContent>
        <CarouselScrollbar />
      </Carousel>

      {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}
      {/* <HeroSlider
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
    /> */}

      <Carousel>
        <CarouselContent>
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
        </CarouselContent>
      </Carousel>

      <div className="flex gap-4">
        <ProductCard
          title="Rainbow Creative Pack 102 pc"
          price="$169.00 AU"
          imageUrl={testImage} // replace with actual image path
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
          imageUrl={testImage} // Make sure to add this image to the public folder
          author="Connetix"
        />
      </div>

      <AddOnCard
        imageSrc={testImage}
        title="Rainbow Ball Pack"
        quantity="12 pc"
        price="19.00"
      />
    </div>
  );
}
