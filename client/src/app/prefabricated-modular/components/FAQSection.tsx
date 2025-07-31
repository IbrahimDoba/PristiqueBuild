'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { downloadModularBrochure } from '@/lib/downloadUtils';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is modular construction?",
      answer: "Modular construction is a building method where structures are built in sections (modules) in a controlled factory environment, then transported to the construction site for assembly. This approach offers faster construction times, better quality control, and reduced waste compared to traditional building methods."
    },
    {
      question: "How long does modular construction take?",
      answer: "Modular construction typically reduces project timelines by 30-50% compared to traditional construction. While site preparation happens simultaneously with module fabrication, the actual assembly on-site can be completed in days or weeks rather than months."
    },
    {
      question: "Is modular construction as durable as traditional construction?",
      answer: "Yes, modular buildings are built to the same or higher standards as traditional construction. They must meet all local building codes and can be designed to withstand the same environmental conditions. Many modular buildings are actually more durable due to the controlled factory environment and precise engineering."
    },
    {
      question: "Can modular buildings be customized?",
      answer: "Absolutely! Modular construction offers extensive customization options. From floor plans and finishes to exterior designs and interior layouts, modular buildings can be tailored to meet specific requirements and aesthetic preferences."
    },
    {
      question: "What are the cost benefits of modular construction?",
      answer: "Modular construction typically offers 10-20% cost savings compared to traditional construction due to reduced labor costs, faster completion times, less material waste, and better quality control. Additionally, earlier occupancy can generate revenue sooner."
    },
    {
      question: "Are modular buildings energy efficient?",
      answer: "Yes, modular buildings can be highly energy efficient. The controlled factory environment allows for precise installation of insulation, windows, and HVAC systems. Many modular buildings exceed energy efficiency standards and can be designed to achieve LEED certification."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to the most common questions about modular construction
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
                className="bg-gray-50 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-primary pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-primary" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-primary" />
                    )}
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">
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
            className="mt-16 bg-primary rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-white/90 mb-6">
              Our expert team is here to help you understand how modular construction can benefit your project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                Schedule a Consultation
              </button>
              <button 
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-3 px-6 rounded-lg transition-colors duration-300"
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