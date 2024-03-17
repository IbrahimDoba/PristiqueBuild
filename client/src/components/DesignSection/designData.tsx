import img1 from "../../../assets/slider1.jpeg";
import img2 from "../../../assets/card2.jpg";
import img3 from "../../../assets/prefab.jpg";
import img4 from "../../../assets/flats1.jpg";
import img5 from "../../../assets/site.jpg";





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
    title: "Meticulous Planning and Design",
    text: "Our expert team meticulously plans and designs each project, ensuring that every detail is carefully considered and optimized for efficiency and functionality.",
    link: "",
  },
  {
    id: 2,
    image: img2,
    title: "Permits and Approvals",
    text: "We handle all necessary permits and approvals, navigating regulatory requirements seamlessly to keep your project on track.",
    link: "",
  },
  {
    id: 3,
    image: img3,
    title: "Prefabrification in a Controlled Factory Environment",
    text: "Our state-of-the-art factory facility allows for precision prefabrication of building components, ensuring consistent quality and accelerated construction timelines.",
    link: "",
  },
  {
    id: 4,
    image: img5,
    title: "Site Development",
    text: "Concurrent with fabrication, our team manages site development activities, ensuring that your project site is prepared and ready for assembly.",
    link: "",
  },
  {
    id: 5,
    image: img4,
    title: "Quality Control and Inspections",
    text: "Rigorous quality control measures are implemented at every stage of the process, guaranteeing the highest standards of craftsmanship and safety.",
    link: "",
  },
  {
    id: 6,
    image: img4,
    title: "Transportation to Site",
    text: "We coordinate transportation logistics to deliver prefabricated components to the project site efficiently and on schedule.",
    link: "",
  },
  {
    id: 7,
    image: img4,
    title: "Assembly with Precision",
    text: "Our skilled assembly teams execute the assembly process with precision and expertise, ensuring that every component fits together seamlessly.",
    link: "",
  },
  {
    id: 8,
    image: img4,
    title: "Finishing, Client Feedback, and Satisfaction",
    text: "We complete the construction process with meticulous finishing touches, soliciting client feedback along the way to ensure satisfaction at every stage of the project.",
    link: "",
  },
];
