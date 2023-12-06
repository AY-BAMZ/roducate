import { cn } from '@/lib';
import Image from 'next/image';
import React from 'react';

interface BannerProps {
    index: number;
    banner: any;
}
function CarDetailBanner({ index, banner }: BannerProps) {
    return (
        <div
            className={cn(
                'rounded-[12px] p-6 text-white flex flex-col gap-5 banner-style w-full min-h-[200px] relative',
                { 'banner-style-two': index % 2 === 0 }
            )}
        >
            <span>
                <h3 className="text-[32px] max-w-[372px]">{banner.title}</h3>
                <h6 className="text-[16px] max-w-[372px]">{banner.title}</h6>
            </span>
            <span className="w-full flex justify-center">
                <Image
                    src={banner.image}
                    alt=""
                    width={406}
                    height={116}
                    className={cn(
                        'object-cover py-[24px] lg:w-[406px] w-[240px]'
                    )}
                />
            </span>
        </div>
    );
}

export default CarDetailBanner;
