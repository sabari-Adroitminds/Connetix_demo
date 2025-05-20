// components/TileCard.tsx
import Image, { StaticImageData } from 'next/image';

interface TileCardProps {
    title: string;
    imageSrc: string | StaticImageData;
}

const NavTileCard: React.FC<TileCardProps> = ({ title, imageSrc }) => {    
    return (
        <div className='m-4'>
            <Image
                src={imageSrc}
                alt={title}
               
                className="object-cover  w-[254px] h-[198px] rounded-lg "
            />
            <div className="text-start text-sm font-medium mt-1">{title}</div>
        </div>
    );
}
export default NavTileCard;