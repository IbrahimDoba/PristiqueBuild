"use client";
import { motion } from "motion/react";
import { PenTool, Factory, Wrench, LucideIcon } from "lucide-react";
import Image from "next/image";

interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const ProcessOverview = () => {
  const steps: ProcessStep[] = [
    {
      icon: PenTool,
      title: "Design & Engineering",
      description:
        "Our expert team creates detailed architectural and engineering plans, ensuring every component is precisely designed for optimal functionality and aesthetics. We use advanced 3D modeling and BIM technology to visualize the complete project before manufacturing begins.",
      color: "bg-blue-500",
    },
    {
      icon: Factory,
      title: "Factory Manufacturing",
      description:
        "Components are precision-manufactured in our climate-controlled facilities using state-of-the-art equipment. This controlled environment ensures consistent quality, reduces waste, and allows for rigorous quality control at every stage of production.",
      color: "bg-green-500",
    },
    {
      icon: Wrench,
      title: "Site Assembly",
      description:
        "Pre-manufactured components are transported to the site and assembled with precision. This streamlined process minimizes construction time, reduces site disruption, and ensures the highest quality finish while maintaining strict safety standards.",
      color: "bg-yellow-500",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-primary mb-6 text-4xl font-bold md:text-5xl">
              Our 3-Step Process
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              From concept to completion, our streamlined process ensures
              quality, efficiency, and precision at every stage
            </p>
          </motion.div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
              >
                {/* Icon and Number */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div
                      className={`h-24 w-24 ${step.color} flex items-center justify-center rounded-full shadow-lg`}
                    >
                      <step.icon className="h-12 w-12 text-white" />
                    </div>
                    <div className="bg-primary absolute -top-4 -right-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-primary mb-4 text-3xl font-bold">
                    {step.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>

                {/* Process Image */}
                <div className="flex-1">
                  <div className="rounded-2xl bg-white p-6 shadow-lg">
                    <Image
                      src={`/lgs/lgs${index + 3}.jpeg`}
                      alt={step.title}
                      width={500}
                      height={300}
                      className="h-64 w-full rounded-xl object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 rounded-2xl bg-white p-8 shadow-lg"
          >
            <h3 className="text-primary mb-8 text-center text-2xl font-bold">
              Timeline Comparison
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h4 className="mb-4 text-xl font-bold text-gray-800">
                  Traditional Construction
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Foundation</span>
                    <span className="font-semibold">4-6 weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Structure</span>
                    <span className="font-semibold">8-12 weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Finishing</span>
                    <span className="font-semibold">6-8 weeks</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex items-center justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-red-600">18-26 weeks</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-xl font-bold text-gray-800">
                  Modular Construction
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">
                      Design & Manufacturing
                    </span>
                    <span className="font-semibold">6-8 weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Site Preparation</span>
                    <span className="font-semibold">2-3 weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Assembly</span>
                    <span className="font-semibold">2-4 weeks</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex items-center justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-green-600">10-15 weeks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;
