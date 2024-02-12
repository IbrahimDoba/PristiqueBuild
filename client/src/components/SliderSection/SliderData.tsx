import img1 from "../../../assets/slider 2.jpg";
import img2 from "../../../assets/card1.jpg";
import img3 from "../../../assets/slider3.jpg";

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
    title: "Build Outside The Box",
    text: "With every detail thought-fully considererd",
  },
  {
    id: 2,
    image: img2,
    title: "Award-winning designs",
    text: "Available in large range of types and sizes",

  },
  {
    id: 3,
    image: img3,
    title: "Morden Modular Homes",
    text: "Redefining what is possible in modular constructon",

  },
];
