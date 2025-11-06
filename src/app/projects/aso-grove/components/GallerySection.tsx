"use client";

import { useState } from "react";
import Image from "next/image";

const galleryImages = [
  {
    src: "/asogrove/aso1.JPG",
    title: "Project Overview",
    description: "Complete roof transformation at Aso Grove Estate",
  },
  {
    src: "/asogrove/aso2.JPG",
    title: "Estate Exterior",
    description: "Prestigious Aso Grove Estate location",
  },
  {
    src: "/asogrove/aso3.JPG",
    title: "LGS Installation",
    description: "Precision installation of Light Gauge Steel trusses",
  },
  {
    src: "/asogrove/aso4.JPG",
    title: "Completed Structure",
    description: "Final roof structure with polyurethane waterproofing",
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          Project Gallery
        </h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Main Image */}
          <div className="relative mb-8 rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                fill
                className="object-cover transition-all duration-500"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {galleryImages[selectedImage].title}
              </h3>
              <p className="text-lg text-white/90">
                {galleryImages[selectedImage].description}
              </p>
            </div>
          </div>
          
          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setSelectedImage(index)}
                className={`relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                  selectedImage === index 
                    ? 'ring-4 ring-primary shadow-lg' 
                    : 'hover:shadow-md'
                }`}
              >
                <div className="relative h-24 md:h-32">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={`absolute inset-0 transition-all duration-300 ${
                  selectedImage === index 
                    ? 'bg-primary/20' 
                    : 'bg-black/0 hover:bg-black/20'
                }`}></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

