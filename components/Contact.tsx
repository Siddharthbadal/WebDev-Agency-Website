"use client"

import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

export default function Contact() {
    const { pending } = useFormStatus();
  return (
    <motion.section 
        className="text-center mt-24 mb-28 sm:mb-28 w-[min(100%, 38rem)]" 
        id="contact" 
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration:1
    }}
    viewport={{
        once: true
    }}
    >
        <SectionHeading >Contact</SectionHeading>
        <p className="text-xl text-gray-600 dark:text-gray-200 ">Contact me here at {" "} 
            <Link 
                href={'mailto:indiandevcom@gmail.com'}    className="underline dark:text-gray-200">
                    weber.dever@abcd.com
            </Link> 
            {" "} or fill the form.
        </p>

        <form action={async (formData) =>{
                toast.success("Email Send. Thank You!")
                
        }} 
            className="mt-4 flex flex-col gap-2">
            <input type="email" name="senderEmail" required maxLength={150} placeholder="Your Email" className=" text-gray-700 h-14 rounded-lg border border-gray-600"/>
            <textarea name="senderMessage" id="" required maxLength={350} placeholder="Your Message"  className="text-gray-700 h-52 my-3 rounded-lg border border-gray-600"/>
            <button type="submit"  className="group h-[3rem] w-[8rem] text-white/80 bg-gray-600 rounded-full outline-none transition-all flex items-center justify-center gap-x-2 hover:bg-gray-800 hover:text-white disabled:scale-100 disabled:bg-opacity-75" disabled={pending}>
            { pending ? <div className="h-5 w-5 animate-spin rounded-full border-b-2  border-white">
            </div> : (
                <>
                Submit {" "}
                <FaPaperPlane  
                    className="text-sm opacity-60 
                        transition-all
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                    "  />
                
                </>
            )}
                
                {" "}
            </button>
        </form>
    </motion.section>
  )
}
