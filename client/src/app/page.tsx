import Designs from '@/components/DesignSection/SectionsPage';
import Homepage from '@/components/HeroSection/hero';
import SliderPage from '@/components/SliderSection/SliderPage';

export default function Home() {
  return (
    <main>
      <div className=" bg-bg  flex flex-col justify-center items-center">
      <Navbar />
      <Homepage/>
      {/* our core values
      futurestic designs (vr) */}
      <SliderPage/>       {/* // our services */}

      <Designs/>       {/* // our process */}

      <AboutUsSection />
      {/* // contact */}
      <Footer/>
      </div>
    </main>
  );
}
