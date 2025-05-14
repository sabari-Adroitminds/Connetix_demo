"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = () => {
    console.log("Submitted:", { data });
  };

  return (
    <div className="w-full min-h-[199px] bg-teal rounded-xl p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Left side - Text */}
        <div className="w-full lg:w-5/12 mb-4 lg:mb-0">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-[#27344F] leading-tight text-center lg:text-left">
            Sign up to The Connetix Club for exclusives, giveaways & free
            resources!
          </h2>
        </div>

        {/* Right side - Form */}
        <div className="w-full lg:w-7/12">
          <div className="flex flex-col md:flex-row gap-3 w-full justify-center lg:justify-end flex-wrap">
            {/* Name input */}
            <div className="w-full md:max-w-[352px] bg-white rounded-full p-2">
              <input
                type="text"
                placeholder="Name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                className="w-full h-12 px-4 rounded-full border-none focus:outline-none"
              />
            </div>

            {/* Email input with button */}
            <div >
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
      </div>
    </div>
  );
};

export default SignUp;