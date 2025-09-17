"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import roof1 from "@/assets/roofs/roof1.jpg";
import roof2 from "@/assets/roofs/roof2.jpg";
import roof3 from "@/assets/roofs/roof3.png";
import roof4 from "@/assets/roofs/roof4.jpg";
import roof5 from "@/assets/roofs/roof5.jpg";
import woodroof from "@/assets/roofs/wood roof.jpg";
import Image from "next/image";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const slideIn = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const zoomIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

export default function LGSRoofingContent() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="bg-gradient-moving animate-background-shine min-h-screen">
      <header className="bg-white/80 shadow-lg backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center text-4xl font-bold text-gray-800 md:text-5xl"
          >
            LGS Roofing Solutions
          </motion.h1>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="relative mb-8 overflow-hidden rounded-xl shadow-2xl">
            <Image
              src={roof1}
              alt="Modern Roofing"
              className="h-[400px] w-full object-cover"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
              <div className="p-8 text-white">
                <h2 className="mb-4 text-3xl font-bold">
                  Introduction to LGS Roofing
                </h2>
                <p className="text-lg">
                  Light Steel Gauge (LGS) roofing represents the cutting edge of
                  modern construction technology, offering unparalleled
                  durability, efficiency, and versatility.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={slideIn}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="mb-8 text-center text-3xl font-bold">
            Advantages of LGS Roofing
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                title: "Durability",
                description:
                  "Engineered to withstand extreme weather conditions and last for decades",
                image: roof2,
              },
              {
                title: "Lightweight",
                description:
                  "Reduces structural load while maintaining superior strength",
                image: roof3,
              },
              {
                title: "Eco-friendly",
                description:
                  "Sustainable materials and energy-efficient design",
                image: roof4,
              },
              {
                title: "Cost-effective",
                description:
                  "Long-term savings through durability and energy efficiency",
                image: roof5,
              },
            ].map((advantage, index) => (
              <Card
                key={index}
                className="transform overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={advantage.image}
                    alt={advantage.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="bg-white/90 p-6 backdrop-blur-sm">
                  <h3 className="mb-2 text-xl font-bold">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={zoomIn}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="mb-8 text-center text-3xl font-bold">
            Material Composition & Engineering
          </h2>
          <div className="rounded-xl bg-white/90 p-8 shadow-lg backdrop-blur-sm">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              <div>
                <Image
                  src={roof1}
                  alt="Engineering Process"
                  className="rounded-lg shadow-md"
                />
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-semibold">
                  Advanced Materials
                </h3>
                <p className="mb-6 text-gray-600">
                  LGS roofing utilizes high-strength, corrosion-resistant steel
                  that&apos;s precision-engineered for optimal performance and
                  longevity. Our materials undergo rigorous testing to ensure
                  they meet the highest industry standards.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                    <span>High-tensile steel core</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                    <span>Zinc-aluminum coating</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                    <span>UV-resistant finish</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        <section className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Comparison with Traditional Roofing
          </h2>
          <Tabs defaultValue="lgs" className="w-full">
            <TabsList className="mb-6 w-full justify-center">
              <TabsTrigger value="lgs" className="px-8 py-3">
                LGS Roofing
              </TabsTrigger>
              <TabsTrigger value="traditional" className="px-8 py-3">
                Traditional Roofing
              </TabsTrigger>
            </TabsList>
            <TabsContent value="lgs">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <Image
                      src={roof2}
                      alt="LGS Roofing"
                      className="rounded-lg shadow-md"
                    />
                    <div>
                      <h3 className="mb-4 text-2xl font-semibold">
                        LGS Roofing Benefits
                      </h3>
                      <ul className="space-y-4">
                        <li className="flex items-center space-x-3">
                          <span className="h-2 w-2 rounded-full bg-green-500"></span>
                          <span>Lightweight yet incredibly durable</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <span className="h-2 w-2 rounded-full bg-green-500"></span>
                          <span>Quick and efficient installation</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <span className="h-2 w-2 rounded-full bg-green-500"></span>
                          <span>Superior energy efficiency</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <span className="h-2 w-2 rounded-full bg-green-500"></span>
                          <span>Minimal maintenance required</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="traditional">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <Image
                      src={woodroof}
                      alt="Traditional Roofing"
                      className="rounded-lg shadow-md"
                    />
                    <div>
                      <h3 className="mb-4 text-2xl font-semibold">
                        Traditional Roofing Characteristics
                      </h3>
                      <ul className="space-y-4">
                        <li className="flex items-center space-x-3">
                          <span className="h-2 w-2 rounded-full bg-red-500"></span>
                          <span>Heavy materials increase structural load</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <span className="h-2 w-2 rounded-full bg-red-500"></span>
                          <span>Extended installation timeframe</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <span className="h-2 w-2 rounded-full bg-red-500"></span>
                          <span>Inconsistent energy efficiency</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <span className="h-2 w-2 rounded-full bg-red-500"></span>
                          <span>Frequent maintenance needed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={slideIn}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="mb-8 text-center text-3xl font-bold">
            Installation Process
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                step: "Preparation",
                description:
                  "Site evaluation and preparation of the base structure",
                image: roof3,
              },
              {
                step: "Frame Assembly",
                description: "Precision assembly of the LGS framework",
                image: roof2,
              },
              {
                step: "Roofing Installation",
                description: "Final installation and quality inspection",
                image: roof4,
              },
            ].map((step, index) => (
              <Card
                key={index}
                className="transform overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    width={400}
                    height={300}
                    src={step.image}
                    alt={step.step}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="bg-white/90 p-6 backdrop-blur-sm">
                  <h3 className="mb-2 text-xl font-bold">
                    Step {index + 1}: {step.step}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <section className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">
            FAQs & Common Concerns
          </h2>
          <div className="mx-auto max-w-3xl rounded-xl bg-white/90 p-8 shadow-lg backdrop-blur-sm">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="rounded-lg border px-4">
                <AccordionTrigger className="text-lg font-semibold">
                  Is LGS roofing suitable for all climates?
                </AccordionTrigger>
                <AccordionContent className="pt-2 text-gray-600">
                  Yes, LGS roofing is engineered to excel in various climate
                  conditions. Its design accounts for thermal expansion, wind
                  resistance, and load-bearing capabilities, making it suitable
                  for everything from hot desert climates to areas with heavy
                  snowfall.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="rounded-lg border px-4">
                <AccordionTrigger className="text-lg font-semibold">
                  How long does LGS roofing last?
                </AccordionTrigger>
                <AccordionContent className="pt-2 text-gray-600">
                  With proper installation and minimal maintenance, LGS roofing
                  systems typically last 50+ years. The high-quality materials
                  and precision engineering ensure exceptional longevity
                  compared to traditional roofing solutions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="rounded-lg border px-4">
                <AccordionTrigger className="text-lg font-semibold">
                  Is LGS roofing more expensive than traditional roofing?
                </AccordionTrigger>
                <AccordionContent className="pt-2 text-gray-600">
                  While the initial investment may be higher, LGS roofing
                  provides superior long-term value through:
                  <ul className="mt-2 list-disc pl-5">
                    <li>Reduced maintenance costs</li>
                    <li>Lower energy bills</li>
                    <li>Extended lifespan</li>
                    <li>Increased property value</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="rounded-xl bg-white/90 p-12 text-center shadow-lg backdrop-blur-sm"
        >
          <h2 className="mb-6 text-3xl font-bold">
            Ready to Transform Your Roofing?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600">
            Contact us today for a free consultation and discover how LGS
            roofing can benefit your project.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="h-auto bg-blue-600 px-8 py-6 text-lg hover:bg-blue-700"
            >
              Request a Quote
            </Button>
          </Link>
        </motion.section>
      </main>
    </div>
  );
}
