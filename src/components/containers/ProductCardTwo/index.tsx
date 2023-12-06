import React, { useState } from 'react';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import Image from 'next/image';
import { cn } from '@/lib';
import { BsFillFuelPumpFill, BsFillPeopleFill } from 'react-icons/bs';
import { RiSteering2Line } from 'react-icons/ri';
import Button from '@/components/shared/Button';
import { useRouter } from 'next/router';

interface ProductCardProps {
    data: {
        title: string;
        id: string;
        type: string;
        image: string;
        liter: number;
        category: string;
        people: number;
        price: number;
    };
}

function ProductCard({ data }: ProductCardProps) {
    const router = useRouter();
    const [liked, setLiked] = useState(false);

    const handleViewProduct = () => {
        router.push({
            pathname: '/[car]',
            query: {
                car: data.id,
            },
        });
    };

    return (
        <div
            className="flex flex-col p-6 rounded-xl bg-white gap-5 cursor-pointer"
            onClick={handleViewProduct}
        >
            <span className="flex justify-between">
                <span>
                    <h4 className="text-black-1000 text-[20px] font-bold">
                        {data.title}
                    </h4>
                    <p className="text-black-400 text-[14px] font-bold">
                        {data.type}
                    </p>
                </span>
                {liked ? (
                    <IoHeart
                        className="text-danger-deep text-[24px]"
                        onClick={() => setLiked(false)}
                    />
                ) : (
                    <IoHeartOutline
                        onClick={() => setLiked(true)}
                        className="text-black-300 text-[24px]"
                    />
                )}
            </span>
            <Image
                src={data.image}
                alt=""
                width={406}
                height={116}
                className={cn('object-cover lg:w-[406px] w-[240px] my-10')}
            />

            <span className="bg-gradient-to-B from-[#ffffff00] to-[#ffffff] h-[60px] w-full mt-[-100px] z-10"></span>
            <span className="flex items-center text-black-400 text-[14px] font-light justify-between">
                <span className="flex gap-1 items-center">
                    <BsFillFuelPumpFill className="text-[20px]" />
                    {data.liter}L
                </span>
                <span className="flex gap-1 items-center">
                    <RiSteering2Line className="text-[20px]" />
                    {data.category}
                </span>
                <span className="flex gap-1 items-center">
                    <BsFillPeopleFill className="text-[20px]" />
                    {data.people} People
                </span>
            </span>
            <span className="flex justify-between">
                <h2 className="text-black-1000 text-[20px] font-bold leading-[26px] flex items-center">
                    ${data.price}/{' '}
                    <span className="text-black-300 text-[14px] font-medium">
                        day
                    </span>
                </h2>
                <Button>Rent Now</Button>
            </span>
        </div>
    );
}

export default ProductCard;
