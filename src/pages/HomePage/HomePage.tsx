import Navbar from '@src/common/Navbar';
import SectionHero from './components/SectionHero';
import SectionAbout from './components/SectionAbout';
import SectionRoom from './components/SectionRoom';
import Footer from '@src/common/Footer';
import { useTheme } from '@mui/material';

export default function HomePage() {
  const { palette } = useTheme();
  return (
    <>
      <main style={{ backgroundColor: palette.neutral.bgcolor }}>
        <Navbar />
        <SectionHero />
        <SectionAbout />
        <SectionRoom />
      </main>
      <Footer />
    </>
  );
}
