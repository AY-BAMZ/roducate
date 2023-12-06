import Banner from '@/widgets/home/Banner';
import Car1 from '@/assets/images/car1.png';
import Car2 from '@/assets/images/car1.png';
import ProductCard from '@/components/containers/ProductCard';
import Sort from '@/components/containers/Sort';
import { TbArrowsDownUp } from 'react-icons/tb';
import { products } from '@/utils/products';

interface Banner {
    title: string;
    info: string;
    button: string;
    image: any;
}

function Products() {
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

    const product = products();
    return (
        <div className="flex gap-8 max-w-[1200px] flex-col m-auto my-8 px-5">
            <div className="grid grid-cols-2 gap-6 ">
                {banners.map((banner, index) => (
                    <div key={index} className="lg:col-span-1 col-span-2">
                        <Banner index={index + 1} banner={banner} />
                    </div>
                ))}
            </div>
            <div className="flex lg:flex-row flex-col w-full gap-10 relative">
                <Sort dropOff={false} />
                <Sort dropOff={true} />
                <span className="flex w-[60px] h-[60px] rounded-lg bg-primary-default justify-center items-center text-white absolute shadow-lg bottom-[calc(50%-30px)] right-[calc(50%-30px)]">
                    <TbArrowsDownUp />
                </span>
            </div>
            <span className="flex justify-between mt-6">
                <p className="text-[16px] text-black-400 max-w-[300px] px-4">
                    Popular Car
                </p>
                <a className="text-[16px] text-primary-default max-w-[300px] px-4">
                    View All
                </a>
            </span>
            <div className="grid grid-cols-4 gap-6">
                {product.slice(0, 4).map((product, index) => (
                    <div key={index} className="lg:col-span-1 col-span-4">
                        <ProductCard data={product} />
                    </div>
                ))}
            </div>
            <span className="flex justify-between mt-6">
                <p className="text-[16px] text-black-400 max-w-[300px] px-4">
                    Popular Car
                </p>
                s
            </span>
            <div className="grid grid-cols-4 gap-6">
                {product.map((product, index) => (
                    <div key={index} className="lg:col-span-1 col-span-4">
                        <ProductCard data={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
