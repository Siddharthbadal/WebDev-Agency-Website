"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaGithub, FaGithubSquare } from "react-icons/fa";


export default function Intro() {
  return (
            <section className="max-w-[55rem] mb-28 text-center sm:mb-0 scroll-mt-28" 
            id="home"
            >
                <div className="flex items-center justify-center">
                    <div className="relative">
                        <motion.div 
                            initial={{ opacity: 0, scale:0}}
                            animate={{ opacity: 1, scale:1}}
                            transition={{
                                type: "spring",
                                stiffness:25,
                                delay:0.2,
                                duration: 0.5,
                            }}
                        >
                            <Image 
                                src="https://res.cloudinary.com/db4n4ciqv/image/upload/t_better/v1735998757/man-in-work_ju2vaj.png"
                            alt="image"
                            width={800}
                            height={800}
                            quality={100}
                            priority= {true}
                            className="w-64 h-64 object-cover rounded-full shadow-xl"
                            />

                        </motion.div>

                    </div>
                </div>

                <motion.h1 className="text-gray-700 text-center text-2xl mb-10 mt-4 px-4 font-medium leading-[1.5] tracking-wider sm:text-4xl"
                initial={{ opacity:0, y:100}}
                animate={{ opacity:1, y:0 }}
                >   
                    <span className="text-lg text-gray-400 font-bold">We are Weber Dever.</span> <br />
                    Get your business an <span className="font-bold">online presence</span> with us.    <br />
                    Let <span className="font-bold">new customers</span> find you everywhere. <br />
                    Open the doors for the new <span className="font-bold">opportunities.</span>.
                </motion.h1>

                <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-semibold"
                initial={{ opacity:0, y:100}}
                animate={{ opacity:1, y:0 }}
                transition={{
                    delay:0.1,
                }}
                >
                    <Link href="#contact" className="bg-gray-700 text-white/80 text-[20px] px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:text-white active:scale-105 transition tracking-wider">
                        Contact us here
                            <BsArrowRight  className="opacity-70 group-hover:translate-x-1 transition" />
                    </Link>
                    <Link href="#contact" className="bg-white text-gray-800 text-[20px] px-7 py-3 flex items-center gap-2 rounded-full border border-black/10 hover:bg-gray-50   focus:scale-110 hover:scale-110   tracking-wider">
                            LinkedIn       
                    </Link>
                    <Link href={"htps://www.x.com/siddbadal"} className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full border-black/10 hover:bg-gray-100 focus:scale-110 hover:scale-[1.05] ">
                            <BsTwitterX />
                    </Link>
                    <Link href={"htps://www.x.com/siddbadal"} className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.35rem] border-black/10 hover:bg-gray-100 focus:scale-110 hover:scale-110 ">
                            <FaGithubSquare  />
                    </Link>
                </motion.div>
            </section>
  )
}

