import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SchoolHero from '../../components/SchoolHero';
import SchoolAbout from '../../components/SchoolAbout';
import SchoolLector from '../../components/SchoolLector';
import CourseBlocks from '../../components/CourseBlocks';

export default function SchoolPage() {
  return (
    <>
      <Header variant="school" />
      <main>
        <SchoolHero />
        <SchoolAbout />
        <SchoolLector />
        <CourseBlocks />
      </main>
      <Footer />
    </>
  );
} 