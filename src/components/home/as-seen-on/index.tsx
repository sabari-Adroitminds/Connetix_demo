import React from 'react';
import Image from 'next/image';

const logos = [1, 2, 3, 4, 5]; // Your actual logo numbers (don't duplicate here)

const AsSeenOn = () => {
  // We'll duplicate the logos array multiple times to ensure smooth looping
  // This helps prevent any visible gap during the animation reset
  const marqueeLogos = window.innerWidth > 1024 ? [...logos, ...logos, ...logos, ...logos] : logos;

  return (
    <div className='w-full flex flex-col items-center justify-center mt-20 mb-40 px-[17.5px] lg:px-[170px]'>
      <h3 className="text-xl font-medium text-navy text-center">As seen on</h3>
      
      {/* Marquee Container */}
      <div className="w-full overflow-hidden relative mt-[15px]">
        {/* Marquee Content */}
        <div className="flex animate-marquee whitespace-nowrap">
          {marqueeLogos.map((num, index) => (
            <div key={`marquee-${num}-${index}`} className="mx-4 inline-block">
              <Image
                src={`/images/asseenon/${num}.png`}
                alt={`As seen on logo ${num}`}
                className="w-[83px] h-[50px] object-contain grayscale opacity-55 hover:opacity-100 transition-opacity duration-300 ml-[37px] lg:ml-[112px]"
                width={120}
                height={60}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: inline-block;
          white-space: nowrap;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default AsSeenOn;