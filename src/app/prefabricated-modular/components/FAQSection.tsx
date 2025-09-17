"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { downloadModularBrochure } from "@/lib/downloadUtils";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is modular construction?",
      answer:
        "Modular construction is a building method where structures are built in sections (modules) in a controlled factory environment, then transported to the construction site for assembly. This approach offers faster construction times, better quality control, and reduced waste compared to traditional building methods.",
    },
    {
      question: "How long does modular construction take?",
      answer:
        "Modular construction typically reduces project timelines by 30-50% compared to traditional construction. While site preparation happens simultaneously with module fabrication, the actual assembly on-site can be completed in days or weeks rather than months.",
    },
    {
      question:
        "Is modular construction as durable as traditional construction?",
      answer:
        "Yes, modular buildings are built to the same or higher standards as traditional construction. They must meet all local building codes and can be designed to withstand the same environmental conditions. Many modular buildings are actually more durable due to the controlled factory environment and precise engineering.",
    },
    {
      question: "Can modular buildings be customized?",
      answer:
        "Absolutely! Modular construction offers extensive customization options. From floor plans and finishes to exterior designs and interior layouts, modular buildings can be tailored to meet specific requirements and aesthetic preferences.",
    },
    {
      question: "What are the cost benefits of modular construction?",
      answer:
        "Modular construction typically offers 10-20% cost savings compared to traditional construction due to reduced labor costs, faster completion times, less material waste, and better quality control. Additionally, earlier occupancy can generate revenue sooner.",
    },
    {
      question: "Are modular buildings energy efficient?",
      answer:
        "Yes, modular buildings can be highly energy efficient. The controlled factory environment allows for precise installation of insulation, windows, and HVAC systems. Many modular buildings exceed energy efficiency standards and can be designed to achieve LEED certification.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-primary mb-6 text-4xl font-bold md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Get answers to the most common questions about modular
              construction
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-xl bg-gray-50"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-8 py-6 text-left transition-colors duration-300 hover:bg-gray-100"
                >
                  <h3 className="text-primary pr-4 text-lg font-semibold md:text-xl">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="text-primary h-6 w-6" />
                    ) : (
                      <ChevronDown className="text-primary h-6 w-6" />
                    )}
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <p className="leading-relaxed text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Additional Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-primary mt-16 rounded-2xl p-8 text-center text-white"
          >
            <h3 className="mb-4 text-2xl font-bold">Still Have Questions?</h3>
            <p className="mb-6 text-lg text-white/90">
              Our expert team is here to help you understand how modular
              construction can benefit your project
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="rounded-lg bg-yellow-500 px-6 py-3 font-bold text-black transition-colors duration-300 hover:bg-yellow-600">
                Schedule a Consultation
              </button>
              <button
                className="hover:text-primary rounded-lg border-2 border-white px-6 py-3 font-bold text-white transition-colors duration-300 hover:bg-white"
                onClick={downloadModularBrochure}
              >
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
