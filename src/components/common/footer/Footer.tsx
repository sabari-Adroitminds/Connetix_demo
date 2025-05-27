// components/Footer/Footer.tsx
import React from "react";
import FooterTop from "./FooterTop";
import FooterSection from "./FooterSection";
import FooterBottom from "./FooterBottom";


const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-white relative overflow-hidden px-20 pt-5 rounded-t-[70px] ">
            <div className=" mx-auto px-6 py-10">
                <FooterTop />
                <div className="flex  flex-col md:flex-row justify-between items-start gap-5 mt-10">
                    <div className="grid grid-cols-2 xl:grid-cols-4 xl:gap-30 gap-15  text-sm mt-10">

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
            </div>


        </footer>
    );
};

export default Footer;
