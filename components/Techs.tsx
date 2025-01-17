"use client"

import { techsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import SectionDivider from "./SectionDivider";
import { motion } from "framer-motion";

const fadInAnimationVariants = {
    initial :{
        opacity:0,
        y:100
    },
    animate:(index:number)=>({
        opacity:1,
        y:0,
        transition:{
            delay:0.05 * index,
        },
    }),
    

}

export default function Techs() {
  return (
      <section className="mb-2 max-w-[55rem] mt-20 scroll-mt-28 text-center sm:mb-40" id="techs">
        <SectionDivider />
        <SectionHeading>Techs</SectionHeading>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-600">
            {
                techsData.map((skill, index)=>(
                    <motion.li 
                        key={index}
                        className="bg-white border-gray-700 rounded-xl py-3 px-5 dark:text-gray-200 dark:bg-gray-600"
                        variants={fadInAnimationVariants}
                        initial="initial"
                        whileInView={"animate"}
                        viewport={{
                            once:true
                        }}
                        custom={index}
                    >
                            {skill}
                    </motion.li>
                ))
            }
        </ul>
    </section>
  )
}
