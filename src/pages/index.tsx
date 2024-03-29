import Header from '@/widgets/header';
import Footer from '@/widgets/footer';
import Products from '@/widgets/home/Products';

export default function Home() {
    return (
        <main className={`bg-brand-st-1`}>
            <Header />
            <Products />
            <Footer />
        </main>
    );
}
