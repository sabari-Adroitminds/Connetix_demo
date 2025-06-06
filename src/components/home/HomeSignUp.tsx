import { useState } from "react";
import PreTitle from "../common/PreTitle";
import { Button } from "../ui/button";
import Worm from "../common/Worm";
import YellowTriangle from "../common/tiles/YellowTriangle";
import Graphic from "../common/Graphic";

const HomeSignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = () => {
    console.log("Submitted:", { data });
  };
  return (
    <div className="relative w-full min-h-[199px] lg:min-h-[748px] bg-teal rounded-[71px] p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center">
      <div className="w-full flex flex-col flex-wrap lg:flex-row items-center justify-between [@media_(min-width:1024px)_and_(max-width:1582px)]:px-[50px] lg:px-[100px] gap-6">
        {/* Left side - Text */}
        <div className="w-full min-[1022px]:w-[50%] min-[1582px]:max-w-[674px] mb-4 lg:mb-0">
          <div className="flex flex-col items-center lg:items-start">
            <PreTitle className="w-fit" title="Sign up The Connetix Club" color="bg-white" />
            <h1 className="text-xl md:text-2xl lg:!text-[50px] font-medium text-[#27344F] !leading-[40px] lg:!leading-[60px] text-center lg:text-left mt-5">
              Sign up for exclusives, giveaways & free resources!
            </h1>
            <p className="hidden lg:block mt-[30px] !text-base !font-light text-navy opacity-80">
              Connetix Club gives you access to exclusive updates on our
              products and giveaways, as well as learning resources, play ideas,
              and special offers.{" "}
              <a href="#" className="underline">
                Find our more.
              </a>
            </p>
            <div className="w-full flex flex-col items-center [@media_(min-width:938px)_and_(max-width:1582px)]:items-start [@media_(min-width:1024px)_and_(max-width:1512px)]:flex-col lg:flex-row gap-[14px] mt-[60px] ">
              <div className="w-full md:max-w-[352px] lg:min-w-[300px] bg-white rounded-full p-2 h-[56px]">
                <input
                  type="text"
                  placeholder="Name"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  className="w-full h-full  px-4 rounded-full border-none focus:outline-none placeholder:text-navy"
                />
              </div>

                <div className="flex items-center [@media_(min-width:938px)_and_(max-width:1512px)]:justify-between w-full bg-white rounded-full pr-3 [@media_(min-width:938px)_and_(max-width:1582px)]:pr-2 lg:pr-8 py-2 pl-2 md:max-w-[352px]  lg:min-w-[300px] h-[56px]">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  className="h-full pl-4 rounded-full border-none focus:outline-none flex placeholder:text-navy"
                />
                <Button
                  onClick={handleSubmit}
                  className="bg-teal hidden lg:block  hover:bg-teal/80 w-[91px] h-10 flex-shrink-0"
                >
                  Sign up
                </Button>
                </div>
                <Button
                  onClick={handleSubmit}
                  className="w-full bg-teal border-teal block lg:hidden md:max-w-[352px] border-none hover:bg-teal/80 flex-shrink-0 shadow"
                >
                  Sign up
                </Button>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center h-full">
          <Worm 
            className="w-[250px] h-[288px] lg:w-fit lg:h-[651px] [@media_(min-width:1024px)_and_(max-width:1582px)]:w-[350px] [@media_(min-width:1024px)_and_(max-width:1582px)]:h-[500px]"
          />
        </div>
      </div>
          <YellowTriangle className="hidden lg:block absolute top-0 right-1/12"/>
          <Graphic className="absolute bottom-0 right-0 lg:top-0 lg:right-0 lg:h-full rotate-[265deg] hidden lg:block" />
    </div>
  );
};

export default HomeSignUp;
