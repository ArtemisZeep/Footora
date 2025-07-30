import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SchoolHero from '../../components/SchoolHero';
import SchoolAbout from '../../components/SchoolAbout';
import SchoolLector from '../../components/SchoolLector';
import CourseBlocks from '../../components/CourseBlocks';
import SchoolBenefits from '../../components/SchoolBenefits';
import SchoolAdvantages from '../../components/SchoolAdvantages';
import SchoolReviews from '../../components/SchoolReviews';

export default function SchoolPage() {
  return (
    <>
      <Header variant="school" />
      <main>
        <SchoolHero />
        <SchoolAbout />
        <SchoolLector />
        <CourseBlocks />
        <SchoolBenefits />
        <SchoolAdvantages />
        <SchoolReviews />
      </main>
      <Footer variant="school" />
    </>
  );
} 