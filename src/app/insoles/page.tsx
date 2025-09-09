import { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import InsolesHero from '../../components/InsolesHero';
import InsolesInfo from '../../components/InsolesInfo';
import AnalysisBlock from '../../components/AnalysisBlock';
import { pageMetadata } from '../../lib/metadata';

// Динамические метатеги для страницы изготовления стелек
export const metadata: Metadata = pageMetadata.insoles;

export default function InsolesPage() {
  const analysisBlocks = [1, 2, 3, 4, 5]; // Номера блоков анализа

  return (
    <>
      <Header />
      <main>
        <InsolesHero />
        <InsolesInfo />
        {analysisBlocks.map((blockNumber) => (
          <AnalysisBlock key={blockNumber} blockNumber={blockNumber} />
        ))}
      </main>
      <Footer />
    </>
  );
} 