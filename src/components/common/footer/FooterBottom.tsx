// components/Footer/FooterBottom.tsx
import React from "react";
import SocialIcons from "./SocialIcons";
import TermsAndCondition from "./TermsAndCondition";


const FooterBottom: React.FC = () => {
    return (
        <div className="hidden lg:flex max-w-[390px] flex-col ml-8 mt-10 lg:ml-0 text-sm text-gray-300">
            <div>
            <p className="font-semibold mb-3 text-white">Follow Connetix</p>
            <SocialIcons />
            </div>
            <TermsAndCondition />
          
        </div>
    );
};

export default FooterBottom  ;
