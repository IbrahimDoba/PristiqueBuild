import img1 from "../../../assets/slider1.jpeg";
import img2 from "../../../assets/card2.jpg";
import img3 from "../../../assets/card7.jpg";
import img4 from "../../../assets/flats1.jpg";
import { StaticImageData } from "next/image";

export interface PropsType {
  image: StaticImageData;
  text: string;
  title: string;
  id: number;
  link: string;
}

export const sectionsData = [
  {
    id: 1,
    image: img1,
    title: "Pre Modular",
    text: "Our Fox Modular homes and commercial buildings are available in a large range of styles and sizes, and are built to last.",
    link: "",
  },
  {
    id: 2,
    image: img2,
    title: "Transformables",
    text: "Our Fox Modular homes and commercial buildings are available in a large range of styles and sizes, and are built to last.",
    link: "",
  },
  {
    id: 3,
    image: img3,
    title: "PREISTIGE",
    text: "Our Fox Modular homes and commercial buildings are available in a large range of styles and sizes, and are built to last.",
    link: "",
  },
  {
    id: 4,
    image: img4,
    title: "The Flats",
    text: "Our Fox Modular homes and commercial buildings are available in a large range of styles and sizes, and are built to last.",
    link: "",
  },
];
