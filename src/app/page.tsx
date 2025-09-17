import Aboutus from "@/components/sections/about/Aboutus";
import ContactSection from "@/components/sections/contact/Contact";
import CoreValues from "@/components/sections/values/CoreValues";
import Designs from "@/components/sections/design/SectionsPage";
import FutureDesigns from "@/components/sections/futuristic/FutureDesigns";
import Hero from "@/components/sections/hero/hero";
import SliderPage from "@/components/sections/slider/SliderPage";
import VideoBgSection from "@/components/sections/video/videoBgSection";

export default function Home() {
  return (
    <main>
      <div className="bg-bg flex flex-col items-center justify-center overflow-x-hidden">
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
