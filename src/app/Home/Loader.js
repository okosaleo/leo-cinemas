"use client";
import { useRef } from "react";
import Lottie from "lottie-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Loaderr from "../Lottie/cloader.json";

export default function Loader() {
  gsap.registerPlugin(useGSAP)
  const letter1 = useRef()
  const container = useRef()

  useGSAP(
    () => {
      
      gsap.to(letter1.current, {
      top: "0px",
      ease: "power4.inOut",
      duration: 2,
      stagger: {
        amount: 0.5,
      },
     })}, {scope: container}
  )
  
  return (
    <div ref={container} className=' w-full flex justify-center items-center h-screen'>
       <div className=' w-full text-5xl flex flex-row items-center justify-center  font-sans font-bold'>
        <div className="relative w-[30vw]">
          <div ref={letter1}className=" relative top-[100px]"> <h1 className="">LENNY CINEMAS</h1></div>
          <div className="bg-[#fbfbfb] w-full h-28 z-10 absolute"></div>
          </div>
        <Lottie animationData={Loaderr}  className="h-[20vh]"/>
       </div>
    </div>
  )
}
