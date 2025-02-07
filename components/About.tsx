"use client"

import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div 
        className="mb-28 max-w-[45rem] text-center leading-8 tracking-wide sm:mb-40 scroll-mt-28"
        initial={{ opacity:0, y:1000 }}
        animate={{ opacity:1, y:0 }}
        transition={{ delay:0.175}}
        id="about"

    >
        <SectionHeading>About Us</SectionHeading>
        <p className="mb-3 text-gray-600 text-xl dark:text-gray-200">
            We build <span className="font-semibold">web apps.</span> And help your  <span className="font-semibold">business grow. </span>
            we have worked for various clients <span className="font-semibold">accross the globe.</span>. We not only build and design websites, we create an <span className="font-semibold"> online presence</span> for your business in your market. 
        </p>
        <p className="mb-3 text-gray-600 text-xl dark:text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, aperiam.
        </p>
    </motion.div>
  )
}
