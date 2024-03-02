import AboutUsSection from "@/components/AboutUs/AboutUsSection";
import Designs from "@/components/DesignSection/SectionsPage";
import Footer from "@/components/Footer/Footer";
import Homepage from "@/components/HeroSection/homepage";
import Navbar from "@/components/HeroSection/navbar";
import SliderPage from "@/components/SliderSection/SliderPage";
import VideoBgSection from "@/components/videoBgSection/videoBgSection";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className=" bg-bg  flex flex-col justify-center items-center">
      <Navbar />
      <VideoBgSection />
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
