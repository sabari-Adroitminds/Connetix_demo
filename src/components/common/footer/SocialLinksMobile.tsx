import IconFacebook from "@/components/icons/socialMedia/IconFacebook";
import IconInstagram from "@/components/icons/socialMedia/IconInstagram";
import IconLinkedin from "@/components/icons/socialMedia/IconLinkedIn";
import IconPinterest from "@/components/icons/socialMedia/IconPintrest";
import IconTikTok from "@/components/icons/socialMedia/IconTiktok";
import IconYoutube from "@/components/icons/socialMedia/IconYoutube";
import React from "react";


const SocialLinks: React.FC = () => {
    const links = [
        { name: "Youtube", icon: <IconYoutube className="hover:text-white cursor-pointer w-[40px] h-[40px]" />, href: "#" },
        { name: "Instagram", icon: <IconInstagram pathFill="white" rectFill="#A6D8F61A" className="hover:text-white cursor-pointer w-[40px] h-[40px]" />, href: "#" },
        { name: "Facebook", icon: <IconFacebook pathFill="white" rectFill="#A6D8F61A" className="hover:text-white cursor-pointer  w-[40px] h-[40px]" />, href: "#" },
        { name: "LinkedIn", icon: <IconLinkedin className="hover:text-white cursor-pointer w-[40px] h-[40px]" />, href: "#" },
        { name: "Tik Tok", icon: <IconTikTok pathFill="white" rectFill="#A6D8F61A" className="hover:text-white cursor-pointer  w-[40px] h-[40px]" />, href: "#" },
        { name: "Pinterest", icon: <IconPinterest pathFill="white" rectFill="#A6D8F61A" className="hover:text-white cursor-pointer  w-[40px] h-[40px]" />, href: "#" },
    ];

    return (
        <div className=" lg:hidden p-6 rounded-lg w-full max-w-md text-white font-medium">
            <div className="w-full h-[50px] flex justify-center gap-4 items-center bg-white/10 p-2 px-4 rounded-full text-sm mb-6">
                <span>Join the Connetix Club</span>
                <a href="#" className="text-yellow-400 font-semibold">
                    Join Now
                </a>
            </div>

            <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
                {links.map((link) => (
                    <div key={link.name} className="border-b border-white/10 pb-2">
                    <a
                       
                        href={link.href}
                        className="flex items-center gap-3 hover:text-yellow-300 transition-colors"
                    >
                        <span className="text-lg">{link.icon}</span>
                        {link.name}
                    </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SocialLinks;
