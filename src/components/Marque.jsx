import { motion } from 'framer-motion'
import React from 'react'

function Marque() {
  return (
    <div>
        <div data-scroll data-scroll-speed=".01" className="w-full pb-20 py-10 bg-green-800 rounded-t-3xl">
            <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap ">
                <motion.h1 initial = {{x: "0"}} animate = {{x: "-100%"}} transition={{repeat:Infinity, ease:"linear",duration: 10}} className='text-[12vw] leading-none font-semibold mb-2 -mt-2 pr-12'>WE ARE OCHI</motion.h1>
                <motion.h1 initial = {{x: "0"}} animate = {{x: "-100%"}} transition={{repeat:Infinity, ease:"linear",duration: 10}} className='text-[12vw] leading-none font-semibold mb-2 -mt-2 pr-12'>WE ARE OCHI</motion.h1>
                <motion.h1 initial = {{x: "0"}} animate = {{x: "-100%"}} transition={{repeat:Infinity, ease:"linear",duration: 10}} className='text-[12vw] leading-none font-semibold mb-2 -mt-2 pr-12'>WE ARE OCHI</motion.h1>
            </div>
        </div>
    </div>
  )
}

export default Marque