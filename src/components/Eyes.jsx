import React, { useEffect, useState } from 'react';
function Eyes() {

   const [rotate, SetRotate] = useState(0);
useEffect(() => {
window.addEventListener("mousemove", (e)=>{
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    let deltaX = mouseX - window.innerWidth/2;
    let deltaY = mouseY - window.innerHeight/2;
    
    var angle = Math.atan2(deltaX,deltaY) * (180/Math.PI);
    SetRotate(angle - 180);
   })
  })
 

  return (
    <div  className="eyes h-screen w-full overflow-hidden">
        <div data-scroll data-scroll-speed=".009" className="relative h-full w-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
          <div className="absolute flex top-1/2 left-1/2 gap-10 -translate-x-[50%] -translate-y-[50%]">
            <div className="w-[12vw] h-[12vw] bg-zinc-200 rounded-full justify-center items-center flex">
            <div className="w-2/3 h-2/3 bg-zinc-900 rounded-full flex justify-center items-center">
                <div  style={{transform:`rotate(${rotate}deg)`}} className="line w-full h-8 ">
                <div className="w-8 h-8 bg-zinc-100 rounded-full"></div>
                </div>
            </div>
            </div>
            <div className="w-[12vw] h-[12vw] bg-zinc-200 rounded-full flex justify-center items-center">
            <div className=" relative w-2/3 h-2/3 bg-zinc-900 rounded-full ">
            <div style={{transform:` translate(-50%,-50%) rotate(${rotate}deg)`}} className=" line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[-50%] w-full h-8  ">
                <div className="w-8 h-8 bg-zinc-100 rounded-full"></div>
                </div>
            </div>
            </div>
          </div>
           
        </div>

    </div>
  )
}

export default Eyes