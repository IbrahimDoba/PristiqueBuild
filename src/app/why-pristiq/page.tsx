"use client"

import { motion } from "motion/react"
import { CardSection } from "../about/reuseComps"

function WhyPristiqbuild() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const reasons = [
    {
      title: "The Approach",
      content:
        "We leverage cutting-edge technology to revolutionize construction, optimizing efficiency and elevating quality standards.",
    },
    {
      title: "The PristiqBuild Timeline",
      content:
        "Our streamlined processes ensure prompt project delivery without compromising quality, optimizing resource utilization.",
    },
    {
      title: "Flexible and Innovative Designs",
      content:
        "We collaborate closely with clients to create innovative designs that reflect their vision and exceed expectations.",
    },
    {
      title: "Reduce Inefficiencies",
      content:
        "Our advanced technologies and techniques minimize waste, optimize resources, and enhance project efficiency.",
    },
    {
      title: "Lower Overall Cost",
      content:
        "We provide cost-effective solutions without compromising on quality or sustainability, ensuring exceptional value.",
    },
    {
      title: "Mitigate Cost Overruns",
      content: "Our proactive approach to cost management and risk mitigation keeps your project on budget.",
    },
    {
      title: "Sustainability Mindset",
      content:
        "We implement eco-friendly practices and sustainable building solutions to minimize environmental impact.",
    },
    {
      title: "Dedication to Customer Satisfaction",
      content: "We prioritize exceeding customer expectations through transparency, communication, and responsiveness.",
    },
    {
      title: "Quality and Factory Precision Assured",
      content:
        "Our rigorous quality assurance protocols and factory-controlled processes guarantee exceptional quality and durability.",
    },
  ]

  return (
    <main className="overflow-x-hidden">
      <motion.section
        className="why-pristiq mx-auto min-h-[80vh] grid place-content-center text-center bg-altBg bg-fixed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black bg-white bg-opacity-60 p-2 rounded-xl">
          Why PristiqBuild?
        </h1>
      </motion.section>

      <section className="py-16">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            className={`text-center px-6 lg:px-10 py-8 flex flex-col items-center gap-4 ${index % 2 === 0 ? "bg-altBg" : ""}`}
            {...fadeIn}
          >
            <h2 className="text-lg md:text-xl lg:text-3xl font-bold text-gray-900">{reason.title}</h2>
            <p className="font-medium md:text-lg lg:text-xl lg:max-w-screen-lg text-black">{reason.content}</p>
          </motion.div>
        ))}
      </section>

      <CardSection />
    </main>
  )
}

export default WhyPristiqbuild

