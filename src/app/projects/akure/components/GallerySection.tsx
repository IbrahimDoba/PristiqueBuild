"use client";

import { useState } from "react";
import Image from "next/image";

const galleryImages = [
  {
    src: "/osun/osun1.jpg",
    title: "Project Overview",
    description: "Massive castle-style residence with LGS roofing system",
  },
  {
    src: "/osun/osun2.jpg",
    title: "Main Building Structure",
    description: "7-meter span king post with precision engineering",
  },
  {
    src: "/osun/osun3.jpg",
    title: "LGS Installation",
    description: "5-man team executing precision installation",
  },
  {
    src: "/osun/osun4.jpg",
    title: "Steel Framework",
    description: "6.8 tons of precision-engineered steel",
  },
  {
    src: "/osun/osun6.jpg",
    title: "Boys' Quarters",
    description: "3-meter span structure for design continuity",
  },
  {
    src: "/osun/osun7.jpg",
    title: "Completed Structure",
    description: "Architecturally striking final result",
  },
  {
    src: "/osun/osun8.jpg",
    title: "Aerial Construction View",
    description: "Complex multi-gabled LGS roof structure from above",
  },
  {
    src: "/osun/osun9.jpg",
    title: "Close-Up Truss Detail",
    description: "Intricate light gauge steel truss system detail",
  },
  {
    src: "/osun/osun10.jpg",
    title: "Active Installation Site",
    description: "Construction team working on LGS roof truss installation",
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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

