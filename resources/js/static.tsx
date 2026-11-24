/*
 * Entry point for the static build of the portfolio (GitHub Pages).
 * It renders the same page as the Laravel welcome route, without Inertia.
 */
import '../css/app.css';
import { createRoot } from 'react-dom/client';
import { PortfolioPage } from '@/components/portfolio/portfolio-page';
import { initializeTheme } from '@/hooks/use-appearance';

initializeTheme();

const container = document.getElementById('app');

if (container) {
    createRoot(container).render(<PortfolioPage />);
}
