import { cn } from '@/lib';
import Image from 'next/image';
import React, { FC } from 'react';
import Radio from '@/assets/images/radio.svg';
import RadioTwo from '@/assets/images/radio2.svg';

interface SortProps {
    dropOff: boolean;
}

const Sort: FC<SortProps> = ({ dropOff }) => {
    return (
        <div className="bg-white p-5 rounded-xl flex gap-3 flex-col w-full">
            <span className="flex gap-2 items-center">
                <Image
                    src={dropOff ? Radio : RadioTwo}
                    alt=""
                    width={16}
                    height={16}
                    className={cn('')}
                />
                {dropOff ? 'Drop - Off' : 'Pick-Up'}
            </span>
            <span className="flex justify-between">
                <span className="flex flex-col gap-2 border-r-[1px] pr-2">
                    <p className="text-[16px] text-black-1000 max-w-[100px] pl-[4px]">
                        Location
                    </p>
                    <select
                        name=""
                        id=""
                        className="flex-grow border-none placeholder:text-black-500 text-black-400 bg-transparent text-[12px] outline-none"
                    >
                        <option className="text-black-500" value="">
                            Select your city
                        </option>
                    </select>
                </span>
                <span className="flex flex-col gap-2 border-r-[1px] pr-2">
                    <p className="text-[16px] text-black-1000 max-w-[100px] pl-[4px]">
                        Date
                    </p>
                    <select
                        name=""
                        id=""
                        className="flex-grow border-none placeholder:text-black-500 text-black-400 bg-transparent text-[12px] outline-none"
                    >
                        <option className="text-black-500" value="">
                            Select your date
                        </option>
                    </select>
                </span>
                <span className="flex flex-col gap-2 pr-2">
                    <p className="text-[16px] text-black-1000 max-w-[100px] pl-[4px]">
                        Time
                    </p>
                    <select
                        name=""
                        id=""
                        className="flex-grow border-none placeholder:text-black-500 text-black-400 bg-transparent text-[12px] outline-none"
                    >
                        <option className="text-black-500" value="">
                            Select your time
                        </option>
                    </select>
                </span>
            </span>
        </div>
    );
};

export default Sort;
