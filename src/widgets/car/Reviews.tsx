import Image from 'next/image';
import React from 'react';
import User from '@/assets/images/Ceklist.svg';
import { cn } from '@/lib';

function Reviews() {
    return (
        <div className="bg-white p-6 rounded-lg">
            <span className="flex gap-1 text-[20px]">
                Reviews{' '}
                <span className="w-9 h-7 flex justify-center items-center rounded-sm text-white bg-primary-default">
                    13
                </span>
            </span>
            <div className="flex">
                <Image
                    src={User}
                    alt=""
                    width={56}
                    height={56}
                    className={cn('')}
                />
                <span className="flex-grow"></span>
            </div>
        </div>
    );
}

export default Reviews;
