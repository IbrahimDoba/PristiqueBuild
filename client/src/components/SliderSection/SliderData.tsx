import img1 from "../../../assets/modu.jpg";
import img2 from "../../../assets/card1.jpg";
import img3 from "../../../assets/Slidercard1.jpg";
import img4 from "../../../assets/slider3.jpg";

import { StaticImageData } from "next/image";

export interface SliderPropsType {
  image: StaticImageData;
  text: string;
  title: string;
  id: number;
}

export const SliderData = [
  {
    id: 1,
    image: img1,
    title: "Modular Construction",
    text: "From residential to commercial, hospitality to education, discover the versatility and efficiency of modular construction for a wide range of building types.",
  },
  {
    id: 2,
    image: img2,
    title: "Light Steel Gauge Construction",
    text: "Harness the strength and flexibility of light steel gauge construction for complex and innovative building designs, with advantages in speed, sustainability, and cost-effectiveness.",

  },
  {
    id: 3,
    image: img3,
    title: "Hybrid Construction",
    text: "Combine the benefits of modular and conventional construction methods to tailor solutions to the specific needs and requirements of each project.",

  },
  {
    id: 4,
    image: img4,
    title: "Custom-Tailored Projects",
    text: "We specialize in custom-tailored projects, working closely with clients to bring their unique visions to life with precision and expertise.",

  },
];
