'use client';
import { Button } from '@/components/ui/button';
import React from 'react';

type PromoCardProps = {
    imageUrl: string;
    headline: string;
    buttonText: string;
    onButtonClick?: () => void;
};

const PromoCard: React.FC<PromoCardProps> = ({
    imageUrl,
    headline,
    buttonText,
    onButtonClick,
}) => {
    return (
        <div
            className="relative rounded-xl overflow-hidden md:w-full w-[366px] h-[424px] md:max-w-[496px] md:h-[530px] shadow-md"
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-6 flex flex-col justify-end">
                <p className="text-white text-[34px] font-[400] mb-4">{headline}</p>
                <Button
                    onClick={onButtonClick}
                    className="max-w-[248px] border-0 bg-primary-tint text-navy  rounded-full text-[18px] font-medium hover:bg-purple-200 transition"
                >
                    {buttonText}
                </Button>
            </div>
        </div>
    );
};

export default PromoCard;
