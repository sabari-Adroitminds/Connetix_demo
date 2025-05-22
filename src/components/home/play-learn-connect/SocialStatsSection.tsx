import IconFacebook from "@/components/icons/socialMedia/IconFacebook";
import IconInstagram from "@/components/icons/socialMedia/IconInstagram";
import IconPinterest from "@/components/icons/socialMedia/IconPintrest";
import IconTikTok from "@/components/icons/socialMedia/IconTiktok";


const SocialStatsSection = () => {
    return (
        <section className="py-8   bg-white flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Left Text Section */}
            <div className="text-center lg:text-left">
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-snug">
                    Play, learn, connect. <br />
                    The imagination is limitless.
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                    Real kids really love Connetix! Follow along on <span className="font-medium">#ConnetixTiles</span>
                </p>
            </div>

            {/* Social Stats Section */}
            <div className="grid grid-cols-2 gap-4">
                <SocialStat icon={<IconInstagram />} count="523 K" />
                <SocialStat icon={<IconPinterest  />} count="12.3 K" />
                <SocialStat icon={<IconFacebook  />} count="109 K" />
                <SocialStat icon={<IconTikTok  />} count="26.5 K" />
            </div>
        </section>
    );
};

type SocialStatProps = {
    icon: React.ReactNode;
    count: string;
};

const SocialStat = ({ icon, count }: SocialStatProps) => {
    return (
        <div className="flex items-center gap-2 px-4 py-2 max-w-[240px]  h-[78px] rounded-xl  bg-white">
            <div className="bg-purple-50 p-1.5 rounded-full">{icon}</div>
            <span className="font-medium text-gray-700">{count}</span>
        </div>
    );
};

export default SocialStatsSection;
