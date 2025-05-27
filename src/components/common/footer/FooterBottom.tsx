// components/Footer/FooterBottom.tsx
import React from "react";
import SocialIcons from "./SocialIcons";


const FooterBottom: React.FC = () => {
    return (
        <div className=" flex max-w-[390px] flex-col ml-8 mt-10 lg:ml-0 text-sm text-gray-300">
            <div>
            <p className="font-semibold mb-3 text-white">Follow Connetix</p>
            <SocialIcons />
            </div>
            <div className="mb-4 md:mb-0 w-full mt-10">
                © 2025 Connetix PTY LTD |{" "}
                <a href="#" className="underline"> 
                    Privacy & Terms & Conditions
                </a>
            </div>
          
        </div>
    );
};

export default FooterBottom;
