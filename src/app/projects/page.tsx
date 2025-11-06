import Link from "next/link";
import Image from "next/image";

function Projects() {
  const projects = [
    {
      id: 1,
      title: " Maitama Luxury Mansion – Colorado Street Roofing Project",
      description: "Luxury 5-bedroom apartment complex with modern amenities including a rooftop pool, fitness center, and underground parking. Features sustainable building materials and energy-efficient systems throughout.",
      image: "/roofs/roof01.jpg",
      link: "/projects/colorado"
    },
    {
      id: 2,
      title: " Breeze Point Estate – Exclusive Living in F01, Kubwa, Abuja",
      description: "Breeze Point Estate emerges as a striking symbol of smart luxury living. Developed by Pristiq Builders, this estate offers a unique blend of modern architecture and sustainable design, featuring spacious apartments with high-end finishes and smart home technology.",
      image: "/breeze-point/breeze2.jpg",
      link: "/projects/breeze-point"
    },
    {
      id: 3,
      title: "Opulence Heights – Smart Steel Residential Estate",
      description: "Opulence Heights is a revolutionary smart-living estate located in the elevated terrain of Dawaki Hillside, Abuja. Developed through a joint venture between EFAB Properties and PristiqBuild, this project introduces Nigeria's first precision-built steel-frame homes with global standards in energy efficiency, automation, and infrastructure.",
      image: "/opulence.png",
      link: "/projects/opulence-heights"
    },
    {
      id: 4,
      title: "Akure Light Gauge Steel Roofing Project",
      description: "One of Pristiq Build's largest and most technically challenging roofing works, located in the serene heart of Ondo State. This massive castle-style residence and its adjoining boys' quarters feature a combined roof area exceeding 1,080 sqm, showcasing our expertise in large-scale Light Gauge Steel roofing solutions.",
      image: "/osun/osun4.jpg",
      link: "/projects/akure"
    },
    {
      id: 5,
      title: "Aso Grove Light Gauge Steel Roofing Project",
      description: "A complete roof transformation in the prestigious Aso Grove Estate, Abuja. This project involved replacing an aging wooden truss system with a modern, precision-built Light Gauge Steel framework, delivering a solution that combines beauty, efficiency, and longevity for long-term performance.",
      image: "/asogrove/aso2.JPG",
      link: "/projects/aso-grove"
    },
  ];

  return (
    <main>
      <section className="min-h-[20vh] grid place-content-center text-center px-6 lg:px-10 mb-10">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
          Our Featured Projects
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Explore our portfolio of exceptional construction projects, showcasing our commitment to quality, innovation, and client satisfaction.
        </p>
      </section>

      <section className="px-6 lg:px-10 py-14">
        <div className="max-w-5xl mx-auto flex flex-col gap-16">
          {projects.map((project, index) => (
            <Link key={project.id} href={project.link} className="group">
              <div className="flex flex-col md:flex-row gap-8 w-full hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
                <div className="w-full md:w-2/5 h-[300px] relative rounded-lg overflow-hidden bg-gray-200">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority={index === 0}
                  />
                </div>
                <div className="w-full md:w-3/5 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h2>
                  <p className="text-gray-700 text-lg mb-6">{project.description}</p>
                  <div>
                    <span className="inline-block text-blue-600 font-semibold tracking-wider text-sm uppercase group-hover:translate-x-1 transition-transform duration-300">
                      View Project Details <span className="ml-1">→</span>
                    </span>
                  </div>
                </div>
              </div>
              {index < projects.length - 1 && <div className="border-b border-gray-200 mt-8"></div>}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;