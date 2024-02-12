import AboutUsSection from "@/components/AboutUs/AboutUsSection";
import Designs from "@/components/DesignSection/SectionsPage";
import Footer from "@/components/Footer/Footer";
import Homepage from "@/components/HeroSection/homepage";
import Navbar from "@/components/HeroSection/navbar";
import SliderPage from "@/components/SliderSection/SliderPage";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className=" bg-bg  flex flex-col justify-center items-center">
      <Navbar />
      <SliderPage/>
      <Homepage/>
      <Designs/>
      <AboutUsSection />
      <Footer/>
      </div>
    </main>
  );
}
