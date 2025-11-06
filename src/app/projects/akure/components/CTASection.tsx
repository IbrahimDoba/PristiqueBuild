import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ready for Your Large-Scale Roofing Project?
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              This project showcases Pristiq Build&apos;s ability to handle large-scale 
              roofing systems with unmatched technical precision — blending innovation, 
              sustainability, and craftsmanship to deliver results that last a lifetime.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Whether you&apos;re building a castle-style residence or need a robust 
              roofing solution, we have the expertise to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:col-span-2">
            <Link href="/contact">
              <div className="bg-white p-3 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-40 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/roofs/roof02.jpg"
                    alt="Future Pristiq Build projects"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2">
                    Ready for your next project?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Contact Pristiq Build today to discuss your roofing needs
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

