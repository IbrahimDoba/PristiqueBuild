"use client";

import { Button } from "@/components/ui/button";
import { Download, Calendar, Phone } from "lucide-react";
import heroImage from "@/assets/hero-estate.jpg";
import { downloadOpulenceHeightsBrochure } from "@/lib/downloadUtils";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://koz5ylkurb.ufs.sh/f/VdVJXQsMkbnq56Ew6W07ORtYrS3iKsgudojvNWCMcLGkpZEb"
          alt="Opulence Heights Estate"
          className="h-full w-full object-cover"
        />
        <div className="bg-gradient-luxury absolute inset-0 opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="animate-fade-in mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl leading-tight font-bold md:text-6xl lg:text-7xl">
            Opulence Heights
            <span className="text-primaryent mt-2 block text-3xl md:text-4xl lg:text-5xl">
              Dawaki Hillside, Abuja
            </span>
          </h1>

          <p className="text-luxury-light mb-8 text-xl opacity-90 md:text-2xl lg:text-3xl">
            Nigeria&apos;s First Smart Steel Residential Estate
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="default"
              size="lg"
              className="px-8 py-6 text-lg"
              onClick={downloadOpulenceHeightsBrochure}
            >
              <Download className="h-5 w-5" />
              Download Brochure
            </Button>

            <Link href="/contact">
              <Button variant="default" size="lg" className="px-8 py-6 text-lg">
                <Calendar className="h-5 w-5" />
                Book a Private Viewing
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                variant="destructive"
                size="lg"
                className="hover:bg-destructive/70 hover:text-luxury-dark border-white px-8 py-6 text-lg text-white"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="animate-float absolute bottom-10 left-1/2 -translate-x-1/2 transform">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white">
          <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-white"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
