export const siteConfig = {
    name: "PristiqBuild",
    description: "Leading innovators in light steel gauge modular construction in Nigeria, delivering sustainable and efficient building solutions for tomorrow's world.",
    url: "https://www.pristiqbuild.com",
    ogImage: "https://www.pristiqbuild.com/og-image.jpg",
    links: {
      twitter: "@pristiqbuild",
      github: "https://github.com/pristiqbuild",
      linkedin: "https://linkedin.com/company/pristiqbuild",
      facebook: "https://facebook.com/pristiqbuild",
    },
    mainNav: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Projects",
        href: "/projects",
      },
      {
        title: "Solutions",
        href: "/solutions",
        items: [
          {
            title: "Residential",
            href: "/solutions/residential",
          },
          {
            title: "Commercial",
            href: "/solutions/commercial",
          },
          {
            title: "Industrial",
            href: "/solutions/industrial",
          },
        ],
      },
      {
        title: "Technology",
        href: "/technology",
      },
      {
        title: "About",
        href: "/about",
      },
      {
        title: "Contact",
        href: "/contact",
      },
    ],
    features: [
      {
        title: "Modular Construction",
        description: "Precision-engineered modular units for faster, cleaner construction",
      },
      {
        title: "Light Steel Frame",
        description: "Sustainable and durable light steel gauge framework systems",
      },
      {
        title: "Rapid Assembly",
        description: "Quick on-site assembly reducing project timelines",
      },
      {
        title: "Quality Control",
        description: "Factory-controlled production ensuring highest quality standards",
      },
    ],
    contact: {
      email: "info@pristiqbuild.com",
      phone: "+234 708 718 3815",
      address: "First floor, Murjanatu House, 1 Zambezi Crescent, Wuse, Abuja.",
    },
    companyInfo: {
      founded: "2023",
      employees: "50-200",
      certifications: [
        "ISO 9001:2015",
        "Green Building Certification",
        "Modular Building Institute Member"
      ],
      expertise: [
        "Light Steel Gauge Construction",
        "Modular Building Systems",
        "Sustainable Construction",
        "Building Information Modeling (BIM)",
        "Factory-Controlled Manufacturing"
      ]
    }
  }
  
  export type SiteConfig = typeof siteConfig