"use client";

import Image from "next/image";
import { MapPin, Hammer, CheckCircle, Ruler } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <section className="relative h-96 md:h-[500px] mb-12 rounded-xl overflow-hidden">
        <Image
          src="/osun/osun1.jpg"
          alt="Akure Light Gauge Steel Roofing Project"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Akure Light Gauge Steel Roofing Project
          </h1>
          <div className="flex flex-wrap gap-4 text-white mt-4">
            <span className="bg-black/40 px-3 py-1 rounded-full text-sm flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <strong>Location:</strong> Akure, Ondo State
            </span>
            <span className="bg-black/40 px-3 py-1 rounded-full text-sm flex items-center gap-2">
              <Ruler className="w-4 h-4" />
              <strong>Area:</strong> 1,080 sqm
            </span>
            <span className="bg-black/40 px-3 py-1 rounded-full text-sm flex items-center gap-2">
              <Hammer className="w-4 h-4" />
              <strong>Type:</strong> LGS Truss System
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

