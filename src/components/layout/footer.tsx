import Image from "next/image";
import logo from "@/assets/logob2.png";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full mx-auto flex justify-center items-center bg-darkBg text-white  px-8 lg:px-24 py-14 lg:py-10">
      <div className="w-full footer grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-4">
        <div className="flex flex-col justify-between max-sm:items-center">
          <Link href="#">
            <Image src={logo} alt="logo" className="max-w-[150px]" />
          </Link>
          <p className="text-sm max-lg:hidden">&#169; PristiqBuild 2025</p>
        </div>
        <div>
          <p className="font-semibold lg:text-xl mb-2 lg:mb-4">Our Builds</p>
          <ul className="flex flex-col gap-2.5 max-lg:text-sm">
            <li>
              <Link href="/why-modular" className="hover:underline">
                Why Modular
              </Link>
            </li>
            <li>
              <Link href="why-pristiq" className="hover:underline">
                Why pristiq
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold lg:text-xl mb-2 lg:mb-4">
            Terms & Privacy{" "}
          </p>
          <ul className="flex flex-col gap-2.5 max-lg:text-sm">
            <li>
              <Link href="#" className="hover:underline">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold lg:text-xl mb-2 lg:mb-4">Contact Us</p>
          <ul className="flex flex-col gap-2.5 max-lg:text-sm">
            <li>
              <Link
                href="mailto:pristiqbuilds@gmail.com"
                className="hover:underline"
              >
                Email
              </Link>
            </li>
            <li>
              <Link href="callto:(+234) 813 728 12" className="hover:underline">
                Phone
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold lg:text-xl mb-2 lg:mb-4">Follow Us</p>
          <ul className="flex gap-5 max-lg:text-sm">
            <li>
              <Link
                aria-label="Visit our Instagram page"
                href=" https://www.instagram.com/pristiqbuild/ "
                target="blank"
              >
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link
                aria-label="Visit our Twitter page"
                href="https://twitter.com/pristiqbuild"
                target="blank"
              >
                <BsTwitterX />
              </Link>
            </li>
            <li>
              <Link
                aria-label="Visit our LinkedIn page"
                href="https://www.linkedin.com/company/pristiqbuild"
              >
                <FaLinkedin />
              </Link>
            </li>
          </ul>
        </div>
        <p className="text-[10px] mt-3 lg:hidden">&#169; PristiqBuild 2024</p>
      </div>
    </footer>
  );
}
