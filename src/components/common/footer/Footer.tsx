// components/Footer/Footer.tsx
import React from "react";
import FooterTop from "./FooterTop";
import FooterSection from "./FooterSection";
import FooterBottom from "./FooterBottom";
import Animation from "./Animation/Animation";
import { NavMenuAccordion } from "../nav-bar/mobile/AccordionComponent";
import TermsAndCondition from "./TermsAndCondition";
import TilePurpleSquareSmall from "../tiles/TilePurpleSquareSmall";
import TileYellowSquareSmall from "../tiles/TileYellowSquareSmall";


const Footer: React.FC = () => {
    return (
        <div className="relative ">
          <TilePurpleSquareSmall className="absolute z-100 top-5 lg:-top-10 -rotate-60 left-4 lg:left-10 "/>
            <TileYellowSquareSmall className="absolute z-100 right-2 lg:right-8 -top-5 lg:-top-20 -rotate-30 "/>
        <footer className="bg-primary text-white relative overflow-hidden px-1 lg:px-20 pt-5 mt-5 rounded-t-4xl lg:rounded-t-[70px] ">
          
            <div className=" mx-auto lg:px-6 py-10">
                <FooterTop />
                <div className="flex  flex-col md:flex-row justify-between items-center gap-5 mt-10">
                    <div className="hidden lg:grid grid-cols-2 xl:grid-cols-4 xl:gap-30 gap-15  text-sm mt-10">

                        <FooterSection
                            title="Shop"
                            items={[
                                "Rainbow Tiles",
                                "Pastel Tiles",
                                "Clear Tiles",
                                "Ball Runs",
                                "Roads & Transport",
                                "Base Plates",
                                "Last Chance",
                            ]}
                        />
                        <FooterSection
                            title="Play"
                            items={["Build Ideas", "Resources", "How To", "Educate", "Articles"]}
                        />



                        <FooterSection
                            title="Learn"
                            items={["Our Story", "Our Products", "FAQs", "In The News", "Giving Back"]}
                        />
                        <FooterSection
                            title="Connect"
                            items={[
                                "Become a retailer",
                                "Partner with us",
                                "Education",
                                "Support",
                                "Community",
                            ]}
                        />


                    </div>
                  
                    <FooterBottom />
                </div>
                <NavMenuAccordion borderColor="white/10" itemTextColor={'white/50'} iconColor="rgba(255, 255, 255, 0.5)" textColor="white" className="lg:hidden block w-[90%] px-2 md:max-w-[80%] mx-auto" />
                <TermsAndCondition className="lg:hidden text-[14px] text-white/70 w-[90%] px-2 md:max-w-[80%] mx-auto"/>
            </div>
            <Animation />

        </footer>
        </div>
    );
};

export default Footer;
