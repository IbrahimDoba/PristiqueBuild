import Designs from "@/components/DesignSection/SectionsPage";
import Homepage from "@/components/HeroSection/hero";
import SliderPage from "@/components/SliderSection/SliderPage";
import VideoBgSection from "@/components/videoBgSection/videoBgSection";

export default function Home() {
  return (
    <main>
      <div className=" bg-bg  flex flex-col justify-center items-center">
        {/* <Navbar /> */}
        <VideoBgSection/>
        <Homepage />
        {/* our core values
      futurestic designs (vr) */}
        <SliderPage /> {/* // our services */}
        <Designs /> {/* // our process */}
        {/* <AboutUsSection /> */}
        {/* // contact */}
        {/* <Footer/> */}
      </div>
    </main>
  );
}
