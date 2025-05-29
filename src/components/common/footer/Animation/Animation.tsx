'use client'
import { useRef } from "react";
import Building from "./Building"
import { useInView } from "motion/react";
import MainBlock from "./MainBlock";
import MiniBlock from "./MiniBlock";
import MiniBlockTwo from "./MiniBlockTwo";

const Animation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "some", once: true });
  return (
    <section ref={ref} className='h-[423px]  w-full flex justify-center items-end '>
      {isInView && <>
        <Building />
        <MiniBlock/>
        <Building />
        <MiniBlockTwo />
        <MainBlock className="hidden lg:flex"/>
        <MiniBlock className="hidden lg:flex" />
        <Building className="hidden lg:flex" />
        <MiniBlockTwo className="hidden lg:flex" />
        <Building />
      </>}
        
           

    </section>
  )
}

export default Animation