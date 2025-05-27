// components/Footer/FooterTop.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import logo from '../../../../public/images/Logo-text-white.svg'
const FooterTop: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center">
            <Image src={logo} alt="Logo" className='h-[28px] w-[170px] lg:h-[83px] lg:w-[280px]' />

            <div className="text-center text-[18px] mt-4 md:mt-0 text-white">
                Where Play & Learning Connect
            </div>

            <div className="mt-4 md:mt-0 flex gap-6 justify-center items-center  xl:flex-row flex-col">
                <p className="text-[18px]">Join the Connectix Club</p>
                <Button className="bg-white w-[150px]">
                    Label
                </Button>
            </div>
        </div>
    );
};

export default FooterTop;
