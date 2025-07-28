"use client"
import { useState } from "react";
import heroImage from "@/assets/hero-estate.jpg";
import interiorImage from "@/assets/interior-luxury.jpg";
import constructionImage from "@/assets/steel-construction.jpg";
import amenitiesImage from "@/assets/amenities.jpg";

const galleryImages = [
  {
    src: "https://koz5ylkurb.ufs.sh/f/VdVJXQsMkbnq56Ew6W07ORtYrS3iKsgudojvNWCMcLGkpZEb",
    title: "Exterior Villa Renders",
    description: "Stunning architectural design on hillside terrain"
  },
  {
    src: "https://koz5ylkurb.ufs.sh/f/VdVJXQsMkbnqYuh2dCSGPHjarxqXN7lRfMokDU4mO0dbuV2g",
    title: "Luxury Interior Design",
    description: "Premium finishes and modern living spaces"
  },
  {
    src: "https://koz5ylkurb.ufs.sh/f/VdVJXQsMkbnq8I4obM4tuWdmFoTr1zaVhSlten2XUq0fv3bR",
    title: "Steel Frame Construction",
    description: "Light Gauge Steel precision engineering"
  },
  {
    src: "https://koz5ylkurb.ufs.sh/f/VdVJXQsMkbnqgfDxPU4mz6scQkqoNDESGFhrH2B738KWvmnO",
    title: "Premium Amenities",
    description: "Clubhouse, pool and recreational facilities"
  }
];

const EstateGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          Estate Gallery
        </h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Main Image */}
          <div className="relative mb-8 rounded-2xl overflow-hidden shadow-luxury">
            <img 
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].title}
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-all duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {galleryImages[selectedImage].title}
              </h3>
              <p className="text-lg text-secondary">
                {galleryImages[selectedImage].description}
              </p>
            </div>
          </div>
          
          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                  selectedImage === index ? 'ring-4 ring-accent shadow-gold' : 'hover:shadow-elegant'
                }`}
              >
                <img 
                  src={image.src}
                  alt={image.title}
                  className="w-full h-24 md:h-32 object-cover"
                />
                <div className={`absolute inset-0 transition-all duration-300 ${
                  selectedImage === index ? 'bg-accent/20' : 'bg-black/0 hover:bg-black/20'
                }`}></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstateGallery;