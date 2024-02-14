import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import AboutUs from '@/app/components/AboutUs/AboutUs';
import DailyMenu from '@/app/components/DailyMenu/DailyMenu';
import Footer from '@/app/components/Footer/Footer';
import FindUs from './components/FindUs/FindUs';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <DailyMenu />
      <FindUs />
      <Footer />
    </>
  );
}
