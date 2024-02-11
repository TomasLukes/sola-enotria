import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import AboutUs from '@/app/components/AboutUs/AboutUs';
import DailyMenu from '@/app/components/DailyMenu/DailyMenu';
import Footer from '@/app/components/Footer/Footer';
import Contacts from './components/Contacts/Contacts';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <DailyMenu />
      <Contacts />
      <Footer />
    </>
  );
}
