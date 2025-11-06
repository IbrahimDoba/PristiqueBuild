"use client";

import Image from "next/image";
import { MapPin, Clock, Hammer, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <section className="relative h-96 md:h-[500px] mb-12 rounded-xl overflow-hidden">
        <Image
          src="/asogrove/aso1.JPG"
          alt="Aso Grove Light Gauge Steel Roofing Project"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Aso Grove Light Gauge Steel Roofing Project
          </h1>
          <div className="flex flex-wrap gap-4 text-white mt-4">
            <span className="bg-black/40 px-3 py-1 rounded-full text-sm flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <strong>Location:</strong> Aso Grove Estate, Abuja
            </span>
            <span className="bg-black/40 px-3 py-1 rounded-full text-sm flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <strong>Duration:</strong> 72 Hours
            </span>
            <span className="bg-black/40 px-3 py-1 rounded-full text-sm flex items-center gap-2">
              <Hammer className="w-4 h-4" />
              <strong>Type:</strong> Roof Replacement
            </span>
            <span className="bg-black/40 px-3 py-1 rounded-full text-sm flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <strong>Status:</strong> Completed
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

