import Header from '@/widgets/header';
import Footer from '@/widgets/footer';
import Category from '@/widgets/category/Category';

export default function Home() {
    return (
        <main className={`bg-brand-st-1`}>
            <Header />
            <Category />
            <Footer />
        </main>
    );
}
