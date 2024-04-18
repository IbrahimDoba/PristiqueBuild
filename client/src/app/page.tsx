import Aboutus from "@/components/Aboutus/Aboutus";
import ContactSection from "@/components/ContactSection/Contact";
import CoreValues from "@/components/CoreValues/CoreValues";
import Designs from "@/components/DesignSection/SectionsPage";
import FutureDesigns from "@/components/FuturesticDesigns/FutureDesigns";
import Hero from "@/components/HeroSection/hero";
import SliderPage from "@/components/SliderSection/SliderPage";
import VideoBgSection from "@/components/videoBgSection/videoBgSection";

export default function Home() {
  return (
    <main>
      <div className=" bg-bg  flex flex-col justify-center items-center overflow-x-hidden">
        {/* <Navbar /> */}
        <VideoBgSection />
        <Hero />
        <CoreValues />
        <FutureDesigns />
        <SliderPage /> {/* // our services */}
        <Designs /> {/* // our process */}
        <Aboutus />
        {/* <ContactSection/> */}
        {/* <Footer/> */}
      </div>
    </main>
  );
}
