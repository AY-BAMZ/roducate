import Image from 'next/image';
import React from 'react';
import User from '@/assets/images/user.png';
import { cn } from '@/lib';
import { MdOutlineStar, MdOutlineStarBorder } from 'react-icons/md';

function Reviews() {
    return (
        <div className="bg-white p-6 rounded-lg">
            <span className="flex gap-1 text-[20px]">
                Reviews{' '}
                <span className="w-9 h-7 flex justify-center items-center rounded-sm text-white bg-primary-default">
                    13
                </span>
            </span>
            {[1,2].map((data, index)=>(<div className="flex gap-4 my-6" key={index}>
                <Image
                    src={User}
                    alt=""
                    width={56}
                    height={56}
                    className={cn('min-w-[60px] max-h-[60px]')}
                />
                <span className="flex-grow">
                    <div className='flex flex-col gap-4'>
                        <span className="flex justify-between">
                            <span>
                                <h4 className="text-black-1000 text-[20px] font-bold">
                                    Alex Stanton
                                </h4>
                                <p className="text-black-400 text-[14px] font-light">
                                    CEO at Bukalapak
                                </p>
                            </span>
                            <span className="text-right">
                                <p className="text-black-400 text-[14px] font-light">
                                    21 July 2022
                                </p>
                                <span className="flex gap-1">
                                    <MdOutlineStar className="text-secondary-default text-[20px]" />
                                    <MdOutlineStar className="text-secondary-default text-[20px]" />
                                    <MdOutlineStar className="text-secondary-default text-[20px]" />
                                    <MdOutlineStar className="text-secondary-default text-[20px]" />
                                    <MdOutlineStarBorder className="text-black-500 text-[20px]" />
                                </span>
                            </span>
                        </span>
                        <p className="text-black-400 text-[14px] font-light max-w-[80%]">
                            We are very happy with the service from the MORENT
                            App. Morent has a low price and also a large variety
                            of cars with good and comfortable facilities. In
                            addition, the service provided by the officers is
                            also very friendly and very polite.
                        </p>
                    </div>
                </span>
            </div>))}
        </div>
    );
}

export default Reviews;
