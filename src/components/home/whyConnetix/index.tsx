import BigBlueTile from "@/components/common/BigBlueTile";
import PreTitle from "@/components/common/PreTitle";
import IconBevel from "@/components/icons/whyConnetix/IconBevel";
import IconMagnet from "@/components/icons/whyConnetix/IconMagnet";
import IconRivets from "@/components/icons/whyConnetix/IconRivets";
import IconSafe from "@/components/icons/whyConnetix/IconSafe";
import React from "react";
import { motion } from "motion/react";
// import CardSlider from "./CardSlider";

const WhyConnetix = () => {
  const [rotateAngle, setRotateAngle] = React.useState<number>(0);

  const setAngle = (angle?: number) => {
    if (angle) {
      setRotateAngle(angle);
      return;
    }

    setRotateAngle(0);
  };
  return (
    <div className="px-5 lg:px-[100px] flex flex-col justify-center">
      <div className="flex flex-col items-center justify-center gap-5 mb-8">
        <PreTitle title="Why Connetix?" color="bg-primary" />
        <span className="text-[30px] md:text-[40px] lg:text-[60px] text-navy font-medium">
          Superior Quality & Safety
        </span>
      </div>

      <div className="flex items-center justify-center gap-10 mb-10 flex-wrap lg:flex-nowrap">
        <div className="flex max-w-[275px] flex-col h-[510px] justify-between">
          <motion.div
            onMouseEnter={() => setAngle(200)}
            onMouseLeave={() => setAngle()}
            initial={{ opacity: 0.3 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=" flex flex-col gap-[26px] hover:cursor-pointer"
          >
            <div className=" flex items-center gap-5">
              <IconMagnet />
              <h4 className="!font-bold">Strong Magnets</h4>
            </div>
            <p className="text-navy opacity-50 font-bold text-base">
              For bigger builds our tiles feature exceptionally strong magnets,
              ensuring a more secure hold compared to other tiles.
            </p>
          </motion.div>

          <motion.div
            onMouseEnter={() => setAngle(150)}
            onMouseLeave={() => setAngle()}
            initial={{ opacity: 0.3 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=" flex flex-col gap-[26px] hover:cursor-pointer"
          >
            <div className=" flex items-center gap-5">
              <IconRivets />
              <h4 className="!font-bold">Rivets for safety</h4>
            </div>
            <p className="text-navy opacity-50 font-bold text-base">
              Ultrasonic welding and metal rivets to make magnetic tile play
              safer for little hands.
            </p>
          </motion.div>
        </div>
        <div className="relative flex-1 flex items-center justify-center hover:cursor-grab">
          <BigBlueTile className="w-[300px] h-[300px] lg:w-[700px] lg:h-[700px]" rotateAngle={rotateAngle} />
        </div>

        <div className="max-w-[275px] flex flex-col h-[510px] justify-between">
          <motion.div
            onMouseEnter={() => setAngle(150)}
            onMouseLeave={() => setAngle()}
            initial={{ opacity: 0.3 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=" flex flex-col gap-[26px] hover:cursor-pointer"
          >
            <div className=" flex items-center gap-5">
              <IconBevel />
              <h4 className="!font-bold">Unique Bevel Design</h4>
            </div>
            <p className="text-navy opacity-50 font-bold text-base">
              Provides added durability and clearer tiles for beautiful light
              refractions.
            </p>
          </motion.div>

          <motion.div
            onMouseEnter={() => setAngle(300)}
            onMouseLeave={() => setAngle()}
            initial={{ opacity: 0.3 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=" flex flex-col gap-[26px] hover:cursor-pointer"
          >
            <div className=" flex items-center gap-5">
              <IconSafe />
              <h4 className="!font-bold">Safe for 3+</h4>
            </div>
            <p className="text-navy opacity-50 font-bold text-base">
              Made from non-toxic ABS plastic that is BPA, lead and Phthalate
              free.
            </p>
          </motion.div>
        </div>
      </div>

      <div>
        
      </div>

      {/* <CardSlider /> */}
    </div>
  );
};

export default WhyConnetix;
