import Banner from '@/widgets/home/Banner';
import Car1 from '@/assets/images/car1.png';
import Car2 from '@/assets/images/car1.png';
import Image1 from '@/assets/images/image1.png';
import Image2 from '@/assets/images/image2.png';
import Image3 from '@/assets/images/image3.png';
import ProductCard from '@/components/containers/ProductCard';
import { MdOutlineStar, MdOutlineStarBorder } from 'react-icons/md';
import Filter from '../filter';
import { products } from '@/utils/products';
import CarDetailBanner from './Banner';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { cn } from '@/lib';
import { useState } from 'react';
import LikeComp from '@/components/shared/Like';
import Button from '@/components/shared/Button';
import Reviews from './Reviews';

interface Banner {
    title: string;
    info: string;
    button: string;
    image: any;
}

interface ProductDetailProps {
    id: string;
    title: string;
    type: string;
    image: any;
    liter: number;
    category: string;
    people: number;
    price: number;
    descripion: string;
}

function CarDetail() {
    const router = useRouter();
    const product = products();
    const banners: Banner[] = [
        {
            title: 'The Best Platform for Car Rental.',
            info: 'Ease of doing a car rental safely and reliably. Of course at a low price.',
            button: 'Rent Car',
            image: Car1,
        },
        {
            title: 'Easy way to rent a car at a low price.',
            info: 'Providing cheap car rental services and safe and comfortable facilities..',
            button: 'Rent Car',
            image: Car2,
        },
    ];

    const id: any = router.query.car;

    const getCarById = (id: string): ProductDetailProps | undefined => {
        return product.find((obj) => obj.id === id);
    };

    const currentCar = getCarById(id);

    const images = [Image1, Image2, Image3];

    const [activeImage, setActiveImage] = useState(images[0]);

    return (
        <div className="lg:flex gap-6 bg-brand-st-1">
            <div className="lg:flex hidden min-w-[300px]">
                <Filter />
            </div>
            <div className="flex gap-8 max-w-[1200px] flex-col m-auto my-8 px-5 bg-brand-st-1">
                <div className="grid grid-cols-2 gap-6">
                    <div className="lg:col-span-1 col-span-2 ">
                        <CarDetailBanner banner={banners[0]} index={2} />
                        <div className="grid gap-4 grid-cols-3 mt-5">
                            {images.map((image, index) => (
                                <span
                                    className={cn(
                                        'col-span-1 lg:h-[124px] h-[96px]',
                                        {
                                            'p-2 border border-primary-default rounded-xl':
                                                activeImage === image,
                                        }
                                    )}
                                    key={index}
                                >
                                    <Image
                                        src={image}
                                        alt=""
                                        width={100}
                                        height={100}
                                        className={cn('w-full h-full')}
                                        onClick={() => setActiveImage(image)}
                                    />
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-1 col-span-2 bg-white rounded-xl p-6 ">
                        <div className="flex flex-col gap-10 justify-between h-fit">
                            <div className="mb-2 flex flex-col gap-2">
                                <span className="flex justify-between items-center">
                                    <h1 className="text-[32px] font-medium">
                                        {currentCar?.title}
                                    </h1>
                                    <LikeComp />
                                </span>
                                <span className="flex gap-1">
                                    <MdOutlineStar className="text-secondary-default text-[20px]" />
                                    <MdOutlineStar className="text-secondary-default text-[20px]" />
                                    <MdOutlineStar className="text-secondary-default text-[20px]" />
                                    <MdOutlineStar className="text-secondary-default text-[20px]" />
                                    <MdOutlineStarBorder className="text-black-500 text-[20px]" />
                                    <p className="text-black-500 text[14px] font-light">
                                        440+ Reviews
                                    </p>
                                </span>
                            </div>
                            <span>
                                <p className="text-black-500 font-light text-[20px]">
                                    {currentCar?.descripion}
                                </p>
                            </span>
                            <div className="grid grid-cols-2 gap-3">
                                <span className="flex justify-between col-span-1">
                                    <p className="text-[16px] text-black-400 max-w-[300px]">
                                        Type Car
                                    </p>
                                    <p className="text-[16px] text-black-500 max-w-[300px]">
                                        Sport
                                    </p>
                                </span>
                                <span className="flex justify-between col-span-1">
                                    <p className="text-[16px] text-black-400 max-w-[300px]">
                                        Capacity
                                    </p>
                                    <p className="text-[16px] text-black-500 max-w-[300px]">
                                        2 Person
                                    </p>
                                </span>
                                <span className="flex justify-between col-span-1">
                                    <p className="text-[16px] text-black-400 max-w-[300px]">
                                        Steering
                                    </p>
                                    <p className="text-[16px] text-black-500 max-w-[300px]">
                                        Manual
                                    </p>
                                </span>
                                <span className="flex justify-between col-span-1">
                                    <p className="text-[16px] text-black-400 max-w-[300px]">
                                        Gasoline
                                    </p>
                                    <p className="text-[16px] text-black-500 max-w-[300px]">
                                        70L
                                    </p>
                                </span>
                            </div>
                            <span className="flex justify-between">
                                <span className="flex flex-col">
                                    <h2 className="text-black-1000 text-[28px] font-bold leading-[26px] flex items-center">
                                        ${currentCar?.price}/{' '}
                                        <span className="text-black-400 text-[14px] font-medium">
                                            day
                                        </span>
                                    </h2>
                                    <span className="text-black-400 text-[14px] font-medium line-through">
                                        $100
                                    </span>
                                </span>
                                <Button>Rent Now</Button>
                            </span>
                        </div>
                    </div>
                </div>
                <Reviews />
                <span className="flex justify-between mt-6">
                    <p className="text-[16px] text-black-400 max-w-[300px] px-4">
                        Recent Cars
                    </p>
                    <a className="text-[16px] text-primary-default max-w-[300px] px-4">
                        View All
                    </a>
                </span>
                <div className="grid grid-cols-3 gap-6">
                    {product.map((product, index) => (
                        <div key={index} className="lg:col-span-1 col-span-3">
                            <ProductCard data={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CarDetail;
