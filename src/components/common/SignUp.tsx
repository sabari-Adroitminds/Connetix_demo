"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = () => {
    console.log("Submitted:", { data });
  };

  return (
    <div className="w-full min-h-[199px] bg-teal rounded-xl p-4 md:p-6 lg:p-8 flex flex-col  items-center justify-center">
      <div className="  flex flex-col flex-wrap md:flex-row items-center justify-center gap-6 w-fit">
        {/* Left side - Text */}
        <div className="w-full md:w-1/2 lg:w-5/12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-[#27344F] leading-tight">
            Sign up to The Connetix Club for exclusives, giveaways & free
            resources!
          </h2>
        </div>

        <div className="w-full md:w-1/2  flex flex-wrap lg:w-6/12">
          <div className="flex flex-col lg:flex-row gap-3 w-full">
              <div className="w-full min-w-[300px] md:w-[360px] max-w-[360px] bg-white rounded-full p-2">
                <input
                  type="text"
                  placeholder="Name"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  className="w-full h-12 px-4 rounded-full border-none focus:outline-none"
                />
              </div>

            <div className="w-full md:w-fit">
              <div className="flex w-full min-w-[300px] max-w-[360px] bg-white rounded-full p-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  className="flex-1 h-12 px-4 rounded-full border-none focus:outline-none "
                />
                <Button onClick={handleSubmit} className="bg-teal text-white hover:bg-teal/80">
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
