"use client"

import Image from "next/image"
import { projectsData } from "@/lib/data"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

// type ProjectsProps = {
//     title:string;
//     description:string;
//     tags:string[];
//     imageUrl:string;
// }

type ProjectsProps = (typeof projectsData)[number]

export default function Project({
    title,
    description,
    tags,
    imageUrl
}: ProjectsProps) 
{
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target:ref,
    offset:["0 1", "1.33 1"],
  });  
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref} 
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="mb-3 sm:mb-8 last:mb-0 group"
    >
        <section                     
            className="bg-gray-100 max-w-[45rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[22rem] rounded-lg group-even:pl-8 hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
              <div className="pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-2 sm:max-w-[50%] flex flex-col h-full group-even:ml-[20rem]">
                    <h3 className=" text-2xl font-semibold leading-relaxed tracking-wider text-gray-700 dark:text-white/70">{title}

                    </h3>
                    <p className="text-md leading-relaxed tracking-wider text-gray-600 dark:text-white/70">{description}</p>
                    <ul className="text-gray-600 flex flex-wrap mt-4 gap-2 sm:mt-auto">
                            {tags.map((tag, index) =>(
                                <li key={index} 
                                className="bg-gray-700/[0.7] px-3 py-1 uppercase tracking-wider text-white/80 rounded-full dark:text-white/70">
                                    {tag}
                                </li>
                            ))}
                    </ul>
              </div>

              <Image 
                src={imageUrl}
                alt={'ProjectImg'}
                width={250}
                height={250}
                quality={99}
                className="absolute hidden sm:block top-8 -right-40 w-[30rem] rounded-t-lg shadow-2xl 
                transition
                group-hover:scale-[1.04]                
                group-hover:-translate-x-3 group-hover:translate-y-3 
                group-hover:-rotate-2 

                group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 
                group-even:group-hover:rotate-2 
                
                group-even:right-[initial]  
                group-even:-left-40 "
                />
        </section>
    </motion.div>
  )
}
