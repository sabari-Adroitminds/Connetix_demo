import { useState } from "react";
import PreTitle from "../common/PreTitle";
import { Button } from "../ui/button";
import Worm from "../common/Worm";
import YellowTriangle from "../common/tiles/YellowTriangle";

const HomeSignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = () => {
    console.log("Submitted:", { data });
  };
  return (
    <div className="relative w-full min-h-[199px] bg-teal rounded-xl p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Left side - Text */}
        <div className="w-full max-w-[674px] mb-4 lg:mb-0">
          <div>
            <PreTitle title="Sign up The Connetix Club" color="white" />
            <h1 className="text-xl md:text-2xl lg:!text-[50px] font-medium text-[#27344F] !leading-[60px] text-center lg:text-left mt-5">
              Sign up for exclusives, giveaways & free resources!
            </h1>
            <h6 className="mt-[30px]">
              Connetix Club gives you access to exclusive updates on our
              products and giveaways, as well as learning resources, play ideas,
              and special offers.{" "}
              <a href="#" className="underline">
                Find our more.
              </a>
            </h6>
            <div className="flex gap-[14px] mt-[60px]">
              <div className="w-full md:max-w-[352px] bg-white rounded-full p-2">
                <input
                  type="text"
                  placeholder="Name"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  className="w-full  h-12 px-4 rounded-full border-none focus:outline-none"
                />
              </div>

              <div className="flex w-full bg-white rounded-full p-2 md:max-w-[352px]">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  className="flex-1 h-12 px-4 rounded-full border-none focus:outline-none"
                />
                <Button
                  onClick={handleSubmit}
                  className="bg-teal text-white hover:bg-teal/80"
                >
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Worm />
        </div>
      </div>
      <YellowTriangle className="absolute top-0 right-1/12"/>
    </div>
  );
};

export default HomeSignUp;
