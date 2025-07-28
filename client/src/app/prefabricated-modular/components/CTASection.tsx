'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Start Your
              <br />
              <span className="text-yellow-500">Modular Project?</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join the construction revolution. Experience faster delivery, superior quality, and significant cost savings with our modular construction solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* CTA Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  Why Choose PristiqBuild for Modular Construction?
                </h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>State-of-the-art manufacturing facilities</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Expert engineering and design team</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Proven track record across Nigeria</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Comprehensive project management</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Post-construction support and maintenance</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                  Start Your Modular Project
                  <ArrowRight className="w-6 h-6" />
                </button>
                
                <button className="w-full border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300">
                  Request Free Consultation
                </button>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="font-semibold">Call Us</p>
                      <p className="text-white/80">+234 801 234 5678</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="font-semibold">Email Us</p>
                      <p className="text-white/80">info@pristiqbuild.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="font-semibold">Visit Us</p>
                      <p className="text-white/80">Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Project Inquiry Form
                </h3>
                <p className="text-white/80 mb-6">
                  Tell us about your project and we'll get back to you within 24 hours
                </p>
                
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-yellow-500"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-yellow-500"
                  />
                  <textarea 
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-yellow-500 resize-none"
                  ></textarea>
                  <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                    Send Message
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Don't Wait - Start Building Tomorrow Today
              </h3>
              <p className="text-lg text-white/90 mb-6">
                Join hundreds of satisfied clients who have transformed their construction projects with modular solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                  Get Started Now
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">
                  View Our Portfolio
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 