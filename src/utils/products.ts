import Car1 from '@/assets/images/car1.png';
import Car2 from '@/assets/images/car1.png';

interface Product {
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
export const products = () => {
    const data: Product[] = [
        {
            id: '6732u4241q7grydqx',
            title: 'Koenigsegg',
            type: 'Sport',
            image: Car1,
            liter: 90,
            category: 'Manual',
            people: 2,
            price: 99.99,
            descripion:
                "NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the.",
        },
        {
            id: 'uhjwrertetrgw',
            title: 'Koenigsegg',
            type: 'Sport',
            image: Car2,
            liter: 90,
            category: 'Manual',
            people: 2,
            price: 99.99,
            descripion:
                "NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the.",
        },
        {
            id: 'vydthewhwech',
            title: 'Koenigsegg',
            type: 'Sport',
            image: Car1,
            liter: 90,
            category: 'Manual',
            people: 2,
            price: 99.99,
            descripion:
                "NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the.",
        },
        {
            id: 'jhbf3ukbyfw4yg',
            title: 'Koenigsegg',
            type: 'Sport',
            image: Car2,
            liter: 90,
            category: 'Manual',
            people: 2,
            price: 99.99,
            descripion:
                "NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the.",
        },
        {
            id: 'fwmacenwewnr',
            title: 'Koenigsegg',
            type: 'Sport',
            image: Car1,
            liter: 90,
            category: 'Manual',
            people: 2,
            price: 99.99,
            descripion:
                "NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the.",
        },
        {
            id: 'rvemrwrwv',
            title: 'Koenigsegg',
            type: 'Sport',
            image: Car1,
            liter: 90,
            category: 'Manual',
            people: 2,
            price: 99.99,
            descripion:
                "NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the.",
        },
        {
            id: 'kbjhcwrcqe',
            title: 'Koenigsegg',
            type: 'Sport',
            image: Car1,
            liter: 90,
            category: 'Manual',
            people: 2,
            price: 99.99,
            descripion:
                "NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the.",
        },
    ];
    return data;
};
