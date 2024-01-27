import Homepage from "@/components/firstPage/homepage";
import Navbar from "@/components/firstPage/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className=" bg-[#272323] min-h-screen flex flex-col justify-center items-center">
      <Navbar />
      <Homepage/>
      </div>
    </main>
  );
}
