import img1 from "../../../assets/build1.jpg";
import img2 from "../../../assets/build2.jpg";
import img3 from "../../../assets/build3.jpg";

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
    title: "Pre Modular",
    text: "Build Outside the box",
  },
  {
    id: 2,
    image: img2,
    title: "Transformables",
    text: "Build Outside the box",

  },
  {
    id: 3,
    image: img3,
    title: "PREISTIGE",
    text: "Build Outside the box",

  },
];
