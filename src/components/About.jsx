import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";

function About() {
    return (
        <div>
            <div data-scroll data-scroll-speed="-.09" className="w-full p-20 bg-[#CDEA68] rounded-t-3xl text-zinc-800">
                <h1 className='text-[3.6vw] leading-[4.2vw] tracking-tight pr-16  -ml-10'>
                    Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
                </h1>
                <div className="w-full border-t-[1px] mt-20 border-[#a1b562] flex gap-5">
                <div className="w-1/2">
                    <h1 className='text-7xl -ml-8 mt-5'>Our approach:
                    </h1>
                    <button className='flex uppercase gap-8 items-center px-9 py-8 bg-slate-900 text-slate-100 rounded-full h-[2px] font-medium mt-10 -ml-8'>Read More
                    <span className='w-2 text-lg'>
                    <FaArrowCircleRight/>
                    </span>
                    </button>
                </div>
                <div className="h-[68vh] w-1/2  mt-9 rounded-xl overflow-hidden">
                    <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt=""/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About