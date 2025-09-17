import Link from "next/link";
import { motion } from "motion/react";
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
    <section className="my-6 flex w-full items-center justify-center">
      <div className="flex w-[80%] items-center justify-between max-lg:flex-col">
        <motion.div
          className="m-6 flex h-[300px] w-[40%] flex-col items-start justify-center border p-4 shadow-lg max-lg:mb-5 max-lg:w-full"
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introLeftVariants}
        >
          <h3 className="text-3xl font-semibold">Careers Link</h3>
          <p className="my-4">
            Join the Pristiq team and embark on a rewarding career in the
            construction industry. Explore opportunities to contribute your
            skills and expertise to our dynamic team.
          </p>
          <button className="focus-visible:outline-pri bg-acc hover:text-primary hover:border-acc rounded-md border-2 border-transparent p-2 px-3 text-sm font-medium tracking-widest text-white uppercase outline-2 transition duration-300 hover:bg-transparent max-md:text-white">
            View Openings
          </button>
        </motion.div>

        <motion.div
          className="flex h-[300px] w-[40%] flex-col items-start justify-center border p-4 shadow-lg max-lg:mb-5 max-lg:w-full"
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introRightVariants}
        >
          <h3 className="text-3xl font-semibold">Make Inquiries</h3>
          <p className="my-4">
            Have questions or inquiries? Get in touch with us to discuss your
            construction needs and discover how PristiqBuild can bring your
            vision to life.
          </p>
          <Link
            href="/contact"
            className="focus-visible:outline-pri bg-acc hover:text-primary hover:border-acc rounded-md border-2 border-transparent p-2 px-3 text-sm font-medium tracking-widest text-white uppercase outline-2 transition duration-300 hover:bg-transparent max-md:text-white"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
