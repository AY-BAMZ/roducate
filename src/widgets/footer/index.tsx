import Logo from '@/assets/images/Logo.svg';
import { cn } from '@/lib';
import Image from 'next/image';
import React from 'react';

function Footer() {
    const footerData = {
        logo: Logo,
        about: 'Our vision is to provide convenience and help increase your sales business.',
        links: [
            {
                title: 'About',
                links: [
                    'How it works',
                    'Featured',
                    'Partnership',
                    'Bussiness Relation',
                ],
            },
            {
                title: 'Community',
                links: ['Events', 'Blog', 'Podcast', 'Invite a friend'],
            },
            {
                title: 'Socials',
                links: ['Discord', 'Instagram', 'Twitter', 'Facebook'],
            },
        ],
    };
    return (
        <div className="bg-white pt-[80px] px-5">
            <div className="max-w-[1200px] m-auto grid grid-cols-6 lg:gap-8 gap-12">
                <div className="lg:col-span-3 col-span-6">
                    <span className="flex gap-8 flex-col">
                        <Image
                            src={footerData.logo}
                            alt=""
                            width={148}
                            height={44}
                            className={cn('lg:w-[148px] w-[148px] h-[48px')}
                        />
                        <p className="text-[16px] text-black-400 max-w-[300px]">
                            {footerData.about}
                        </p>
                    </span>
                </div>
                {footerData.links.map((data, index) => (
                    <div
                        className="lg:col-span-1 col-span-3 flex-col"
                        key={index}
                    >
                        <h5 className="text-[20px] text-black-1000 mb-8">
                            About
                        </h5>
                        <span className="flex gap-3 flex-col">
                            {data.links.map((link, index) => (
                                <a
                                    key={index}
                                    href=""
                                    className="text-[16px] text-black-400 max-w-[300px]"
                                >
                                    {link}
                                </a>
                            ))}
                        </span>
                    </div>
                ))}
            </div>
            <div className="max-w-[1200px] m-auto flex justify-between items-center border-t-[1px] mt-[80px] h-[120px] gap-6 flex-wrap">
                <p className="text-[16px] text-black-500 max-w-[300px]">
                    ©2022 MORENT. All rights reserved
                </p>
                <span className="flex gap-8 flex-wrap">
                    <p className="text-[16px] text-black-500 max-w-[300px]">
                        Privacy & Policy
                    </p>
                    <p className="text-[16px] text-black-500 max-w-[300px]">
                        Terms & Condition
                    </p>
                </span>
            </div>
        </div>
    );
}

export default Footer;
