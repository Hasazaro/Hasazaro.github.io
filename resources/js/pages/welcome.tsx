import { Head } from '@inertiajs/react';
import { PortfolioPage } from '@/components/portfolio/portfolio-page';

export default function Welcome() {
    return (
        <>
            <Head title="Portfolio" />
            <PortfolioPage />
        </>
    );
}
