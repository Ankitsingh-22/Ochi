import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Landing() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.8" className=' w-full h-screen bg-zinc-900 pt-1'>
      <div className="textstrc mt-16 px-20">
        <div className="flex gap-40">
        <div className="division1">
        <div className="masker">
          <h1 className=' text-8xl leading-[6.5vw] tracking-tighter font-medium'>WE CREATE</h1>
        </div>
        <div className="masker">
          <h1 className=' text-8xl leading-[6.5vw] tracking-tighter font-medium'>EYE-OPENING</h1>
          <div className="masker">
            <h1 className=' text-8xl leading-[6.5vw] tracking-tighter font-medium'>PRESENTATIONS</h1>
          </div>
        </div>
        </div>
        <div className="division2 relative -mb-1 w-[330px] justify-center top-2 flex items-center overflow-hidden">
          <img className='relative z-10' src="src\img\pngwing.com.png"/>
          <video className='absolute w-[305px] top-3' src='https://ochi.design/wp-content/uploads/2022/05/Main-HQ-1.mp4' autoPlay loop muted></video>
        </div>
        </div>
        <div className="border-t-[1.2px] mt-24 bg-slate-800 w-full"></div>
        <div className="btbd group w-40 h-10 text-wrap flex justify-center items-center border-[1px] rounded-2xl mt-5 ml-[550px] hover:bg-slate-200 hover:text-black cursor-pointer">

          <div className="stbtn group-hover:font-medium flex gap-2 ju pt-6 pb-6 font-light text-center items-center "> START NOW
            <FaArrowRightLong />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing