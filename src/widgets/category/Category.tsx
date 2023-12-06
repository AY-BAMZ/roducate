import ProductCard from '@/components/containers/ProductCard';
import Sort from '@/components/containers/Sort';
import { TbArrowsDownUp } from 'react-icons/tb';
import Filter from '../filter';
import { products } from '@/utils/products';

function Category() {
    const product = products();

    return (
        <div className="lg:flex gap-6">
            <div className="lg:flex hidden min-w-[300px]">
                <Filter />
            </div>
            <div className="flex gap-8 max-w-[1200px] flex-col m-auto my-8 px-5">
                <div className="flex lg:flex-row flex-col w-full gap-10 relative">
                    <Sort dropOff={false} />
                    <Sort dropOff={true} />
                    <span className="flex w-[60px] h-[60px] rounded-lg bg-primary-default justify-center items-center text-white absolute shadow-lg bottom-[calc(50%-30px)] right-[calc(50%-30px)]">
                        <TbArrowsDownUp />
                    </span>
                </div>
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

export default Category;
