"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import roof1 from "../../../assets/roofs/roof1.jpg";
import roof2 from "../../../assets/roofs/roof2.jpg";
import roof3 from "../../../assets/roofs/roof3.png";
import roof4 from "../../../assets/roofs/roof4.jpg";
import roof5 from "../../../assets/roofs/roof5.jpg";
import woodroof from "../../../assets/roofs/wood roof.jpg";
import Image from "next/image"
import Link from "next/link"



const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const slideIn = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
}

const zoomIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
}

export default function LGSRoofingContent() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <div className="min-h-screen bg-gradient-moving animate-background-shine">
      <header className="bg-white/80 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-6 py-8">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold text-gray-800 text-center"
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
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="relative rounded-xl overflow-hidden mb-8 shadow-2xl">
            <Image 
              src={roof1}
              alt="Modern Roofing"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Introduction to LGS Roofing</h2>
                <p className="text-lg">
                  Light Steel Gauge (LGS) roofing represents the cutting edge of modern construction technology, offering
                  unparalleled durability, efficiency, and versatility.
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
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Advantages of LGS Roofing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Durability",
                description: "Engineered to withstand extreme weather conditions and last for decades",
                image: roof2
              },
              {
                title: "Lightweight",
                description: "Reduces structural load while maintaining superior strength",
                image: roof3
              },
              {
                title: "Eco-friendly",
                description: "Sustainable materials and energy-efficient design",
                image: roof4
              },
              {
                title: "Cost-effective",
                description: "Long-term savings through durability and energy efficiency",
                image: roof5
              }
            ].map((advantage, index) => (
              <Card key={index} className="overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="h-48 overflow-hidden">
                  <Image 
                    src={advantage.image}
                    alt={advantage.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 bg-white/90 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
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
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Material Composition & Engineering</h2>
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Image 
                  src={roof1}
                  alt="Engineering Process"
                  className="rounded-lg shadow-md"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Advanced Materials</h3>
                <p className="text-gray-600 mb-6">
                  LGS roofing utilizes high-strength, corrosion-resistant steel that&apos;s precision-engineered for optimal
                  performance and longevity. Our materials undergo rigorous testing to ensure they meet the highest
                  industry standards.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>High-tensile steel core</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Zinc-aluminum coating</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>UV-resistant finish</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Comparison with Traditional Roofing</h2>
          <Tabs defaultValue="lgs" className="w-full">
            <TabsList className="w-full justify-center mb-6">
              <TabsTrigger value="lgs" className="px-8 py-3">LGS Roofing</TabsTrigger>
              <TabsTrigger value="traditional" className="px-8 py-3">Traditional Roofing</TabsTrigger>
            </TabsList>
            <TabsContent value="lgs">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Image 
                      src={roof2}
                      alt="LGS Roofing"
                      className="rounded-lg shadow-md"
                    />
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">LGS Roofing Benefits</h3>
                      <ul className="space-y-4">
                        <li className="flex items-center space-x-3">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span>Lightweight yet incredibly durable</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span>Quick and efficient installation</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span>Superior energy efficiency</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Image 
                      src={woodroof}
                      alt="Traditional Roofing"
                      className="rounded-lg shadow-md"
                    />
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Traditional Roofing Characteristics</h3>
                      <ul className="space-y-4">
                        <li className="flex items-center space-x-3">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          <span>Heavy materials increase structural load</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          <span>Extended installation timeframe</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          <span>Inconsistent energy efficiency</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
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
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Installation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "Preparation",
                description: "Site evaluation and preparation of the base structure",
                image: roof3
              },
              {
                step: "Frame Assembly",
                description: "Precision assembly of the LGS framework",
                image: roof2
              },
              {
                step: "Roofing Installation",
                description: "Final installation and quality inspection",
                image: roof4
              }
            ].map((step, index) => (
              <Card key={index} className="overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="h-48 overflow-hidden">
                  <Image 
                   width={400}
                   height={300}
                    src={step.image}
                    alt={step.step}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 bg-white/90 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-2">Step {index + 1}: {step.step}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">FAQs & Common Concerns</h2>
          <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-4">
                <AccordionTrigger className="text-lg font-semibold">
                  Is LGS roofing suitable for all climates?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  Yes, LGS roofing is engineered to excel in various climate conditions. Its design accounts for thermal
                  expansion, wind resistance, and load-bearing capabilities, making it suitable for everything from hot
                  desert climates to areas with heavy snowfall.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border rounded-lg px-4">
                <AccordionTrigger className="text-lg font-semibold">
                  How long does LGS roofing last?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  With proper installation and minimal maintenance, LGS roofing systems typically last 50+ years. The
                  high-quality materials and precision engineering ensure exceptional longevity compared to traditional
                  roofing solutions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border rounded-lg px-4">
                <AccordionTrigger className="text-lg font-semibold">
                  Is LGS roofing more expensive than traditional roofing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  While the initial investment may be higher, LGS roofing provides superior long-term value through:
                  <ul className="list-disc pl-5 mt-2">
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
          className="text-center bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-12"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Roofing?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how LGS roofing can benefit your project.
          </p>
          <Link href="/contact">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 h-auto"
          >
            Request a Quote
          </Button>
          </Link>
          
        </motion.section>
      </main>
    </div>
  )
}