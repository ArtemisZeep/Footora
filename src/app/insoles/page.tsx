import Header from '../../components/Header';
import Footer from '../../components/Footer';
import InsolesHero from '../../components/InsolesHero';
import InsolesInfo from '../../components/InsolesInfo';
import AnalysisBlock from '../../components/AnalysisBlock';
import { analysisBlocksData } from '../../data/analysisData';

export default function InsolesPage() {
  return (
    <>
      <Header />
      <main>
        <InsolesHero />
        <InsolesInfo />
        {analysisBlocksData.map((blockData, index) => (
          <AnalysisBlock key={index} data={blockData} />
        ))}
      </main>
      <Footer />
    </>
  );
} 