"use client";
import { motion } from "motion/react";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="bg-primary py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold md:text-6xl">
              Ready to Start Your
              <br />
              <span className="text-yellow-500">Modular Project?</span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-white/90 md:text-2xl">
              Join the construction revolution. Experience faster delivery,
              superior quality, and significant cost savings with our modular
              construction solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* CTA Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8 rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
                <h3 className="mb-4 text-2xl font-bold">
                  Why Choose PristiqBuild for Modular Construction?
                </h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                    <span>State-of-the-art manufacturing facilities</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                    <span>Expert engineering and design team</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                    <span>Proven track record across Nigeria</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                    <span>Comprehensive project management</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                    <span>Post-construction support and maintenance</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <Link href="/contact">
                  <button className="flex w-full transform items-center justify-center gap-3 rounded-lg bg-yellow-500 px-8 py-4 text-xl font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-600">
                    Start Your Modular Project
                    <ArrowRight className="h-6 w-6" />
                  </button>
                </Link>

                <Link href="/contact">
                  <button className="hover:text-primary w-full rounded-lg border-2 border-white px-8 py-4 text-xl font-bold text-white transition-all duration-300 hover:bg-white">
                    Request Free Consultation
                  </button>
                </Link>
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
              <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
                <h3 className="mb-6 text-2xl font-bold">Get in Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500">
                      <Phone className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <p className="font-semibold">Call Us</p>
                      <p className="text-white/80">+234 708 718 3815</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500">
                      <Mail className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <p className="font-semibold">Email Us</p>
                      <p className="text-white/80">info@pristiqbuild.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500">
                      <MapPin className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <p className="font-semibold">Visit Us</p>
                      <p className="text-white/80">First floor, Murjanatu House, 1 Zambezi Crescent, Wuse, Abuja</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
                <h3 className="mb-4 text-2xl font-bold">
                  Project Inquiry Form
                </h3>
                <p className="mb-6 text-white/80">
                  Tell us about your project and we&apos;ll get back to you
                  within 24 hours
                </p>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-lg border border-white/30 bg-white/20 px-4 py-3 text-white placeholder-white/60 focus:border-yellow-500 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-lg border border-white/30 bg-white/20 px-4 py-3 text-white placeholder-white/60 focus:border-yellow-500 focus:outline-none"
                  />
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full resize-none rounded-lg border border-white/30 bg-white/20 px-4 py-3 text-white placeholder-white/60 focus:border-yellow-500 focus:outline-none"
                  ></textarea>
                  <Link href="/contact">
                    <button className="w-full rounded-lg bg-yellow-500 px-6 py-3 font-bold text-black transition-colors duration-300 hover:bg-yellow-600">
                      Send Message
                    </button>
                  </Link>
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
            <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
              <h3 className="mb-4 text-2xl font-bold">
                Don&apos;t Wait - Start Building Tomorrow Today
              </h3>
              <p className="mb-6 text-lg text-white/90">
                Join hundreds of satisfied clients who have transformed their
                construction projects with modular solutions
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/contact">
                  <button className="transform rounded-lg bg-yellow-500 px-8 py-4 text-lg font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-600">
                    Get Started Now
                  </button>
                </Link>
                <Link href="/projects">
                  <button className="hover:text-primary rounded-lg border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-white">
                    View Our Portfolio
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
