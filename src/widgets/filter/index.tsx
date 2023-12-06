import Checkbox from '@/components/shared/Checkbox';
import React from 'react';

function Filter() {
    const types = [
        { name: 'Sport', total: 10 },
        { name: 'SUV', total: 10 },
        { name: 'MPV', total: 10 },
        { name: 'Sedan', total: 10 },
        { name: 'Coupe', total: 10 },
        { name: 'Nissan', total: 10 },
    ];
    const capacity = [
        { name: '2', total: 10 },
        { name: '4', total: 10 },
        { name: '6', total: 10 },
        { name: '8', total: 10 },
        { name: '12', total: 10 },
    ];
    return (
        <div className="bg-white p-6 flex gap-5 flex-col max-w-[400px] w-full">
            <p className="uppercase font-medium text-black-400  text-[14px]">
                Type
            </p>
            <span className="flex flex-col gap-5 text-[20px]">
                {types.map((data, index) => (
                    <p className="text-black-500 flex gap-1" key={index}>
                        <Checkbox />
                        {data.name}
                        <span className="text-black-400">({data.total})</span>
                    </p>
                ))}
            </span>
            <p className="uppercase font-medium text-black-400 mt-10 text-[14px]">
                Capacity
            </p>
            <span className="flex flex-col gap-5 text-[20px]">
                {capacity.map((data, index) => (
                    <p className="text-black-500 flex gap-1" key={index}>
                        <Checkbox />
                        {data.name}
                        <span className="text-black-400">({data.total})</span>
                    </p>
                ))}
            </span>

            <p className="uppercase font-medium text-black-400 mt-10 text-[14px]">
                Price
            </p>
            <span className="w-full h-[12px] rounded-full bg-black-200 relative">
                <span className="w-[70%] h-[12px] rounded-full bg-primary-default absolute"></span>
                <span className="w-4 h-4 rounded-full border border-white bg-primary-default absolute left-[67%] top-[-2px]"></span>
            </span>
        </div>
    );
}

export default Filter;
