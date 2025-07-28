'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much faster is modular construction compared to traditional methods?",
      answer: "Modular construction typically reduces project timelines by 30-50%. While traditional construction takes 18-26 weeks, modular projects can be completed in 10-15 weeks. This is achieved through parallel manufacturing and site preparation, plus streamlined on-site assembly."
    },
    {
      question: "What types of buildings can be constructed using modular methods?",
      answer: "Modular construction is suitable for virtually any building type including residential homes, office buildings, hotels, schools, hospitals, and industrial facilities. We specialize in projects ranging from single-family homes to multi-story commercial complexes and specialized industrial facilities."
    },
    {
      question: "How does the quality of modular buildings compare to traditional construction?",
      answer: "Modular buildings often exceed traditional construction quality due to factory-controlled environments, precision manufacturing, and rigorous quality control processes. Components are built to exact specifications with consistent materials and finishes, resulting in superior structural integrity and finish quality."
    },
    {
      question: "Are modular buildings more expensive than traditional construction?",
      answer: "Modular construction typically costs 10-30% less than traditional methods due to reduced labor costs, minimized waste, optimized material usage, and faster completion times. The controlled factory environment also reduces weather-related delays and material damage."
    },
    {
      question: "Can modular buildings be customized to specific design requirements?",
      answer: "Absolutely! Modular construction offers extensive customization options. We can accommodate custom floor plans, architectural styles, interior finishes, and specialized features. Our design team works closely with clients to create unique solutions that meet their specific needs and preferences."
    },
    {
      question: "What are the environmental benefits of modular construction?",
      answer: "Modular construction is significantly more environmentally friendly than traditional methods. It produces up to 90% less construction waste, uses energy-efficient materials, reduces carbon footprint through shorter construction times, and often incorporates sustainable design features. Many of our projects achieve LEED certification."
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
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-3 px-6 rounded-lg transition-colors duration-300">
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