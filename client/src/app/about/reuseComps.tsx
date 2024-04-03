import Link from "next/link";
import { motion } from "framer-motion";
export const introLeftVariants = {
  hide: {
    opacity: 0,
    x: -300,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
export const introRightVariants = {
  hide: {
    opacity: 0,
    x: 300,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
export const introBottomVariants = {
  hide: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
export const introTopVariants = {
  hide: {
    opacity: 0,
    y: -300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
export function CardSection() {
  return (
    <section className="w-full my-6 justify-center items-center flex">
      <div className="w-[80%] flex  items-center justify-between max-lg:flex-col">
        <motion.div
          className="w-[40%] h-[300px] p-4 border shadow-lg flex m-6  flex-col items-start justify-center max-lg:mb-5 max-lg:w-full"
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introLeftVariants}
        >
          <h3 className="font-semibold text-3xl">Careers Link</h3>
          <p className=" my-4">
            Join the Pristiq team and embark on a rewarding career in the
            construction industry. Explore opportunities to contribute your
            skills and expertise to our dynamic team.
          </p>
          <button className="outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm text-white max-md:text-white font-medium bg-acc p-2 px-3 rounded-md border-2 border-transparent hover:text-acc hover:bg-transparent hover:border-acc transition duration-300">
            View Openings
          </button>
        </motion.div>

        <motion.div
          className="w-[40%] h-[300px] p-4 border shadow-lg flex  flex-col items-start justify-center max-lg:mb-5 max-lg:w-full"
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introRightVariants}
        >
          <h3 className="font-semibold text-3xl">Make Inquiries</h3>
          <p className=" my-4">
            Have questions or inquiries? Get in touch with us to discuss your
            construction needs and discover how PristiqBuild can bring your
            vision to life.
          </p>
          <Link
            href="/contact"
            className="outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm text-white max-md:text-white font-medium bg-acc p-2 px-3 rounded-md border-2 border-transparent hover:text-acc hover:bg-transparent hover:border-acc transition duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
