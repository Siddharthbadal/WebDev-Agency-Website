"use client"

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div className='bg-gray-200 my-16 h-2 w-24 rounded-full hidden sm:block text-center mx-auto dark:bg-opacity-25'
    initial={{ opacity:0, y:100}}
    animate={{ opacity: 1, y:0}}
    transition={{ delay : 0.125}}
    >

    </motion.div>
  )
}
