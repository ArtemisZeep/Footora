import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PricesHero from '../../components/PricesHero';
import PricesTable from '../../components/PricesTable';
import { pricesData } from '../../data/pricesData';

export default function PricesPage() {
  return (
    <>
      <Header />
      <main>
        <PricesHero />
        {pricesData.map((section, index) => (
          <PricesTable key={index} section={section} />
        ))}
      </main>
      <Footer />
    </>
  );
}