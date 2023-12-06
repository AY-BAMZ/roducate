import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/images/Logo.svg';
import User from '@/assets/images/user.png';
import Filter from '@/assets/images/vuesax/linear/filter.svg';
import { cn } from '@/lib';
import { IoHeart, IoNotifications, IoSearchOutline } from 'react-icons/io5';
import { IoMdSettings } from 'react-icons/io';
import { useRouter } from 'next/router';

function Header() {
    const router =useRouter()
    return (
        <div className="bg-white w-full border-b-[1px] px-5">
            <span className="max-w-[1200px] m-auto h-[124px] flex justify-between items-center">
                <Image
                    src={Logo}
                    alt=""
                    width={148}
                    height={44}
                    onClick={() => router.push("/")}
                    className={cn('lg:w-[148px] w-[148px] h-[48px]')}
                />
                <div className="lg:flex hidden rounded-full border h-[44px] px-5 items-center gap-2 min-w-[30%]">
                    <IoSearchOutline className="text-black-500 text-[24px]" />
                    <input
                        type="text"
                        placeholder="Search something here"
                        name=""
                        id=""
                        className="flex-grow border-none placeholder:text-black-500 bg-transparent"
                    />
                    <Image
                        src={Filter}
                        alt=""
                        width={22}
                        height={44}
                        className={cn('object-cover')}
                    />
                </div>
                <div className="lg:flex hidden gap-4">
                    <span className="w-[44px] h-[44px] rounded-full border flex justify-center items-center">
                        <IoHeart className="text-black-500 text-[24px]" />
                    </span>
                    <span className="w-[44px] h-[44px] rounded-full border flex justify-center items-center">
                        <IoNotifications className="text-black-500 text-[24px]" />
                    </span>
                    <span className="w-[44px] h-[44px] rounded-full border flex justify-center items-center">
                        <IoMdSettings className="text-black-500 text-[24px]" />
                    </span>
                    <Image
                        src={User}
                        alt=""
                        width={44}
                        height={44}
                        className={cn('object-cover')}
                    />
                </div>
                <Image
                    src={User}
                    alt=""
                    width={44}
                    height={44}
                    className={cn('lg:hidden flex')}
                />
            </span>
            <span className="flex lg:hidden gap-2 pb-6">
                <div className="lg:hidden flex rounded-xl border h-[44px] px-3 items-center gap-2 min-w-[30%] w-full">
                    <IoSearchOutline className="text-black-500 text-[24px]" />
                    <input
                        type="text"
                        placeholder="Search something here"
                        name=""
                        id=""
                        className="flex-grow border-none placeholder:text-black-500 bg-transparent"
                    />
                </div>
                <div className="lg:hidden flex rounded-xl border h-[44px] px-5 items-center gap-2">
                    <Image
                        src={Filter}
                        alt=""
                        width={22}
                        height={44}
                        className={cn('object-cover')}
                    />
                </div>
            </span>
        </div>
    );
}

export default Header;
