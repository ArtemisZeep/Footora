import { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import InsolesHero from '../../components/InsolesHero';
import InsolesInfo from '../../components/InsolesInfo';
import AnalysisBlock from '../../components/AnalysisBlock';
import { pageMetadata } from '../../lib/metadata';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedPages from '../../components/RelatedPages';

// Динамические метатеги для страницы изготовления стелек
export const metadata: Metadata = pageMetadata.insoles;

export default function InsolesPage() {
  const analysisBlocks = [1, 2, 3, 4, 5]; // Номера блоков анализа

  return (
    <>
      <Header />
      <main>
        {/* Breadcrumbs БЕЗ нарушения стилей */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <Breadcrumbs currentPage="insoles" />
        </div>

        <InsolesHero />
        <InsolesInfo />
        {analysisBlocks.map((blockNumber) => (
          <AnalysisBlock key={blockNumber} blockNumber={blockNumber} />
        ))}
        
        {/* Связанные страницы */}
        <RelatedPages currentPage="insoles" />
      </main>
      <Footer />
    </>
  );
} 